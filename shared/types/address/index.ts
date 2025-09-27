import type { z } from 'zod';
import type { addressSchema } from '~~/shared/schemas/address.schema';

/**
 * Tipo que representa os campos de endereço
 */
export type AddressSchema = z.infer<typeof addressSchema>;
