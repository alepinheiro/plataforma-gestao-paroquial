// src/models/couple.model.ts
import { BaseModel } from '~~/server/models/base.model';
import { ParishModel } from '~~/server/models/parish.model';
import { ProfileModel } from '~~/server/models/profile.model';
import { toObjectId } from '~~/server/utils/mongodb-helpers';
import type { Couple } from '~~/shared/schemas/models/couple.schema';

const COLLECTION = 'Couple';

export class CoupleModel extends BaseModel<Couple> {
  private profileModel = new ProfileModel();
  private parishModel = new ParishModel();
  constructor() {
    super(COLLECTION);
  }

  /**
   * Busca casal pelo profileId (member1Id ou member2Id).
   */
  async getByProfileId(profileId: string): Promise<Couple | null> {
    const db = await this.getDb();
    const doc = await db.collection<Couple>(this.collectionName).findOne({
      $or: [
        { member1Id: toObjectId(profileId) },
        { member2Id: toObjectId(profileId) },
      ],
    });
    if (!doc) return null;
    const { mongoIdToId } = await import('~~/server/utils/mongoIdToId');
    return mongoIdToId(doc);
  }

  /**
   * Retorna todos os casais com dados completos de paróquia e membros.
   */
  async getAllWithDetails() {
    const db = await this.getDb();
    const couples = await db.collection<Couple>(this.collectionName).find({}).toArray();
    if (!couples.length) return [];
    const { mongoIdToId } = await import('~~/server/utils/mongoIdToId');

    return Promise.all(couples.map(async (couple) => {
      const member1 = await this.profileModel.getById(couple.member1Id);
      const member2 = await this.profileModel.getById(couple.member2Id);
      const parish = await this.parishModel.getById(couple.parishId);
      return {
        ...mongoIdToId(couple),
        member1,
        member2,
        parish,
      };
    }));
  }
}
