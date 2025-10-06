// server/api/profile.get.ts
import { z } from 'zod';
import { ProfileModel } from '~~/server/models/profile.model';

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

  const profileModel = new ProfileModel();

  if (data.name) {
    return await profileModel.searchByName(data.name);
  }

  return await profileModel.getAll();
});
