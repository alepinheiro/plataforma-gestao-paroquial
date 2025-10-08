import { z } from 'zod';

export const archdioceseSchema = z.object({
  name: z.string(),
  id: z.string(),
});
