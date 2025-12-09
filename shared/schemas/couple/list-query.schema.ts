import { z } from 'zod';

/**
 * Schema para query params de listagem de casais (GET /api/couple)
 * Permite filtrar por parishId e name.
 */
export const coupleListQuerySchema = z.object({
  parishId: z.string().optional(),
  name: z.string().optional(),
});

export type CoupleListQuery = z.infer<typeof coupleListQuerySchema>;
