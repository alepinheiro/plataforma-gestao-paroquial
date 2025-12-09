import { z } from 'zod';
import { PermissionSchema } from '~~/shared/schemas/models/permission.schema';
import { RoleAssignmentSchema } from '~~/shared/schemas/models/roleAssignment.schema';
import { ObjectIdSchema } from '~~/shared/schemas/ObjectId.schema';

/**
 * Schema de casal do movimento.
 */
export const CoupleSchema = z.object({
  id: z.string().describe('ID do casal'),
  parishId: ObjectIdSchema.describe('ID da paróquia'),
  member1Id: ObjectIdSchema.describe('ID do membro 1'),
  member2Id: ObjectIdSchema.describe('ID do membro 2'),
  createdAt: z.coerce.date().describe('Data de criação'),
  approvalStatus: z.string().describe('Status de aprovação'),
  updatedAt: z.coerce.date().describe('Data de atualização'),
  marriageDate: z.coerce.date().describe('Data do matrimônio'),
  godparent1Id: ObjectIdSchema.optional().describe('ID do padrinho 1'),
  godparent2Id: ObjectIdSchema.optional().describe('ID do padrinho 2'),
  permissions: z.array(PermissionSchema).optional().describe('Permissões'),
  invitations: z.array(z.string()).optional().describe('IDs dos convites'),
  roles: z.array(RoleAssignmentSchema).optional().describe('Papéis atribuídos'),
}).describe('Casal do movimento');

export type Couple = z.infer<typeof CoupleSchema>;
