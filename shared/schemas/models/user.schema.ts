import { z } from 'zod';
import { ApprovalStatusEnum } from '~~/shared/schemas/enums/approvalStatus.schema';
import { UserRoleEnum } from '~~/shared/schemas/enums/userRole.schema';
import { PermissionSchema } from '~~/shared/schemas/models/permission.schema';

/**
 * Schema de usuário do sistema.
 */
export const UserSchema = z.object({
  _id: z.string().describe('ID do usuário'),
  password: z.string().describe('Senha (hash)'),
  email: z.email().describe('E-mail do usuário'),
  role: UserRoleEnum.describe('Papel do usuário'),
  isActive: z.boolean().describe('Usuário ativo?'),
  profileId: z.string().describe('ID do perfil'),
  createdAt: z.coerce.date().describe('Data de criação'),
  updatedAt: z.coerce.date().describe('Data de atualização'),
  approvalStatus: ApprovalStatusEnum.describe('Status de aprovação'),
  permissions: z.array(PermissionSchema).optional().describe('Permissões'),
}).describe('Usuário do sistema');

export type User = z.infer<typeof UserSchema>;
