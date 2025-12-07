import { z } from 'zod';

/**
 * Enum de status de convite.
 */
export const InvitationStatusEnum = z.enum([
  'PENDING',
  'ACCEPTED',
  'DECLINED',
  'EXPIRED',
]).describe('Status possíveis para convites no sistema.');
export type InvitationStatus = z.infer<typeof InvitationStatusEnum>;
