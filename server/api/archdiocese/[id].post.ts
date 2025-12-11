import { ArchdioceseModel } from '~~/server/models/archdiocese.model';
import { ArchdioceseSchema } from '~~/shared/schemas/models/archdiocese.schema';

/**
 * Cria um perfil no sistema
 */
export default eventHandler(async (event) => {
  const { success, data, error } = ArchdioceseSchema.safeParse(
    await readBody(event),
  );

  if (!success) {
    throw createError({
      statusCode: 403,
      message: error.message,
    });
  }
  const model = new ArchdioceseModel();

  if (data._id === 'new') {
    const result = await model.create({
      name: data.name,
    });

    return result;
  }
});
