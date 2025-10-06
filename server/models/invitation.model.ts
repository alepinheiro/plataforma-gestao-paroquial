// server/models/invitation.model.ts

import { randomBytes } from 'crypto';
import { prisma } from '~~/server/db';
import type { Invitation } from '~~/shared/types/generated/prisma';
import { InvitationStatus } from '~~/shared/types/generated/prisma';

export type CreateInvitationDTO = {
  inviterId: string;
  inviteeId: string;
  // coupleId: string;
  status?: InvitationStatus;
  coupleName: string;
  inviteeEmail: string;
};

export type UpdateInvitationDTO = {
  status?: InvitationStatus;
  coupleId?: string | null;
};

/**
 * Gera um token de convite único baseado no nome do casal + hash aleatório
 */
function generateInvitationToken(coupleName: string): string {
  const slug = coupleName.trim().toLowerCase().replace(/\s+/g, '-');
  const hash = randomBytes(4).toString('hex');
  return `${slug}-${hash}`;
}

/**
 * InvitationModel
 * - Encapsula operações diretas de leitura/escrita no DB para invitations.
 * - Mantenha lógica de negócios no Service; o Model faz operações simples com Prisma.
 */
export class InvitationModel {
  private db = prisma;

  async create(data: CreateInvitationDTO): Promise<Invitation> {
    const token = generateInvitationToken(data.coupleName);

    return this.db.invitation.create({
      data: {
        token,
        inviterId: data.inviterId,
        coupleName: data.coupleName,
        inviteeEmail: data.inviteeEmail,
        // coupleId: data.coupleId ?? undefined,
        status: data.status ?? InvitationStatus.PENDING,
      },
    });
  }

  async findById(id: string): Promise<Invitation | null> {
    return this.db.invitation.findUnique({
      where: { id },
    });
  }

  async findByToken(token: string): Promise<Invitation | null> {
    return prisma.invitation.findUnique({
      where: { token },
    });
  }

  async findByInviter(inviterId: string, status?: InvitationStatus) {
    return this.db.invitation.findMany({
      where: status ? { inviterId, status } : { inviterId },
      orderBy: { createdAt: 'desc' },
    });
  }

  // async findByInvitee(inviteeId: string, status?: InvitationStatus) {
  //   return this.db.invitation.findMany({
  //     where: status ? { inviteeId, status } : { inviteeId },
  //     orderBy: { createdAt: 'desc' },
  //   });
  // }

  // async findPendingByInvitee(inviteeId: string) {
  //   return this.findByInvitee(inviteeId, InvitationStatus.PENDING);
  // }

  async update(id: string, data: UpdateInvitationDTO): Promise<Invitation> {
    return this.db.invitation.update({
      where: { id },
      data: {
        status: data.status,
        coupleId: data.coupleId === undefined ? undefined : data.coupleId,
      },
    });
  }

  async delete(id: string): Promise<Invitation> {
    return this.db.invitation.delete({
      where: { id },
    });
  }

  /**
   * Marca convites como EXPIRED quando ultrapassarem 'olderThanDays' dias desde createdAt e
   * ainda estiverem em estado PENDING.
   */
  async expireOlderThan(olderThanDays = 7) {
    const cutoff = new Date(Date.now() - olderThanDays * 24 * 60 * 60 * 1000);
    const result = await this.db.invitation.updateMany({
      where: {
        status: InvitationStatus.PENDING,
        createdAt: { lt: cutoff },
      },
      data: {
        status: InvitationStatus.EXPIRED,
      },
    });
    return result; // { count: number }
  }
}
