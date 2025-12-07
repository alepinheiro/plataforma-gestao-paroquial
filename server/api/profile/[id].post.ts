import { parse } from 'date-fns';
import { ProfileModel } from '~~/server/models/profile.model';
// import { UserModel } from '~~/server/models/user.model';
import { profileSchema } from '~~/shared/schemas/profile/index.schema';

/**
 * Cria um perfil no sistema
 */
export default eventHandler(async (event) => {
  const { success, data, error } = profileSchema.safeParse(
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
      createdAt: new Date(),
      updatedAt: new Date(),
      photo: data.photo ?? null,
      facebook: data.facebook ?? null,
      instagram: data.instagram ?? null,
      birthDate: parse(data.birthDate, 'dd/MM/yyyy', new Date()),
      address: { ...data.address, complement: data.address.complement ?? null },
    });

    // const user = await userModel.create({
    //   email: data.email,
    //   profileId: profile.id,
    //   password: data.password,
    // });

    return { user, profile };
  }
});
