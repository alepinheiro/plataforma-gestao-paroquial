// server/models/user.model.ts

import { BaseModel } from '~~/server/models/base.model';
import type { User } from '~~/shared/schemas/models/user.schema';

const COLLECTION = 'User';

/**
 * Model para operações de usuário usando BaseModel.
 * Use UserService para regras de negócio e validação.
 */
export class UserModel extends BaseModel<User> {
  constructor() {
    super(COLLECTION);
  }

  /**
   * Busca usuário por email
   */
  async findByEmail(email: string): Promise<User | null> {
    const db = await this.getDb();
    const doc = await db.collection<User>(this.collectionName).findOne({ email });
    if (!doc) return null;
    return doc;
  }

  /**
   * Busca usuário por profileId
   */
  async findByProfileId(profileId: string): Promise<User | null> {
    const db = await this.getDb();
    const doc = await db.collection<User>(this.collectionName).findOne({ profileId: toObjectId(profileId) });
    if (!doc) return null;
    return doc;
  }

  /**
   * Busca usuário por email (incluindo password)
   */
  async findByEmailWithPassword(email: string): Promise<User | null> {
    return this.findByEmail(email);
  }

  /**
   * Lista todos os usuários com filtros e paginação
   */
  async findAll(limit = 50, skip = 0, filters?: Partial<Pick<User, 'role' | 'isActive' | 'approvalStatus'>>): Promise<User[]> {
    const db = await this.getDb();
    const query: any = {};
    if (filters?.role) query.role = filters.role;
    if (filters?.isActive !== undefined) query.isActive = filters.isActive;
    if (filters?.approvalStatus) query.approvalStatus = filters.approvalStatus;
    const docs = await db.collection<User>(this.collectionName)
      .find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .toArray();
    return docs;
  }

  /**
   * Conta total de usuários com filtros
   */
  async count(filters?: Partial<Pick<User, 'role' | 'isActive' | 'approvalStatus'>>): Promise<number> {
    const db = await this.getDb();
    const query: any = {};
    if (filters?.role) query.role = filters.role;
    if (filters?.isActive !== undefined) query.isActive = filters.isActive;
    if (filters?.approvalStatus) query.approvalStatus = filters.approvalStatus;
    return db.collection<User>(this.collectionName).countDocuments(query);
  }

  /**
   * Busca usuários pendentes de aprovação
   */
  async findPendingApproval(limit = 50, skip = 0): Promise<User[]> {
    return this.findAll(limit, skip, { approvalStatus: 'PENDING' });
  }
}
