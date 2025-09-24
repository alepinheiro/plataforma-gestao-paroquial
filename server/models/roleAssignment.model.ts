// src/models/roleAssignment.model.ts
import { prisma } from '~~/server/db'
import type { RoleAssignment } from '~~/shared/types/generated/prisma'

export class RoleAssignmentModel {
  getAll = async () => {
    return await prisma.roleAssignment.findMany({
      include: { couple: true, archdiocese: true, parish: true },
    })
  }

  getById = async (id: string) => {
    return await prisma.roleAssignment.findUnique({
      where: { id },
      include: { couple: true, archdiocese: true, parish: true },
    })
  }

  create = async (data: RoleAssignment) => {
    return await prisma.roleAssignment.create({ data })
  }

  update = async (
    id: string,
    data: Partial<RoleAssignment>,
  ) => {
    return await prisma.roleAssignment.update({
      where: { id },
      data,
    })
  }

  delete = async (id: string) => {
    return await prisma.roleAssignment.delete({ where: { id } })
  }
}
