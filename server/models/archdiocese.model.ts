import { prisma } from '~~/server/db'

export class ArchdioceseModel {
  getAll = async () => {
    return await prisma.archdiocese.findMany({
      include: { parishes: true, roles: true },
    })
  }

  getById = async (id: string) => {
    return await prisma.archdiocese.findUnique({
      where: { id },
      include: { parishes: true, roles: true },
    })
  }

  create = async (data: { name: string }) => {
    return await prisma.archdiocese.create({ data })
  }

  update = async (id: string, data: Partial<{ name: string }>) => {
    return await prisma.archdiocese.update({
      where: { id },
      data,
    })
  }

  delete = async (id: string) => {
    return await prisma.archdiocese.delete({ where: { id } })
  }
}
