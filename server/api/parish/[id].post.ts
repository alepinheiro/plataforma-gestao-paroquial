import { ParishModel } from '~~/server/models/parish.model';
import { ParishSchema } from '~~/shared/schemas/models/parish.schema';

/**
 * Cria um perfil no sistema
 */
export default eventHandler(async (event) => {
  const { success, data, error } = ParishSchema.safeParse(
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
