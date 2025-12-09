import { ParishModel } from '~~/server/models/parish.model';
import { parishSchema } from '~~/shared/schemas/parish/index.schema';

/**
 * Cria um perfil no sistema
 */
export default eventHandler(async (event) => {
  const { success, data, error } = parishSchema.safeParse(
    await readBody(event),
  );

  if (!success) {
    throw createError({
      statusCode: 403,
      message: error.message,
    });
  }
  const model = new ParishModel();

  if (data._id === 'new') {
    const result = await model.create({
      name: data.name,
      archdioceseId: data.archdioceseId,
      address: { ...data.address, complement: data.address.complement ?? null },
    });

    return result;
  }
});
