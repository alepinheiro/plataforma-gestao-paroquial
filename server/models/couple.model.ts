// src/models/couple.model.ts
import { prisma } from '~~/server/db'

export class CoupleModel {
  getAll = async () => {
    return await prisma.couple.findMany({
      include: { member1: true, member2: true, parish: true, roles: true },
    })
  }

  getById = async (id: string) => {
    return await prisma.couple.findUnique({
      where: { id },
      include: { member1: true, member2: true, parish: true, roles: true },
    })
  }

  create = async (data: {
    member1Id: string
    member2Id: string
    parishId: string
    marriageDate: Date
  }) => {
    return await prisma.couple.create({ data })
  }

  update = async (
    id: string,
    data: Partial<{ marriageDate: Date, parishId: string }>,
  ) => {
    return await prisma.couple.update({
      where: { id },
      data,
    })
  }

  delete = async (id: string) => {
    return await prisma.couple.delete({ where: { id } })
  }
}
