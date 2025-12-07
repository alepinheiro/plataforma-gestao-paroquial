import { parse } from 'date-fns';
import { ProfileModel } from '~~/server/models/profile.model';
import { ProfileSchema } from '~~/shared/schemas/models/profile.schema';

/**
 * Cria um perfil no sistema
 */
export default eventHandler(async (event) => {
  const { success, data, error } = ProfileSchema.safeParse(
    await readBody(event),
  );

  if (!success) {
    throw createError({
      statusCode: 403,
      message: error.message,
    });
  }
  const profileModel = new ProfileModel();
  // const userModel = new UserModel();

  if (data.id === 'new') {
    const profile = await profileModel.create({
      name: data.name,
      email: data.email,
      phone: data.phone,
      gender: data.gender,
      photo: data.photo ?? null,
      facebook: data.facebook ?? null,
      instagram: data.instagram ?? null,
      birthDate: parse(data.birthDate, 'dd/MM/yyyy', new Date()).toLocaleString('pt-BR'),
      address: { ...data.address, complement: data.address.complement ?? null },
      userId: data.userId,
    });

    // const user = await userModel.create({
    //   email: data.email,
    //   profileId: profile.id,
    //   password: data.password,
    // });

    return { profile };
  }
});
