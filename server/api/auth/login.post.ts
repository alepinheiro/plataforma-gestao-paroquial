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

    // TODO: criar um JWT ou session
    await setUserSession(event, { user });
    return { user };
  }
  catch (error) {
    throw createError({
      statusCode: 401,
      message: error instanceof Error ? error.message : 'Erro ao fazer login',
    });
  }
});
