import { parse } from 'date-fns';
import z from 'zod';
import { createCouple, getCoupleById } from '~~/server/services/couple.service';
import { InvitationService } from '~~/server/services/invitation.service';
import { createProfile } from '~~/server/services/profile.service';
import { ProfileSchema } from '~~/shared/schemas/models/profile.schema';

/**
 * Cria um casal através do token, usando CoupleService.
 * @param event Evento HTTP do Nuxt
 * @returns Sucesso ou erro
 */
export default eventHandler(async (event) => {
  const token = getRouterParam(event, 'token');

  if (!token) {
    throw createError({
      statusCode: 403,
      message: 'Token not defined',
    });
  }

  const { success, data, error } = z.object({
    member1: ProfileSchema,
    member2: ProfileSchema,
    marriageDate: z.string(),
  }).safeParse(
    await readBody(event),
  );

  if (!success) {
    throw createError({
      statusCode: 403,
      message: error.message,
    });
  }
  const invitationService = new InvitationService();

  const invite = await invitationService.getByToken(token);

  if (!invite) {
    throw createError({
      statusCode: 404,
      message: 'Invite not found',
    });
  }

  const member1 = await createProfile({
    ...data.member1,
    birthDate: parse(data.member1.birthDate, 'dd/MM/yyyy', new Date()).toLocaleString('pt-BR'),
  });
  const member2 = await createProfile({
    ...data.member2,
    birthDate: parse(data.member2.birthDate, 'dd/MM/yyyy', new Date()).toLocaleString('pt-BR'),
  });

  const inviterCouple = await getCoupleById(invite.inviterId);

  if (!inviterCouple) {
    throw createError({
      statusCode: 404,
      message: 'Inviter couple not found',
    });
  }

  await createCouple({
    approvalStatus: '',
    member1Id: member1.id,
    member2Id: member2.id,
    marriageDate: data.marriageDate,
    parishId: inviterCouple.parishId,
    godparent1Id: inviterCouple.member1Id,
    godparent2Id: inviterCouple.member2Id,
  });

  return {
    success: true,
  };
});
