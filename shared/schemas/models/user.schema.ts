import { z } from 'zod';
import { ApprovalStatusEnum } from '~~/shared/schemas/enums/approvalStatus.schema';
import { UserRoleEnum } from '~~/shared/schemas/enums/userRole.schema';
import { PermissionSchema } from '~~/shared/schemas/models/permission.schema';

/**
 * Schema de usuário do sistema.
 */
export const UserSchema = z.object({
  id: z.string().describe('ID do usuário'),
  email: z.email().describe('E-mail do usuário'),
  password: z.string().describe('Senha (hash)'),
  role: UserRoleEnum.describe('Papel do usuário'),
  isActive: z.boolean().describe('Usuário ativo?'),
  profileId: z.string().describe('ID do perfil'),
  approvalStatus: ApprovalStatusEnum.describe('Status de aprovação'),
  createdAt: z.coerce.date().describe('Data de criação'),
  updatedAt: z.coerce.date().describe('Data de atualização'),
  permissions: z.array(PermissionSchema).optional().describe('Permissões'),
}).describe('Usuário do sistema');

export type User = z.infer<typeof UserSchema>;
