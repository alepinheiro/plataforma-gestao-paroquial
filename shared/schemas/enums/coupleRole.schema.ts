import { z } from 'zod';

/**
 * Enum de papéis de casal na paróquia ou arquidiocese.
 */
export const CoupleRoleEnum = z.enum([
  'COORDINATOR',
  'VICE_COORDINATOR',
  'SPIRITUAL_ASSISTANT',
  'LITURGY',
  'PUBLIC_RELATIONS',
  'SECRETARY',
  'SUPPORT',
  'KITCHEN',
  'MEMBER',
]).describe('Papéis possíveis para casais na paróquia ou arquidiocese.');
export type CoupleRole = z.infer<typeof CoupleRoleEnum>;
