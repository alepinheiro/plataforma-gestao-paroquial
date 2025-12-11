import { z } from 'zod';
import { PermissionSchema } from '~~/shared/schemas/models/permission.schema';
import { RoleAssignmentSchema } from '~~/shared/schemas/models/roleAssignment.schema';

/**
 * Schema de casal do movimento.
 */
export const CoupleSchema = z.object({
  _id: z.string().describe('ID do casal'),
  parishId: z.string().describe('ID da paróquia'),
  member1Id: z.string().describe('ID do membro 1'),
  member2Id: z.string().describe('ID do membro 2'),
  createdAt: z.coerce.date().describe('Data de criação'),
  approvalStatus: z.string().describe('Status de aprovação'),
  updatedAt: z.coerce.date().describe('Data de atualização'),
  marriageDate: z.coerce.date().describe('Data do matrimônio'),
  permissions: z.array(PermissionSchema).optional().describe('Permissões'),
  invitations: z.array(z.string()).optional().describe('IDs dos convites'),
  roles: z.array(RoleAssignmentSchema).optional().describe('Papéis atribuídos'),
  coupleReferId: z.string().nullable().optional().describe('ID de referência do casal, se aplicável'),
}).describe('Casal do movimento');

export type Couple = z.infer<typeof CoupleSchema>;
