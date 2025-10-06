// server/api/invite.get.ts
import { z } from 'zod';
import { InvitationService } from '~~/server/services/invitation.service';

const schema = z.object({
  userId: z.string('User ID inválido'),
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

  const service = new InvitationService();

  const invites = await service.listInvitationsByInviter(data.userId);

  return invites;
});
