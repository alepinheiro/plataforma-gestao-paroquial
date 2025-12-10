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
   * Retorna todos os casais com apenas o _id, member1Id e member2Id.
   */
  async getCoupleMembers() {
    const db = await this.getDb();
    const couples = await db
      .collection<Couple>(this.collectionName)
      .find({}, { projection: { _id: 1, member1Id: 1, member2Id: 1 } })
      .toArray();
    return couples.map(({
      _id,
      member1Id,
      member2Id,
      godparent1Id,
      godparent2Id,
    }) => ({
      _id,
      member1Id,
      member2Id,
      godparent1Id,
      godparent2Id,
    }));
  }

  /**
   * Busca casal pelo profileId (member1Id ou member2Id).
   */
  async getByProfileId(profileId: string): Promise<Couple | null> {
    const db = await this.getDb();
    const doc = await db
      .collection<Couple>(this.collectionName)
      .findOne({
        $or: [
          { member1Id: `${toObjectId(profileId)}` },
          { member2Id: `${toObjectId(profileId)}` },
        ],
      });
    if (!doc) return null;
    return doc;
  }

  /**
   * Retorna todos os casais com dados completos de paróquia e membros.
   * Aceita objeto de filtro validado pelo schema compartilhado.
   * @param filter Objeto validado (parishId, name, ...)
   */
  async getAllWithDetails(filter: { parishId?: string; name?: string } = {}) {
    const db = await this.getDb();

    // Futuro: implementar filtro por nome
    const couples = await db
      .collection<Couple>(this.collectionName)
      .find(filter)
      .toArray();
    if (!couples.length) return [];

    return Promise.all(couples.map(async (couple) => {
      const member1 = await this
        .profileModel.getById(couple.member1Id);
      const member2 = await this
        .profileModel.getById(couple.member2Id);
      const parish = await this
        .parishModel.getById(couple.parishId);
      return {
        ...couple,
        member1,
        member2,
        parish,
      };
    }));
  }
}
