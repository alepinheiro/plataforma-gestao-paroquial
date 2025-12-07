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
  birthDate: z.string().describe('Data de nascimento'),
  phone: z.string().describe('Telefone'),
  email: z.email().describe('E-mail'),
  photo: z.string().nullable().describe('URL da foto'),
  instagram: z.string().nullable().describe('Instagram'),
  facebook: z.string().nullable().describe('Facebook'),
  userId: z.string().describe('ID do usuário'),
  createdAt: z.coerce.date().describe('Data de criação'),
  updatedAt: z.coerce.date().describe('Data de atualização'),
}).describe('Perfil de pessoa do casal');

export type Profile = z.infer<typeof ProfileSchema>;
