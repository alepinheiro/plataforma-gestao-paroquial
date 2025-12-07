import { UserService } from '~~/server/services/user.service';

export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await readBody(event);

    const user = await UserService.validateCredentials(email, password);

    if (!user) {
      throw createError({
        statusCode: 401,
        message: 'Email ou senha incorretos',
      });
    }

    // Aqui você criaria um JWT ou session
    return {
      success: true,
      data: user,
      message: 'Login realizado com sucesso',
    };
  }
  catch (error) {
    throw createError({
      statusCode: 401,
      message: error instanceof Error ? error.message : 'Erro ao fazer login',
    });
  }
});
