import { prisma } from '~~/server/db';
import type { Archdiocese } from '~~/shared/types/generated/prisma';

export class ArchdioceseModel {
  getAll = async () => {
    return await prisma.archdiocese.findMany({
      include: { parishes: true, roles: true },
    });
  };

  getById = async (id: string) => {
    return await prisma.archdiocese.findUnique({
      where: { id },
      include: { parishes: true, roles: true },
    });
  };

  create = async (data: Pick<Archdiocese, 'name'>) => {
    return await prisma.archdiocese.create({
      data: {
        name: data.name,
        createdAt: new Date(),
      },
    });
  };

  update = async (id: string, data: Partial<{ name: string }>) => {
    return await prisma.archdiocese.update({
      where: { id },
      data,
    });
  };

  delete = async (id: string) => {
    return await prisma.archdiocese.delete({ where: { id } });
  };

  searchByName = async (name: string) => {
    return await prisma.archdiocese.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });
  };
}
