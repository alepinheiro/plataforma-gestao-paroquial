import type { CreateInput, UpdateInput } from '~~/server/models/base.model';
import { CoupleModel } from '~~/server/models/couple.model';
import { ProfileModel } from '~~/server/models/profile.model';
import { ProfileSchema, type Profile } from '~~/shared/schemas/models/profile.schema';

const profileModel = new ProfileModel();

export async function createProfile(payload: CreateInput<Profile>) {
  const { data, error } = ProfileSchema
    .omit({
      _id: true,
    }).transform(data => ({
      ...data,
      photo: data.photo || null,
      facebook: data.facebook || null,
      instagram: data.instagram || null,
    }))
    .safeParse({
      ...payload,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

  if (error)
    throw new Error('Invalid profile data: ' + error.message);
  return await profileModel.create(data);
}

export async function getProfileById(id: string) {
  return await profileModel.getById(id);
}

export async function getProfiles() {
  return await profileModel.getAll();
}

export async function updateProfile(id: string, payload: UpdateInput<Profile>) {
  // Validação parcial dos dados de atualização usando safeParse
  const { data, error } = ProfileSchema.partial().safeParse(payload);
  if (error) {
    throw new Error('Invalid profile update data: ' + error.message);
  }
  return await profileModel.update(id, data);
}

export async function deleteProfile(id: string) {
  return await profileModel.delete(id);
}

export async function getProfilesNotInCouple() {
  const coupleModel = new CoupleModel();
  const couples = await coupleModel.getCoupleMembers();
  const referencedIds = new Set<string>();
  for (const couple of couples) {
    if (couple.member1Id) referencedIds.add(couple.member1Id.toString());
    if (couple.member2Id) referencedIds.add(couple.member2Id.toString());
    if (couple.godparent1Id) referencedIds.add(couple.godparent1Id.toString());
    if (couple.godparent2Id) referencedIds.add(couple.godparent2Id.toString());
  }
  const profiles = await profileModel.getAll();
  return profiles.filter(profile => !referencedIds.has(profile._id.toString()));
}

export async function getProfilesInCouple() {
  const coupleModel = new CoupleModel();
  const couples = await coupleModel.getCoupleMembers();
  const referencedIds = new Set<string>();
  for (const couple of couples) {
    if (couple.member1Id) referencedIds.add(couple.member1Id.toString());
    if (couple.member2Id) referencedIds.add(couple.member2Id.toString());
    if (couple.godparent1Id) referencedIds.add(couple.godparent1Id.toString());
    if (couple.godparent2Id) referencedIds.add(couple.godparent2Id.toString());
  }
  const profiles = await profileModel.getAll();
  return profiles.filter(profile => referencedIds.has(profile._id.toString()));
}
