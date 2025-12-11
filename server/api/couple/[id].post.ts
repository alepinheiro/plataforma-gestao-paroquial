import { createCouple } from '~~/server/services/couple.service';
import { CoupleSchema } from '~~/shared/schemas/models/couple.schema';

/**
 * Cria um casal através do token
 */
export default eventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  if (!id) {
    throw createError({
      statusCode: 403,
      message: 'ID not defined',
    });
  }
  const body = await readBody(event);

  const { success, data, error } = CoupleSchema
    .omit({
      createdAt: true,
      updatedAt: true,
      approvalStatus: true,
    })
    .safeParse({
      ...body,
      marriageDate: new Date(body.marriageDate),
    });

  if (!success) {
    throw createError({
      statusCode: 403,
      message: error.message,
    });
  }
  // const invitationService = new InvitationService();
  // const profileModel = new ProfileModel();

  // const invite = await invitationService.getByToken(id);

  // if (!invite) {
  //   throw createError({
  //     statusCode: 404,
  //     message: 'Invite not found',
  //   });
  // }

  // const member1 = await profileModel.create({
  //   ...data.member1,
  //   birthDate: parse(data.member1.birthDate, 'dd/MM/yyy', new Date()),
  // });
  // const member2 = await profileModel.create({
  //   ...data.member2,
  //   birthDate: parse(data.member2.birthDate, 'dd/MM/yyy', new Date()),
  // });

  const couple = await createCouple(data);

  return couple;
});
