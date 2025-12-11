import type { CreateInput, UpdateInput } from '~~/server/models/base.model';
import { CoupleModel } from '~~/server/models/couple.model';
import { updateProfile } from '~~/server/services/profile.service';
import { CoupleSchema, type Couple } from '~~/shared/schemas/models/couple.schema';

const coupleModel = new CoupleModel();

/**
 * Cria um novo casal e atualiza os perfis dos membros para referenciar o casal criado.
 * @param payload
 * @returns
 */
export async function createCouple(payload: CreateInput<Couple>) {
  const { data, error } = CoupleSchema.safeParse({
    ...payload,
    createdAt: new Date(),
    updatedAt: new Date(),
    approvalStatus: 'PENDING',
  });
  if (error) throw new Error('Invalid couple data: ' + error.message);

  const couple = await coupleModel.create({
    ...data,
    _id: undefined,
    // @ts-expect-error conversão de string para objectId é feita no model
    parishId: toObjectId(data.parishId),
    // @ts-expect-error conversão de string para objectId é feita no model
    member1Id: toObjectId(data.member1Id),
    // @ts-expect-error conversão de string para objectId é feita no model
    member2Id: toObjectId(data.member2Id),
    // @ts-expect-error conversão de string para objectId é feita no model
    coupleReferId: data.coupleReferId ? toObjectId(data.coupleReferId) : null,
  });
  const [member1, member2] = await Promise.all([
    updateProfile(couple.member1Id, { coupleId: couple._id }),
    updateProfile(couple.member2Id, { coupleId: couple._id }),
  ]);
  return { ...couple, member1, member2 };
}

export async function getCoupleById(id: string) {
  return await coupleModel.getById(id);
}

export async function getCouples() {
  const couples = await coupleModel.getAllWithDetails();

  return couples;
}

export async function updateCouple(id: string, payload: UpdateInput<Couple>) {
  const { data, error } = CoupleSchema.partial().safeParse(payload);
  if (error) throw new Error('Invalid couple update data: ' + error.message);
  return await coupleModel.update(id, data);
}

export async function deleteCouple(id: string) {
  return await coupleModel.delete(id);
}
