import { z } from 'zod';

/**
 * Schema de atribuição de papel para casal em arquidiocese ou paróquia.
 */
export const RoleAssignmentSchema = z.object({
  id: z.string().describe('ID da atribuição'),
  role: z.string().describe('Papel do casal'),
  coupleId: z.string().describe('ID do casal'),
  archdioceseId: z.string().optional().describe('ID da arquidiocese'),
  parishId: z.string().optional().describe('ID da paróquia'),
  createdAt: z.coerce.date().describe('Data de criação'),
  updatedAt: z.coerce.date().describe('Data de atualização'),
}).describe('Atribuição de papel para casal');

export type RoleAssignment = z.infer<typeof RoleAssignmentSchema>;
