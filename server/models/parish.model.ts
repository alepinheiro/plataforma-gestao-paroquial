// src/models/parish.model.ts
import { prisma } from '~~/server/db';
import type { Parish } from '~~/shared/types/generated/prisma';

export class ParishModel {
  getAll = async () => {
    return await prisma.parish.findMany({
      include: { archdiocese: true, couples: true, roles: true },
    });
  };

  getById = async (id: string) => {
    return await prisma.parish.findUnique({
      where: { id },
      include: { archdiocese: true, couples: true, roles: true },
    });
  };

  create = async (data: Pick<Parish, 'address' | 'name' | 'archdioceseId'>) => {
    return await prisma.parish.create({
      data: {
        name: data.name,
        address: data.address,
        archdioceseId: data.archdioceseId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  };

  update = async (
    id: string,
    data: Partial<Parish>,
  ) => {
    return await prisma.parish.update({
      where: { id },
      data,
    });
  };

  delete = async (id: string) => {
    return await prisma.parish.delete({ where: { id } });
  };

  searchByName = async (name: string) => {
    return await prisma.parish.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });
  };
}
