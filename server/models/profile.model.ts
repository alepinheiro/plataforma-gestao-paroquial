// src/models/profile.model.ts
import { prisma } from '~~/server/db'
import type { Gender } from '~~/shared/types/generated/prisma'

export class ProfileModel {
  getAll = async () => {
    return await prisma.profile.findMany()
  }

  getById = async (id: string) => {
    return await prisma.profile.findUnique({ where: { id } })
  }

  create = async (data: {
    name: string
    address: string
    gender: Gender
    birthDate: Date
    phone: string
    email: string
  }) => {
    return await prisma.profile.create({ data })
  }

  update = async (
    id: string,
    data: Partial<{
      name: string
      address: string
      phone: string
      email: string
    }>,
  ) => {
    return await prisma.profile.update({
      where: { id },
      data,
    })
  }

  delete = async (id: string) => {
    return await prisma.profile.delete({ where: { id } })
  }
}
