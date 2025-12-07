import { z } from 'zod';

/**
 * Enum de gênero para perfis de usuário.
 */
export const GenderEnum = z.enum(['MALE', 'FEMALE']).describe('Gêneros possíveis para perfis de usuário.');
export type Gender = z.infer<typeof GenderEnum>;
