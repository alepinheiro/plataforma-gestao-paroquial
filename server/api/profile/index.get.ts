// server/api/profile.get.ts
import { z } from 'zod';
import { getProfiles, getProfilesInCouple, getProfilesNotInCouple } from '~~/server/services/profile.service';

const querySchema = z.object({
  name: z.string(),
  married: z
    .string()
    .transform(val => val === 'true' ? true : val === 'false' ? false : undefined),
}).partial();

export default eventHandler(async (event) => {
  try {
    const rawQuery = getQuery(event);
    const { success, data: query, error } = querySchema.safeParse(rawQuery);
    if (!success) {
      throw createError({
        statusCode: 400,
        message: error.message,
      });
    }

    if (typeof query.married === 'boolean') {
      return query.married
        ? await getProfilesInCouple()
        : await getProfilesNotInCouple();
    }

    return await getProfiles();
  }
  catch (error) {
    console.error(error);
    // @ts-expect-error ignorar e repassar o erro
    throw createError(error);
  }
});
