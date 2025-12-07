import { z } from 'zod';

/**
 * Enum de status de aprovação para entidades do sistema.
 */
export const ApprovalStatusEnum = z.enum([
  'PENDING',
  'APPROVED',
  'REJECTED',
]).describe('Status possíveis para aprovação de entidades no sistema.');
export type ApprovalStatus = z.infer<typeof ApprovalStatusEnum>;
