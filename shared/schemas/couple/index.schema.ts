import { z } from 'zod';

export const createCoupleSchema = z.object({
  member1Id: z
    .string(),
  member2Id: z
    .string(),
  godparent1Id: z
    .string().optional(),
  godparent2Id: z
    .string().optional(),
  marriageDate: z.string(),
  parishId: z
    .string(),
});
