import type { CreateInput, UpdateInput } from '~~/server/models/base.model';
import { CoupleModel } from '~~/server/models/couple.model';
import { ParishModel } from '~~/server/models/parish.model';
import { ProfileModel } from '~~/server/models/profile.model';
import { CoupleWithDetailsSchema, type CoupleWithDetails } from '~~/shared/schemas/models/couple-details.schema';
import { CoupleSchema, type Couple } from '~~/shared/schemas/models/couple.schema';

const coupleModel = new CoupleModel();
const parishModel = new ParishModel();
const profileModel = new ProfileModel();

export async function createCouple(payload: CreateInput<Couple>) {
  const { data, error } = CoupleSchema.safeParse(payload);
  if (error) throw new Error('Invalid couple data: ' + error.message);
  return await coupleModel.create(data);
}

export async function getCoupleById(id: string) {
  return await coupleModel.getById(id);
}

export async function getCouples(): Promise<CoupleWithDetails[]> {
  const couples = await coupleModel.getAll();
  // Popula parish, member1 e member2 para cada casal
  const detailedCouples = await Promise.all(
    couples.map(async (couple) => {
      const [parish, member1, member2] = await Promise.all([
        couple.parishId ? parishModel.getById(couple.parishId.toString()) : null,
        couple.member1Id ? profileModel.getById(couple.member1Id.toString()) : null,
        couple.member2Id ? profileModel.getById(couple.member2Id.toString()) : null,
      ]);

      const detailed = {
        ...couple,
        parish,
        member1,
        member2,
      };
      // Valida com o schema de detalhes
      const { data, error } = CoupleWithDetailsSchema.safeParse(detailed);
      if (error) throw new Error('Invalid couple details: ' + error.message);
      return data;
    }),
  );
  return detailedCouples;
}

export async function updateCouple(id: string, payload: UpdateInput<Couple>) {
  const { data, error } = CoupleSchema.partial().safeParse(payload);
  if (error) throw new Error('Invalid couple update data: ' + error.message);
  return await coupleModel.update(id, data);
}

export async function deleteCouple(id: string) {
  return await coupleModel.delete(id);
}
