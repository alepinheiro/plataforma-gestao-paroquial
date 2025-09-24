import { z } from 'zod';

export const addressSchema = z.object({
  postalCode: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
});
