import { z } from 'zod';
import { AddressSchema } from '~~/shared/schemas/models/address.schema';
import { PermissionSchema } from '~~/shared/schemas/models/permission.schema';
import { RoleAssignmentSchema } from '~~/shared/schemas/models/roleAssignment.schema';

/**
 * Schema de paróquia.
 */
export const ParishSchema = z.object({
  _id: z.string().describe('ID da paróquia'),
  name: z.string().describe('Nome da paróquia'),
  address: AddressSchema.describe('Endereço da paróquia'),
  archdioceseId: z.string().describe('ID da arquidiocese'),
  createdAt: z.coerce.date().describe('Data de criação'),
  updatedAt: z.coerce.date().describe('Data de atualização'),
  couples: z.array(z.string()).optional().describe('IDs dos casais'),
  roles: z.array(RoleAssignmentSchema).optional().describe('Papéis atribuídos'),
  permissions: z.array(PermissionSchema).optional().describe('Permissões'),
}).describe('Entidade de paróquia');

export type Parish = z.infer<typeof ParishSchema>;
