import { z } from 'zod';

/**
 * Enum de entidades para controle de acesso a dados.
 */
export const DataAccessEntityEnum = z.enum([
  'PROFILE',
  'USER',
  'COUPLE',
  'PARISH',
  'ARCHDIOCESE',
  'DATA_ACCESS_LOG',
]).describe('Entidades possíveis para controle de acesso a dados.');
export type DataAccessEntity = z.infer<typeof DataAccessEntityEnum>;
