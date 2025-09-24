// src/models/user.model.ts
import { prisma } from '~~/server/db'

export class UserModel {
  getAll = async () => {
    return await prisma.user.findMany({
      include: { profile: true, permissions: true },
    })
  }

  getById = async (id: string) => {
    return await prisma.user.findUnique({
      where: { id },
      include: { profile: true, permissions: true },
    })
  }

  create = async (data: {
    email: string
    password: string
    profileId: string
  }) => {
    return await prisma.user.create({ data })
  }

  update = async (
    id: string,
    data: Partial<{ email: string, password: string, isActive: boolean }>,
  ) => {
    return await prisma.user.update({
      where: { id },
      data,
    })
  }

  delete = async (id: string) => {
    return await prisma.user.delete({ where: { id } })
  }
}
