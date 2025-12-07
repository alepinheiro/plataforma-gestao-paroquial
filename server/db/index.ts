// server/utils/db.ts
import { PrismaClient } from '~~/shared/types/generated/prisma/client';

import type { Db, MongoClientOptions } from 'mongodb';
import { MongoClient } from 'mongodb';

declare global {
  var __prisma: PrismaClient | undefined;
}

const createPrismaClient = () =>
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

const prisma = globalThis.__prisma ?? createPrismaClient();

if (process.env.NODE_ENV === 'development') {
  globalThis.__prisma = prisma;
}

export { prisma };

/**
 * Singleton para gerenciar a conexão com MongoDB
 * Evita múltiplas conexões e reutiliza a conexão existente
 */

// Cache global da conexão
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

// Interface para o retorno da conexão
interface DatabaseConnection {
  client: MongoClient;
  db: Db;
}

/**
 * Opções de configuração do MongoDB Client
 */
const getMongoOptions = (): MongoClientOptions => ({
  maxPoolSize: 10, // Máximo de conexões no pool
  minPoolSize: 2, // Mínimo de conexões mantidas
  maxIdleTimeMS: 30000, // Tempo máximo de inatividade
  serverSelectionTimeoutMS: 5000, // Timeout para seleção do servidor
  socketTimeoutMS: 45000, // Timeout do socket
  retryWrites: true, // Retry automático em falhas de escrita
  retryReads: true, // Retry automático em falhas de leitura
});

/**
 * Conecta ao MongoDB usando o padrão Singleton
 * Reutiliza a conexão existente ou cria uma nova se necessário
 */
export async function connectToDatabase(): Promise<DatabaseConnection> {
  // Se já existe uma conexão ativa, reutiliza
  if (cachedClient && cachedDb) {
    try {
      // Testa se a conexão ainda está ativa
      await cachedClient.db().admin().ping();
      return { client: cachedClient, db: cachedDb };
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.warn('⚠️  Conexão MongoDB inativa, reconectando...', error);
      cachedClient = null;
      cachedDb = null;
    }
  }

  // Validação das variáveis de ambiente
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      '❌ MONGODB_URI não está definida nas variáveis de ambiente.\n'
      + 'Adicione MONGODB_URI no arquivo .env',
    );
  }

  const dbName = process.env.MONGODB_DB_NAME;
  if (!dbName) {
    throw new Error(
      '❌ MONGODB_DB_NAME não está definida nas variáveis de ambiente.\n'
      + 'Adicione MONGODB_DB_NAME no arquivo .env',
    );
  }

  try {
    // eslint-disable-next-line no-console
    console.log('🔄 Conectando ao MongoDB...');

    // Cria uma nova conexão
    const client = new MongoClient(uri, getMongoOptions());
    await client.connect();

    // Obtém a instância do banco de dados
    const db = client.db(dbName);

    // Testa a conexão
    await db.admin().ping();

    // Armazena no cache
    cachedClient = client;
    cachedDb = db;

    // eslint-disable-next-line no-console
    console.log(`✅ MongoDB conectado com sucesso ao banco: ${dbName}`);

    // Event listeners para monitoramento
    client.on('serverHeartbeatSucceeded', () => {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('💓 MongoDB heartbeat bem-sucedido');
      }
    });

    client.on('serverHeartbeatFailed', (event) => {
      // eslint-disable-next-line no-console
      console.error('❌ MongoDB heartbeat falhou:', event.failure);
    });

    client.on('close', () => {
      // eslint-disable-next-line no-console
      console.warn('⚠️  Conexão MongoDB fechada');
      cachedClient = null;
      cachedDb = null;
    });

    return { client, db };
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error('❌ Erro ao conectar ao MongoDB:', error);

    // Limpa o cache em caso de erro
    cachedClient = null;
    cachedDb = null;

    throw new Error(
      `Falha ao conectar ao MongoDB: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    );
  }
}

/**
 * Retorna a instância do banco de dados
 * Conecta automaticamente se necessário
 */
export async function getDb(): Promise<Db> {
  const { db } = await connectToDatabase();
  return db;
}

/**
 * Retorna o cliente MongoDB
 * Útil para operações avançadas ou transações
 */
export async function getClient(): Promise<MongoClient> {
  const { client } = await connectToDatabase();
  return client;
}

/**
 * Fecha a conexão com o MongoDB
 * Útil para testes ou shutdown da aplicação
 */
export async function closeDatabase(): Promise<void> {
  if (cachedClient) {
    try {
      await cachedClient.close();
      // eslint-disable-next-line no-console
      console.log('✅ Conexão MongoDB fechada');
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.error('❌ Erro ao fechar conexão MongoDB:', error);
    }
    finally {
      cachedClient = null;
      cachedDb = null;
    }
  }
}

/**
 * Verifica o status da conexão
 */
export async function checkConnection(): Promise<boolean> {
  try {
    if (!cachedClient || !cachedDb) {
      return false;
    }
    await cachedClient.db().admin().ping();
    return true;
  }
  catch {
    return false;
  }
}

/**
 * Retorna informações sobre a conexão
 */
export async function getConnectionInfo() {
  if (!cachedClient || !cachedDb) {
    return {
      connected: false,
      database: null,
    };
  }

  try {
    await cachedClient.db().admin().ping();
    return {
      connected: true,
      database: cachedDb.databaseName,
      options: {
        maxPoolSize: getMongoOptions().maxPoolSize,
        minPoolSize: getMongoOptions().minPoolSize,
      },
    };
  }
  catch {
    return {
      connected: false,
      database: cachedDb.databaseName,
    };
  }
}
