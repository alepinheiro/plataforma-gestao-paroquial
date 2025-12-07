import { z } from 'zod';

/**
 * Enum de ações de acesso a dados.
 */
export const DataAccessActionEnum = z.enum([
  'CREATE',
  'READ',
  'UPDATE',
  'DELETE',
]).describe('Ações possíveis para controle de acesso a dados.');
export type DataAccessAction = z.infer<typeof DataAccessActionEnum>;
