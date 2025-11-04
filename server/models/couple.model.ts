// src/models/couple.model.ts
import { prisma } from '~~/server/db';
import type { Couple } from '~~/shared/types/generated/prisma';

export class CoupleModel {
  getAll = async () => {
    return await prisma.couple.findMany({
      include: { member1: true, member2: true, parish: true, roles: true },
    });
  };

  getById = async (id: string) => {
    return await prisma.couple.findUnique({
      where: { id },
      include: { member1: true, member2: true, parish: true, roles: true },
    });
  };

  create = async (data: Pick<Couple, 'godparent1Id' | 'godparent2Id' | 'marriageDate' | 'member1Id' | 'member2Id' | 'parishId'>) => {
    return await prisma.couple.create({
      data: {
        createdAt: new Date(),
        updatedAt: new Date(),
        parishId: data.parishId,
        approvalStatus: 'PENDING',
        member1Id: data.member1Id,
        member2Id: data.member2Id,
        marriageDate: data.marriageDate,
        godparent1Id: data.godparent1Id,
        godparent2Id: data.godparent2Id,
      },
    });
  };

  getByProfileId = async (profileId: string) => {
    return await prisma.couple.findFirst({
      where: {
        OR: [
          { member1Id: profileId },
          { member2Id: profileId },
        ],
      },
      include: { member1: true, member2: true, parish: true, roles: true },
    });
  };

  update = async (
    id: string,
    data: Partial<{ marriageDate: Date; parishId: string }>,
  ) => {
    return await prisma.couple.update({
      where: { id },
      data,
    });
  };

  delete = async (id: string) => {
    return await prisma.couple.delete({ where: { id } });
  };
}
