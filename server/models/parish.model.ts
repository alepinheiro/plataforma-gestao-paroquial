// src/models/parish.model.ts

import { BaseModel } from '~~/server/models/base.model';
import type { Parish } from '~~/shared/schemas/models/parish.schema';

const COLLECTION = 'Parish';

export class ParishModel extends BaseModel<Parish> {
  constructor() {
    super(COLLECTION);
  }

  /**
   * Busca paróquias pelo nome (case-insensitive).
   */
  async searchByName(name: string): Promise<Parish[]> {
    const db = await this.getDb();
    const docs = await db.collection<Parish>(this.collectionName).find({ name: { $regex: name, $options: 'i' } }).toArray();
    return docs;
  }
}
