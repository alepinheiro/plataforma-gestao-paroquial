import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string('Esse campo é obrigatório'),
  password: z.string(),
});
