// server/api/invite.get.ts
import { z } from 'zod';
import { InvitationService } from '~~/server/services/invitation.service';

const schema = z.object({
  userId: z.string('User ID inválido').optional(),
  token: z.string('Token inválido').optional(),
});

export default eventHandler(async (event) => {
  const query = getQuery(event);

  const { success, data, error } = schema.safeParse(query);
  if (!success) {
    throw createError({
      statusCode: 400,
      message: error.message,
    });
  }

  if (!data.token && !data.userId) {
    throw createError({
      statusCode: 400,
      message: 'Nenhum dado recebido',
    });
  }

  const service = new InvitationService();
  if (data.token) {
    return await service.getByToken(data.token);
  }

  const { user } = await requireUserSession(event);
  if (user.id !== data.userId) {
    throw createError({
      statusCode: 400,
      message: 'UserId não corresponde',
    });
  }

  const invites = await service.listInvitationsByInviter(data.userId);

  return invites;
});
