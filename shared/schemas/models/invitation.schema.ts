import { z } from 'zod';

/**
 * Schema de convite feito por padrinhos.
 */
export const InvitationSchema = z.object({
  _id: z.string().describe('ID do convite'),
  status: z.string().describe('Status do convite'),
  token: z.string().describe('Token único do convite'),
  createdAt: z.coerce.date().describe('Data de criação'),
  coupleName: z.string().describe('Nome do casal convidado'),
  updatedAt: z.coerce.date().describe('Data de atualização'),
  inviterId: z.string().describe('ID do padrinho (Profile)'),
  coupleId: z.string().optional().describe('ID do casal criado'),
  inviteeEmail: z.email().toLowerCase().describe('E-mail do convidado'),
  profileId: z.string().optional().describe('ID do Profile criado'),
}).describe('Convite feito por padrinhos');

export type Invitation = z.infer<typeof InvitationSchema>;
