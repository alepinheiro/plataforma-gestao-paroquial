import type { CreateInput, UpdateInput } from '~~/server/models/base.model';
import { CoupleModel } from '~~/server/models/couple.model';
import { CoupleSchema, type Couple } from '~~/shared/schemas/models/couple.schema';

const coupleModel = new CoupleModel();

export async function createCouple(payload: CreateInput<Couple>) {
  const { data, error } = CoupleSchema.safeParse(payload);
  if (error) throw new Error('Invalid couple data: ' + error.message);
  return await coupleModel.create(data);
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
