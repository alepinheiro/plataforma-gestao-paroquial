import type { CreateInput, UpdateInput } from '~~/server/models/base.model';
import { ProfileModel } from '~~/server/models/profile.model';
import { ProfileSchema, type Profile } from '~~/shared/schemas/models/profile.schema';

const profileModel = new ProfileModel();

export async function createProfile(payload: CreateInput<Profile>) {
  const { data, error } = ProfileSchema.safeParse(payload);

  if (error)
    throw new Error('Invalid profile data: ' + error.message);
  // Remove confirmPassword do objeto antes de salvar
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
