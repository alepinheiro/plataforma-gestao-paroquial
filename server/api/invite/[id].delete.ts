import { InvitationService } from '~~/server/services/invitation.service';

/**
 * Remove um convite
 */
export default eventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  if (!id) {
    throw createError({
      statusCode: 404,
      message: 'ID not defined',
    });
  };
  const service = new InvitationService();

  const invite = await service.removeInvitation(id);

  return { invite };
});
