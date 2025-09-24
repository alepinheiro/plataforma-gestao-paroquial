import { z } from 'zod';
import { addressSchema } from '~~/shared/schemas/address.schema';

export const profileSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  address: addressSchema,
  gender: z.enum(['MALE', 'FEMALE']),
  birthDate: z.date(),
  phone: z.string(),
  email: z.string(),
  photo: z.string().optional(),
  instagram: z.string().optional(),
  facebook: z.string().optional(),
});
