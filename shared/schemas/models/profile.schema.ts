import { z } from 'zod';
import { AddressSchema } from '~~/shared/schemas/models/address.schema';

/**
 * Schema de perfil de pessoa (membro do casal).
 */
export const ProfileSchema = z.object({
  id: z.string().describe('ID do perfil'),
  name: z.string().describe('Nome completo'),
  address: AddressSchema.describe('Endereço residencial'),
  gender: z.string().describe('Gênero (MALE/FEMALE)'),
  birthDate: z.coerce.date().describe('Data de nascimento'),
  phone: z.string().describe('Telefone'),
  email: z.email().describe('E-mail'),
  photo: z.string().optional().describe('URL da foto'),
  instagram: z.string().optional().describe('Instagram'),
  facebook: z.string().optional().describe('Facebook'),
  userId: z.string().optional().describe('ID do usuário'),
  createdAt: z.coerce.date().describe('Data de criação'),
  updatedAt: z.coerce.date().describe('Data de atualização'),
}).describe('Perfil de pessoa do casal');

export type Profile = z.infer<typeof ProfileSchema>;
