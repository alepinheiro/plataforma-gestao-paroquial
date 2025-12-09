import { parse } from 'date-fns';
import z from 'zod';
import { createProfile } from '~~/server/services/profile.service';
import { createUser } from '~~/server/services/user.service';
import { ProfileSchema } from '~~/shared/schemas/models/profile.schema';

/**
 * Cria um perfil no sistema
 */
export default eventHandler(async (event) => {
  const { success, data, error } = ProfileSchema
    .omit({
      createdAt: true,
      updatedAt: true,
    })
    .extend({
      birthDate: z.string({ error: 'Data de nascimento é obrigatória.' }),
      password: z.string('Informe uma senha').min(6, { message: 'A senha deve ter no mínimo 6 caracteres.' }).describe('Senha de acesso'),
      confirmPassword: z.string('Confirme a senha').min(6, { message: 'A confirmação de senha deve ter no mínimo 6 caracteres.' }).describe('Confirmação da senha de acesso'),
    })
    .transform(profile => ({
      ...profile,
      birthDate: parse(profile.birthDate, 'dd/MM/yyyy', new Date()),
    }))
    .safeParse(
      await readBody(event),
    );

  if (!success) {
    throw createError({
      statusCode: 403,
      message: error.message,
    });
  }

  if (data.id === 'new') {
    const profile = await createProfile({
      ...data,
    });
    await createUser({
      role: 'USER',
      isActive: true,
      email: data.email,
      profileId: profile.id,
      password: data.password,
      approvalStatus: 'PENDING',
    });
    ;
    return { profile };
  }
});
