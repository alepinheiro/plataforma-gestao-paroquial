import { InvitationService } from '~~/server/services/invitation.service';
import { inviteFormSchema } from '~~/shared/schemas/invite/index.schema';

/**
 * Cria um convite no sistema
 */
export default eventHandler(async (event) => {
  const { success, data, error } = inviteFormSchema.safeParse(
    await readBody(event),
  );

  if (!success) {
    throw createError({
      statusCode: 403,
      message: error.message,
    });
  }
  const service = new InvitationService();

  if (data.id === 'new') {
    const result = await service.create({
      status: 'PENDING',
      inviteeId: data.userId,
      inviterId: data.userId,
      inviteeEmail: data.email,
      coupleName: data.herName + ' do ' + data.hisName,
    });

    return result;
  }
});
