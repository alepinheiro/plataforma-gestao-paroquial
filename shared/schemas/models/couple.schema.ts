import { z } from 'zod';
import { PermissionSchema } from '~~/shared/schemas/models/permission.schema';
import { RoleAssignmentSchema } from '~~/shared/schemas/models/roleAssignment.schema';

/**
 * Schema de casal do movimento.
 */
export const CoupleSchema = z.object({
  id: z.string().describe('ID do casal'),
  member1Id: z.string().describe('ID do membro 1'),
  member2Id: z.string().describe('ID do membro 2'),
  godparent1Id: z.string().optional().describe('ID do padrinho 1'),
  godparent2Id: z.string().optional().describe('ID do padrinho 2'),
  marriageDate: z.string().describe('Data do matrimônio'),
  parishId: z.string().describe('ID da paróquia'),
  approvalStatus: z.string().describe('Status de aprovação'),
  createdAt: z.coerce.date().describe('Data de criação'),
  updatedAt: z.coerce.date().describe('Data de atualização'),
  roles: z.array(RoleAssignmentSchema).optional().describe('Papéis atribuídos'),
  permissions: z.array(PermissionSchema).optional().describe('Permissões'),
  invitations: z.array(z.string()).optional().describe('IDs dos convites'),
}).describe('Casal do movimento');

export type Couple = z.infer<typeof CoupleSchema>;
