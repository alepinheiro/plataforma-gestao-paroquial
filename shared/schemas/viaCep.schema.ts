import { z } from 'zod';

export const BrazilianStatesEnum = z.enum([
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES',
  'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR',
  'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC',
  'SP', 'SE', 'TO',
]);

export const viaCepSchema = z.object({
  cep: z.string(),
  gia: z.string(),
  ddd: z.string(),
  ibge: z.string(),
  siafi: z.string(),
  bairro: z.string(),
  estado: z.string(),
  regiao: z.string(),
  unidade: z.string(),
  logradouro: z.string(),
  localidade: z.string(),
  complemento: z.string(),
  uf: BrazilianStatesEnum,
});
