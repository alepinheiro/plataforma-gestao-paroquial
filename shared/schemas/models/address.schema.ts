import { z } from 'zod';

/**
 * Schema de endereço, utilizado em Profile e Parish.
 */
export const AddressSchema = z.object({
  postalCode: z.string({ error: 'CEP é obrigatório.' }).min(8, { error: 'CEP deve ter 8 dígitos.' }).describe('CEP do endereço'),
  street: z.string({ error: 'Rua/Avenida é obrigatória.' }).min(3, { error: 'Rua/Avenida deve ter pelo menos 3 caracteres.' }).describe('Rua/Avenida'),
  number: z.string({ error: 'Número é obrigatório.' }).describe('Número'),
  complement: z.string({ error: 'Complemento deve ser uma string.' }).nullable().optional().describe('Complemento'),
  neighborhood: z.string({ error: 'Bairro é obrigatório.' }).min(3, { error: 'Bairro deve ter pelo menos 3 caracteres.' }).describe('Bairro'),
  city: z.string({ error: 'Cidade é obrigatória.' }).min(2, { error: 'Cidade deve ter pelo menos 2 caracteres.' }).describe('Cidade'),
  state: z.string({ error: 'Estado é obrigatório.' }).min(2, { error: 'Estado deve ter pelo menos 2 caracteres.' }).describe('Estado'),
  country: z.string({ error: 'País é obrigatório.' }).min(2, { error: 'País deve ter pelo menos 2 caracteres.' }).describe('País'),
}).describe('Endereço completo');

export type Address = z.infer<typeof AddressSchema>;
