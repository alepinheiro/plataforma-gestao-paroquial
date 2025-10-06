import { createError, eventHandler, readBody } from 'h3';
import { UserModel } from '~~/server/models/user.model';
import { loginSchema } from '~~/shared/schemas/login.schema';

export default eventHandler(async (event) => {
  const { success, data, error } = loginSchema
    .safeParse(await readBody(event));

  if (!success) {
    throw createError({
      statusCode: 403,
      message: error.message,
    });
  }
  const { email, password } = data;

  const userModel = new UserModel();
  const user = await userModel.getByEmail(email);

  if (!user) {
    throw createError({
      statusCode: 403,
      message: 'User not found',
    });
  }

  const isValid = user.password === password;

  if (!isValid) {
    throw createError({
      statusCode: 403,
      message: 'Password not valid',
    });
  }

  await setUserSession(event, {
    user,
  });

  return {
    user,
  };
});
