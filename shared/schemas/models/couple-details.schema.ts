import type { z } from 'zod';
import { CoupleSchema } from './couple.schema';
import { ParishSchema } from './parish.schema';
import { ProfileSchema } from './profile.schema';

/**
 * Schema para casal com detalhes (paróquia e membros populados)
 */
export const CoupleWithDetailsSchema = CoupleSchema.extend({
  parish: ParishSchema,
  member1: ProfileSchema,
  member2: ProfileSchema,
});

export type CoupleWithDetails = z.infer<typeof CoupleWithDetailsSchema>;
