import type { z } from 'zod';
import { CoupleSchema } from '~~/shared/schemas/models/couple.schema';
import { ParishSchema } from '~~/shared/schemas/models/parish.schema';
import { ProfileSchema } from '~~/shared/schemas/models/profile.schema';

/**
 * Schema para casal com detalhes (paróquia e membros populados)
 */
export const CoupleWithDetailsSchema = CoupleSchema.extend({
  parish: ParishSchema,
  member1: ProfileSchema,
  member2: ProfileSchema,
});

export type CoupleWithDetails = z.infer<typeof CoupleWithDetailsSchema>;
