import { BaseModel } from '~~/server/models/base.model';
import type { Archdiocese } from '~~/shared/schemas/models/archdiocese.schema';

const COLLECTION = 'Archdiocese';

export class ArchdioceseModel extends BaseModel<Archdiocese> {
  constructor() {
    super(COLLECTION);
  }

  /**
   * Busca arquidioceses pelo nome (case-insensitive).
   */
  async searchByName(name: string): Promise<Archdiocese[]> {
    const db = await this.getDb();
    const docs = await db
      .collection<Archdiocese>(this.collectionName)
      .find({ name: { $regex: name, $options: 'i' } })
      .toArray();
    return docs;
  }
}
