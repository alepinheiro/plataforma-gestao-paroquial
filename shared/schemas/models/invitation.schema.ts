import { z } from 'zod';
import { ObjectIdSchema } from '~~/server/utils/ObjectId.schema';

/**
 * Schema de convite feito por padrinhos.
 */
export const InvitationSchema = z.object({
  id: ObjectIdSchema.describe('ID do convite'),
  status: z.string().describe('Status do convite'),
  token: z.string().describe('Token único do convite'),
  createdAt: z.coerce.date().describe('Data de criação'),
  coupleName: z.string().describe('Nome do casal convidado'),
  updatedAt: z.coerce.date().describe('Data de atualização'),
  inviterId: ObjectIdSchema.describe('ID do padrinho (Profile)'),
  coupleId: ObjectIdSchema.optional().describe('ID do casal criado'),
  inviteeEmail: z.email().toLowerCase().describe('E-mail do convidado'),
  profileId: ObjectIdSchema.optional().describe('ID do Profile criado'),
}).describe('Convite feito por padrinhos');

export type Invitation = z.infer<typeof InvitationSchema>;
