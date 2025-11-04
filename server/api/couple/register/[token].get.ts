import { CoupleModel } from '~~/server/models/couple.model';
import { ProfileModel } from '~~/server/models/profile.model';
import { InvitationService } from '~~/server/services/invitation.service';

/**
 * Cria um casal através do token
 */
export default eventHandler(async (event) => {
  const token = getRouterParam(event, 'token');

  if (!token) {
    throw createError({
      statusCode: 403,
      message: 'Token not defined',
    });
  }

  // const { success, data, error } = z.object({
  //   member1: profileSchema,
  //   member2: profileSchema,
  //   // marriageDate: z.string(),
  // }).safeParse(
  //   await readBody(event),
  // );

  // if (!success) {
  //   throw createError({
  //     statusCode: 403,
  //     message: error.message,
  //   });
  // }
  const invitationService = new InvitationService();
  const coupleModel = new CoupleModel();
  const profileModel = new ProfileModel();

  const invite = await invitationService.getByToken(token);

  if (!invite) {
    throw createError({
      statusCode: 404,
      message: 'Invite not found',
    });
  }

  // const member1 = await profileModel.create({
  //   ...data.member1,
  //   birthDate: parse(data.member1.birthDate, 'dd/MM/yyyy', new Date()),
  // });
  // const member2 = await profileModel.create({
  //   ...data.member2,
  //   birthDate: parse(data.member2.birthDate, 'dd/MM/yyyy', new Date()),
  // });

  console.log({ invite });

  const inviterCouple = await coupleModel.getByProfileId(invite.inviterId);

  if (!inviterCouple) {
    throw createError({
      statusCode: 404,
      message: 'Inviter couple not found',
    });
  }

  // await coupleModel.create({
  //   member1Id: member1.id,
  //   member2Id: member2.id,
  //   // marriageDate: parse(data.marriageDate, 'dd/MM/yyyy', new Date()),
  //   marriageDate: new Date(),
  //   godparent1Id: inviterCouple.member1Id,
  //   godparent2Id: inviterCouple.member2Id,
  //   parishId: inviterCouple.parishId,
  // });

  return inviterCouple;
});
