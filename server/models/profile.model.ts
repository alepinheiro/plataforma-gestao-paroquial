// src/models/profile.model.ts

import { BaseModel } from '~~/server/models/base.model';
import type { Profile } from '~~/shared/schemas/models/profile.schema';

const COLLECTION = 'Profile';

/**
 * Model para operações de Profile usando BaseModel.
 */
export class ProfileModel extends BaseModel<Profile> {
  constructor() {
    super(COLLECTION);
  }

  /**
   * Busca perfis pelo nome (case-insensitive).
   */
  async searchByName(name: string): Promise<Profile[]> {
    const db = await this.getDb();
    const docs = await db.collection<Profile>(this.collectionName).find({ name: { $regex: name, $options: 'i' } }).toArray();
    return docs;
  }
}
