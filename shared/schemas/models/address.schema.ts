import { z } from 'zod';

/**
 * Schema de endereço, utilizado em Profile e Parish.
 */
export const AddressSchema = z.object({
  postalCode: z.string().describe('CEP do endereço'),
  street: z.string().describe('Rua/Avenida'),
  number: z.string().describe('Número'),
  complement: z.string().nullable().describe('Complemento'),
  neighborhood: z.string().describe('Bairro'),
  city: z.string().describe('Cidade'),
  state: z.string().describe('Estado'),
  country: z.string().describe('País'),
}).describe('Endereço completo');

export type Address = z.infer<typeof AddressSchema>;
