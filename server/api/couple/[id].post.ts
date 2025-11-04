import { parse } from 'date-fns';
import { CoupleModel } from '~~/server/models/couple.model';
// import { ProfileModel } from '~~/server/models/profile.model';
// import { InvitationService } from '~~/server/services/invitation.service';
// import { profileSchema } from '~~/shared/schemas/profile/index.schema';
import { createCoupleSchema } from '~~/shared/schemas/couple/index.schema';

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

  const { success, data, error } = createCoupleSchema.safeParse(
    await readBody(event),
  );

  if (!success) {
    throw createError({
      statusCode: 403,
      message: error.message,
    });
  }
  // const invitationService = new InvitationService();
  const coupleModel = new CoupleModel();
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

  const couple = await coupleModel.create({
    ...data,
    marriageDate: parse(data.marriageDate, 'dd/MM/yyyy', new Date()),
  });

  return couple;
});
