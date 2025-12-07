// server/api/profile.get.ts
import { z } from 'zod';
import { CoupleModel } from '~~/server/models/couple.model';

const querySchema = z.object({
  name: z.string().optional(),
});

export default eventHandler(async (event) => {
  const query = getQuery(event);

  const { success, error } = querySchema.safeParse(query);
  if (!success) {
    throw createError({
      statusCode: 400,
      message: error.message,
    });
  }

  const model = new CoupleModel();

  // Sempre retorna casais com dados completos de paróquia e membros
  return await model.getAllWithDetails();
});
