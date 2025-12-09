import { z } from 'zod';
import { GenderEnum } from '~~/shared/schemas/enums/gender.schema';
import { AddressSchema } from '~~/shared/schemas/models/address.schema';

/**
 * Schema de perfil de pessoa (membro do casal).
 */
export const ProfileSchema = z.object({
  gender: GenderEnum,
  address: AddressSchema,
  email: z.email({ error: 'E-mail inválido.' }).describe('E-mail').toLowerCase(),
  id: z.string({ error: 'ID do perfil é obrigatório.' }).describe('ID do perfil'),
  createdAt: z.coerce.date({ error: 'Data de criação inválida.' }).describe('Data de criação'),
  updatedAt: z.coerce.date({ error: 'Data de atualização inválida.' }).describe('Data de atualização'),
  birthDate: z.coerce.date({ error: 'Data de nascimento é obrigatória.' }).describe('Data de nascimento'),
  facebook: z.string({ error: 'Facebook deve ser uma string.' }).nullable().optional().describe('Facebook'),
  photo: z.string({ error: 'URL da foto deve ser uma string.' }).nullable().optional().describe('URL da foto'),
  instagram: z.string({ error: 'Instagram deve ser uma string.' }).nullable().optional().describe('Instagram'),
  phone: z.string({ error: 'Telefone é obrigatório.' }).min(10, { error: 'Telefone deve ter pelo menos 10 dígitos.' }).describe('Telefone'),
  name: z.string({ error: 'Nome completo é obrigatório.' }).min(3, { error: 'Nome deve ter pelo menos 3 caracteres.' }).describe('Nome completo'),
}).describe('Perfil da pessoa de um usuário');

export type Profile = z.infer<typeof ProfileSchema>;
