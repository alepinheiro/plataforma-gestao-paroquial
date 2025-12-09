import { z } from 'zod';
import { PermissionSchema } from '~~/shared/schemas/models/permission.schema';
import { RoleAssignmentSchema } from '~~/shared/schemas/models/roleAssignment.schema';

/**
 * Schema de arquidiocese/área.
 */
export const ArchdioceseSchema = z.object({
  _id: z.string().describe('ID da arquidiocese'),
  name: z.string().describe('Nome da arquidiocese'),
  createdAt: z.coerce.date().describe('Data de criação'),
  updatedAt: z.coerce.date().describe('Data de atualização'),
  parishes: z.array(z.string()).optional().describe('IDs das paróquias'),
  roles: z.array(RoleAssignmentSchema).optional().describe('Papéis atribuídos'),
  permissions: z.array(PermissionSchema).optional().describe('Permissões'),
}).describe('Entidade de arquidiocese/área');

export type Archdiocese = z.infer<typeof ArchdioceseSchema>;
