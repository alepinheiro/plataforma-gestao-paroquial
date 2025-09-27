import type { z } from 'zod';
import type { viaCepSchema } from '~~/shared/schemas/viaCep.schema';

export type ViaCepResponse = z.infer<typeof viaCepSchema>;
