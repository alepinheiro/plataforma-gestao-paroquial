import type { Db, Document, Filter, OptionalUnlessRequiredId } from 'mongodb';
import { connectToDatabase } from '~~/server/utils/mongo-singleton';
import { toObjectId } from '~~/server/utils/mongodb-helpers';

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
export type CreateInput<T> = Omit<T, '_id' | 'approvalStatus' | 'createdAt' | 'updatedAt'>;

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
  async getAll() {
    const db = await this.getDb();
    const docs = await db
      .collection<T>(this.collectionName)
      .find()
      .map(doc => ({
        ...doc,
        _id: doc._id.toString(),
      }))
      .toArray();
    return docs;
  }

  /**
   * Busca um documento pelo ID.
   */
  async getById(id: string) {
    const db = await this.getDb();
    const filter: Filter<T> = { _id: toObjectId(id) } as Filter<T>;
    const doc = await db
      .collection<T>(this.collectionName)
      .findOne(filter);
    if (!doc) return null;
    return { ...doc, _id: doc._id.toString() };
  }

  /**
   * Cria um novo documento.
   */
  async create(data: CreateInput<T>) {
    const db = await this.getDb();
    const doc: OptionalUnlessRequiredId<T> = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as OptionalUnlessRequiredId<T>;

    const result = await db.collection<T>(this.collectionName).insertOne(doc);
    return { ...doc, _id: result.insertedId.toString() };
  }

  /**
   * Atualiza um documento pelo ID.
   */
  async update(id: string, data: UpdateInput<T>) {
    const db = await this.getDb();
    const filter: Filter<T> = { _id: toObjectId(id) } as Filter<T>;

    await db.collection<T>(this.collectionName).updateOne(
      filter,
      { $set: { ...data, updatedAt: new Date() } as Partial<T> },
    );

    const doc = await db.collection<T>(this.collectionName).findOne(filter);
    if (!doc) return null;
    return { ...doc, _id: doc._id.toString() };
  }

  /**
   * Remove um documento pelo ID.
   */
  async delete(id: string) {
    const db = await this.getDb();
    const filter: Filter<T> = { _id: toObjectId(id) } as Filter<T>;
    const result = await db
      .collection<T>(this.collectionName)
      .deleteOne(filter);
    return result.deletedCount > 0;
  }
}
