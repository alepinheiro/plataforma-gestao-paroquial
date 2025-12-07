import type { Db, Document, OptionalUnlessRequiredId, WithId } from 'mongodb';
import { connectToDatabase } from '~~/server/utils/mongo-singleton';
import { toObjectId } from '~~/server/utils/mongodb-helpers';
import { mongoIdToId } from '~~/server/utils/mongoIdToId';

/**
 * Tipo base para documentos do MongoDB com timestamps
 */
export interface BaseDocument {
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Tipo para criação de documentos (sem _id, createdAt, updatedAt)
 */
export type CreateInput<T> = Omit<T, '_id' | 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Tipo para atualização de documentos (campos parciais, sem _id, createdAt, updatedAt)
 */
export type UpdateInput<T> = Partial<Omit<T, '_id' | 'createdAt' | 'updatedAt'>>;

/**
 * Model base genérico para operações CRUD MongoDB.
 * @template T Tipo do documento que estende Document e BaseDocument
 */
export class BaseModel<T extends Document & BaseDocument> {
  protected db: Db | null = null;
  protected collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  protected async getDb(): Promise<Db> {
    if (!this.db) {
      this.db = await connectToDatabase();
    }
    return this.db;
  }

  /**
   * Retorna todos os documentos da coleção.
   */
  async getAll(): Promise<T[]> {
    const db = await this.getDb();
    const docs = await db.collection<T>(this.collectionName).find({}).toArray();
    return mongoIdToId(docs);
  }

  /**
   * Busca um documento pelo ID.
   */
  async getById(id: string): Promise<T | null> {
    const db = await this.getDb();
    const doc = await db.collection<T>(this.collectionName).findOne({ _id: toObjectId(id) }) as WithId<T> | null;
    if (!doc) return null;
    return mongoIdToId(doc);
  }

  /**
   * Cria um novo documento.
   */
  async create(data: CreateInput<T>): Promise<T> {
    const db = await this.getDb();
    const doc: OptionalUnlessRequiredId<T> = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as OptionalUnlessRequiredId<T>;

    const result = await db.collection<T>(this.collectionName).insertOne(doc);
    return mongoIdToId({ ...doc, _id: result.insertedId });
  }

  /**
   * Atualiza um documento pelo ID.
   */
  async update(id: string, data: UpdateInput<T>): Promise<any | null> {
    const db = await this.getDb();

    await db.collection<T>(this.collectionName).updateOne(
      { _id: toObjectId(id) },
      { $set: { ...data, updatedAt: new Date() } },
    );

    const doc = await db.collection<T>(this.collectionName).findOne({ _id: toObjectId(id) });
    if (!doc) return null;
    return mongoIdToId(doc);
  }

  /**
   * Remove um documento pelo ID.
   */
  async delete(id: string): Promise<boolean> {
    const db = await this.getDb();
    const result = await db.collection<T>(this.collectionName).deleteOne({ _id: toObjectId(id) });
    return result.deletedCount > 0;
  }
}
