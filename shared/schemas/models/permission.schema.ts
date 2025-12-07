import { z } from 'zod';

/**
 * Schema de permissão de usuário em contexto específico.
 */
export const PermissionSchema = z.object({
  id: z.string().describe('ID da permissão'),
  userId: z.string().describe('ID do usuário'),
  entity: z.string().describe('Entidade de acesso'),
  action: z.string().describe('Ação de acesso'),
  archdioceseId: z.string().optional().describe('ID da arquidiocese'),
  parishId: z.string().optional().describe('ID da paróquia'),
  coupleId: z.string().optional().describe('ID do casal'),
  resourceId: z.string().optional().describe('ID do recurso'),
  createdAt: z.coerce.date().describe('Data de criação'),
  updatedAt: z.coerce.date().describe('Data de atualização'),
}).describe('Permissão de usuário em contexto');

export type Permission = z.infer<typeof PermissionSchema>;
