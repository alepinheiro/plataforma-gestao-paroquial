// server/services/invitation.service.ts

import type { CreateInvitationDTO, UpdateInvitationDTO } from '~~/server/models/invitation.model';
import { InvitationModel } from '~~/server/models/invitation.model';
import { InvitationStatusEnum, type InvitationStatus } from '~~/shared/schemas/enums/invitationStatus.schema';

export class InvitationService {
  private model = new InvitationModel();

  /**
   * Cria convite e retorna o link público
   */
  async create(dto: CreateInvitationDTO, baseUrl: string = 'https://localhost:3000') {
    const invitation = await this.model.create(dto);
    const link = `${baseUrl}/invite/${invitation.token}`;
    return { invitation, link };
  }

  /**
   * Retorna um convite público pelo token
   */
  async getByToken(token: string) {
    const invitation = await this.model.findByToken(token);
    if (!invitation) throw new Error('Convite não encontrado ou expirado.');
    return invitation;
  }

  async getById(id: string) {
    const item = await this.model.findById(id);
    if (!item) throw new Error('Convite não encontrado.');
    return item;
  }

  /**
   * Lista convites enviados por um determinado usuário.
   *
   * @param inviterId - ID do usuário que enviou os convites.
   * @param status - (Opcional) Filtrar convites por status.
   * @returns Lista de convites do remetente.
   */
  async listInvitationsByInviter(inviterId: string, status?: InvitationStatus) {
    return this.model.findByInviter(inviterId, status);
  }

  /**
   * Lista convites recebidos por um determinado usuário.
   *
   * @param inviteeId - ID do usuário que recebeu os convites.
   * @param status - (Opcional) Filtrar convites por status.
   * @returns Lista de convites do destinatário.
   */
  // async listInvitationsByInvitee(inviteeId: string, status?: InvitationStatus) {
  //   return this.model.findByInvitee(inviteeId, status);
  // }

  /**
   * Aceita um convite: atualiza o status para ACCEPTED.
   * - Aqui você pode adicionar lógica extra: criar vínculo com o casal, aceitar permissões, etc.
   */
  async acceptInvitation(id: string) {
    const invitation = await this.getById(id);
    if (invitation.status !== InvitationStatusEnum.enum.PENDING) {
      throw new Error('Somente convites PENDING podem ser aceitos.');
    }
    return this.model.update(id, { status: InvitationStatusEnum.enum.ACCEPTED });
  }

  async declineInvitation(id: string) {
    const invitation = await this.getById(id);
    if (invitation.status !== InvitationStatusEnum.enum.PENDING) {
      throw new Error('Somente convites PENDING podem ser recusados.');
    }
    return this.model.update(id, { status: InvitationStatusEnum.enum.DECLINED });
  }

  async expireOldInvitations(daysThreshold = 7) {
    return this.model.expireOlderThan(daysThreshold);
  }

  async updateInvitation(id: string, dto: UpdateInvitationDTO) {
    return this.model.update(id, dto);
  }

  async removeInvitation(id: string) {
    // opcional: checar permissões antes de deletar
    return this.model.delete(id);
  }
}
