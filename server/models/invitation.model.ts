// server/models/invitation.model.ts

import bcrypt from 'bcrypt';
import { BaseModel } from '~~/server/models/base.model';
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
 * Gera um token de convite único baseado no nome do casal + hash bcrypt
 */
function generateInvitationToken(coupleName: string): string {
  const slug = coupleName.trim().toLowerCase().replace(/\s+/g, '-');
  // Gera um salt e um hash bcrypt, pega só parte do hash para o token
  const salt = bcrypt.genSaltSync(6);
  const hash = bcrypt.hashSync(Date.now().toString() + Math.random(), salt)
    .replace(/[^a-zA-Z0-9]/g, '') // remove caracteres especiais
    .slice(0, 8); // reduz o tamanho do hash para o token
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
    if (!data.coupleId) throw new Error('Couple ID is required');
    const doc: Omit<Invitation, '_id'> = {
      token,
      inviterId: data.inviterId,
      // inviteeId: data.inviteeId,
      coupleId: data.coupleId,
      coupleName: data.coupleName,
      inviteeEmail: data.inviteeEmail,
      status: data.status ?? 'PENDING',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const result = await db.collection<typeof doc>(this.collectionName).insertOne(doc);
    return mongoIdToId({ ...doc, _id: result.insertedId });
  }

  async findById(id: string): Promise<Invitation | null> {
    const db = await this.getDb();
    const doc = await db.collection<Invitation>(this.collectionName).findOne({ _id: toObjectId(id) });
    if (!doc) return null;
    return doc;
  }

  async findByToken(token: string): Promise<Invitation | null> {
    const db = await this.getDb();
    const doc = await db.collection<Invitation>(this.collectionName).findOne({ token });
    if (!doc) return null;
    return doc;
  }

  async findByInviter(inviterId: string, status?: string): Promise<Invitation[]> {
    const db = await this.getDb();
    const query = { inviterId: toObjectId(inviterId), status: undefined as string | undefined };
    if (status) query.status = status;
    const docs = await db.collection<Invitation>(this.collectionName).find(query).sort({ createdAt: -1 }).toArray();
    return docs;
  }

  async update(id: string, data: UpdateInvitationDTO): Promise<Invitation | null> {
    const db = await this.getDb();
    await db
      .collection<Invitation>(this.collectionName)
      .updateOne(
        { _id: toObjectId(id) },
        { $set: { ...data, updatedAt: new Date() } },
      );
    const doc = await db
      .collection<Invitation>(this.collectionName)
      .findOne({ _id: toObjectId(id) });
    if (!doc) return null;
    return doc;
  }

  async delete(id: string): Promise<boolean> {
    const db = await this.getDb();
    const result = await db
      .collection<Invitation>(this.collectionName)
      .deleteOne({ _id: toObjectId(id) });
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
