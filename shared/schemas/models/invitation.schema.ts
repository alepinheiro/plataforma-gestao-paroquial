import { z } from 'zod';

/**
 * Schema de convite feito por padrinhos.
 */
export const InvitationSchema = z.object({
  id: z.string().describe('ID do convite'),
  inviterId: z.string().describe('ID do padrinho (Profile)'),
  coupleName: z.string().describe('Nome do casal convidado'),
  inviteeEmail: z.string().email().describe('E-mail do convidado'),
  coupleId: z.string().optional().describe('ID do casal criado'),
  status: z.string().describe('Status do convite'),
  token: z.string().describe('Token único do convite'),
  createdAt: z.coerce.date().describe('Data de criação'),
  updatedAt: z.coerce.date().describe('Data de atualização'),
  profileId: z.string().optional().describe('ID do Profile criado'),
}).describe('Convite feito por padrinhos');

export type Invitation = z.infer<typeof InvitationSchema>;
