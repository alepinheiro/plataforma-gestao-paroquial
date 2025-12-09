import { z } from 'zod';
import { ObjectIdSchema } from '~~/server/utils/ObjectId.schema';
import { AddressSchema } from '~~/shared/schemas/models/address.schema';
import { PermissionSchema } from '~~/shared/schemas/models/permission.schema';
import { RoleAssignmentSchema } from '~~/shared/schemas/models/roleAssignment.schema';

/**
 * Schema de paróquia.
 */
export const ParishSchema = z.object({
  id: ObjectIdSchema.describe('ID da paróquia'),
  name: z.string().describe('Nome da paróquia'),
  address: AddressSchema.describe('Endereço da paróquia'),
  archdioceseId: ObjectIdSchema.describe('ID da arquidiocese'),
  createdAt: z.coerce.date().describe('Data de criação'),
  updatedAt: z.coerce.date().describe('Data de atualização'),
  couples: z.array(ObjectIdSchema).optional().describe('IDs dos casais'),
  roles: z.array(RoleAssignmentSchema).optional().describe('Papéis atribuídos'),
  permissions: z.array(PermissionSchema).optional().describe('Permissões'),
}).describe('Entidade de paróquia');

export type Parish = z.infer<typeof ParishSchema>;
