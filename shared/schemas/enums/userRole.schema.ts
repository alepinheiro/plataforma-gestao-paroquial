import { z } from 'zod';

/**
 * Enum de papéis de usuário no sistema.
 */
export const UserRoleEnum = z.enum([
  'SUPER_ADMIN',
  'ADMIN',
  'USER',
]).describe('Papéis possíveis para usuários no sistema.');
export type UserRole = z.infer<typeof UserRoleEnum>;
