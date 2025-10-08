import { z } from 'zod';
import { addressSchema } from '~~/shared/schemas/address.schema';

export const parishSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: addressSchema,
  archdioceseId: z.string(),
});
