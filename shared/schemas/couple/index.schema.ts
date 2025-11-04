import { z } from 'zod';

/**
 * Schema para criar um casal a partir da parte autenticada
 */
export const createCoupleSchema = z.object({
  member1Id: z.string(),
  member2Id: z.string(),
  godparent1Id: z.string(),
  godparent2Id: z.string(),
  marriageDate: z.string(),
  parishId: z.string(),
});
