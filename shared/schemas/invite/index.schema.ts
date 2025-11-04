import { z } from 'zod';

/**
 * Schema do formulário do convite
 */
export const inviteFormSchema = z.object({
  id: z.string(),
  email: z.email(),
  userId: z.string(),
  hisName: z.string(),
  herName: z.string(),
  coupleId: z.string(),
});
