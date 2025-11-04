// src/models/profile.model.ts
import { prisma } from '~~/server/db';
import type { Profile } from '~~/shared/types/generated/prisma';

export class ProfileModel {
  getAll = async () => {
    return await prisma.profile.findMany();
  };

  getById = async (id: Profile['id']) => {
    return await prisma.profile.findUnique({ where: { id } });
  };

  create = async (data: Omit<Profile, 'id' | 'createdAt' | 'updatedAt'>) => {
    return await prisma.profile.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        photo: data.photo,
        gender: data.gender,
        address: data.address,
        createdAt: new Date(),
        updatedAt: new Date(),
        facebook: data.facebook,
        birthDate: data.birthDate,
        instagram: data.instagram,
      },
    });
  };

  update = async (
    id: Profile['id'],
    data: Partial<Profile>,
  ) => {
    return await prisma.profile.update({
      where: { id },
      data,
    });
  };

  delete = async (id: Profile['id']) => {
    return await prisma.profile.delete({ where: { id } });
  };

  searchByName = async (name: string) => {
    return await prisma.profile.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });
  };
}
