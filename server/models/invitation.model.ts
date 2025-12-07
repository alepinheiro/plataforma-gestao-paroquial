// server/models/invitation.model.ts

import { randomBytes } from 'crypto';
import { BaseModel } from '~~/server/models/base.model';
import { toObjectId } from '~~/server/utils/mongodb-helpers';
import type { Invitation } from '~~/shared/schemas/models/invitation.schema';

export type CreateInvitationDTO = {
  inviterId: string;
  inviteeId: string;
  coupleId?: string;
  status?: string;
  coupleName: string;
  inviteeEmail: string;
};

export type UpdateInvitationDTO = {
  status?: string;
  coupleId?: string | null;
};

/**
 * Gera um token de convite único baseado no nome do casal + hash aleatório
 */
function generateInvitationToken(coupleName: string): string {
  const slug = coupleName.trim().toLowerCase().replace(/\s+/g, '-');
  const hash = randomBytes(4).toString('hex');
  return `${slug}-${hash}`;
}

const COLLECTION = 'Invitation';

export class InvitationModel extends BaseModel<Invitation> {
  constructor() {
    super(COLLECTION);
  }

  async create(data: CreateInvitationDTO) {
    const db = await this.getDb();
    const token = generateInvitationToken(data.coupleName);
    const doc: Omit<Invitation, 'id'> = {
      token,
      inviterId: toObjectId(data.inviterId),
      inviteeId: toObjectId(data.inviteeId),
      coupleId: data.coupleId ? toObjectId(data.coupleId) : undefined,
      coupleName: data.coupleName,
      inviteeEmail: data.inviteeEmail,
      status: data.status ?? 'PENDING',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const result = await db.collection<typeof doc>(this.collectionName).insertOne(doc);
    const { mongoIdToId } = await import('~~/server/utils/mongoIdToId');
    return mongoIdToId({ ...doc, _id: result.insertedId });
  }

  async findById(id: string): Promise<Invitation | null> {
    const db = await this.getDb();
    const doc = await db.collection<Invitation>(this.collectionName).findOne({ _id: toObjectId(id) });
    if (!doc) return null;
    const { mongoIdToId } = await import('~~/server/utils/mongoIdToId');
    return mongoIdToId(doc);
  }

  async findByToken(token: string): Promise<Invitation | null> {
    const db = await this.getDb();
    const doc = await db.collection<Invitation>(this.collectionName).findOne({ token });
    if (!doc) return null;
    const { mongoIdToId } = await import('~~/server/utils/mongoIdToId');
    return mongoIdToId(doc);
  }

  async findByInviter(inviterId: string, status?: string): Promise<Invitation[]> {
    const db = await this.getDb();
    const query: any = { inviterId: toObjectId(inviterId) };
    if (status) query.status = status;
    const docs = await db.collection<Invitation>(this.collectionName).find(query).sort({ createdAt: -1 }).toArray();
    const { mongoIdToId } = await import('~~/server/utils/mongoIdToId');
    return mongoIdToId(docs);
  }

  async update(id: string, data: UpdateInvitationDTO): Promise<Invitation | null> {
    const db = await this.getDb();
    await db.collection<Invitation>(this.collectionName).updateOne(
      { _id: toObjectId(id) },
      { $set: { ...data, updatedAt: new Date() } },
    );
    const doc = await db.collection<Invitation>(this.collectionName).findOne({ _id: toObjectId(id) });
    if (!doc) return null;
    const { mongoIdToId } = await import('~~/server/utils/mongoIdToId');
    return mongoIdToId(doc);
  }

  async delete(id: string): Promise<boolean> {
    const db = await this.getDb();
    const result = await db.collection<Invitation>(this.collectionName).deleteOne({ _id: toObjectId(id) });
    return result.deletedCount > 0;
  }

  /**
   * Marca convites como EXPIRED quando ultrapassarem 'olderThanDays' dias desde createdAt e ainda estiverem em estado PENDING.
   */
  async expireOlderThan(olderThanDays = 7) {
    const db = await this.getDb();
    const cutoff = new Date(Date.now() - olderThanDays * 24 * 60 * 60 * 1000);
    const result = await db.collection<Invitation>(this.collectionName).updateMany(
      {
        status: 'PENDING',
        createdAt: { $lt: cutoff },
      },
      {
        $set: { status: 'EXPIRED', updatedAt: new Date() },
      },
    );
    return result;
  }
}
