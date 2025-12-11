import { InvitationService } from '~~/server/services/invitation.service';
import { InvitationSchema } from '~~/shared/schemas/models/invitation.schema';

/**
 * Cria um convite no sistema
 */
export default eventHandler(async (event) => {
  const { success, data, error } = InvitationSchema.safeParse(
    await readBody(event),
  );

  if (!success) {
    throw createError({
      statusCode: 403,
      message: error.message,
    });
  }
  const service = new InvitationService();

  if (data._id === 'new') {
    const result = await service.create({
      status: 'PENDING',
      inviteeId: data.inviterId,
      inviterId: data.inviterId,
      inviteeEmail: 'email@example.com',
      coupleName: data.coupleName,
    });

    return result;
  }
});
