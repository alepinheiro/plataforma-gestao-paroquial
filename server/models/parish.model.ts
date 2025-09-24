// src/models/parish.model.ts
import { prisma } from '~~/server/db'

export class ParishModel {
  getAll = async () => {
    return await prisma.parish.findMany({
      include: { archdiocese: true, couples: true, roles: true },
    })
  }

  getById = async (id: string) => {
    return await prisma.parish.findUnique({
      where: { id },
      include: { archdiocese: true, couples: true, roles: true },
    })
  }

  create = async (data: {
    name: string
    address: string
    archdioceseId: string
  }) => {
    return await prisma.parish.create({ data })
  }

  update = async (
    id: string,
    data: Partial<{ name: string, address: string }>,
  ) => {
    return await prisma.parish.update({
      where: { id },
      data,
    })
  }

  delete = async (id: string) => {
    return await prisma.parish.delete({ where: { id } })
  }
}
