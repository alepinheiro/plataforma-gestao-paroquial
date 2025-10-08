// server/api/profile.get.ts
import { z } from 'zod';
import { ArchdioceseModel } from '~~/server/models/archdiocese.model';

const querySchema = z.object({
  name: z.string().optional(),
});

export default eventHandler(async (event) => {
  const query = getQuery(event);

  const { success, data, error } = querySchema.safeParse(query);
  if (!success) {
    throw createError({
      statusCode: 400,
      message: error.message,
    });
  }

  const model = new ArchdioceseModel();

  if (data.name) {
    return await model.searchByName(data.name);
  }

  return await model.getAll();
});
