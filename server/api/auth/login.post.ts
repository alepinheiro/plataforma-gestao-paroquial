import { getProfileById } from '~~/server/services/profile.service';
import { validateCredentials } from '~~/server/services/user.service';

export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await readBody(event);

    const user = await validateCredentials(email, password);
    delete user?.password;
    if (!user) {
      throw createError({
        statusCode: 401,
        message: 'Email ou senha incorretos',
      });
    }

    const profile = await getProfileById(user.profileId);
    const userWithProfile = { ...user, profile };
    await setUserSession(event, { user: userWithProfile });
    return {
      user: userWithProfile,
    };
  }
  catch (error) {
    throw createError({
      statusCode: 401,
      message: error instanceof Error ? error.message : 'Erro ao fazer login',
    });
  }
});
