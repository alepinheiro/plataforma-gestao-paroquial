import { z } from 'zod';
import { parishSchema } from '~~/shared/schemas/parish/index.schema';
import { profileSchema } from '~~/shared/schemas/profile/index.schema';

/**
 * Schema para resposta de casal com dados completos de membros e paróquia
 */
export const coupleWithDetailsSchema = z.object({
  id: z.string().describe('ID do casal'),
  member1: profileSchema.describe('Dados do membro 1'),
  member2: profileSchema.describe('Dados do membro 2'),
  parish: parishSchema.describe('Dados da paróquia'),
  marriageDate: z.string().describe('Data do casamento'),
  godparent1Id: z.string().describe('ID do padrinho 1'),
  godparent2Id: z.string().describe('ID do padrinho 2'),
  parishId: z.string().describe('ID da paróquia'),
  createdAt: z.string().describe('Data de criação'),
  updatedAt: z.string().describe('Data de atualização'),
});

export const coupleWithDetailsListSchema = z.array(coupleWithDetailsSchema).describe('Lista de casais com detalhes');

export type CoupleWithDetails = typeof coupleWithDetailsSchema._type;
export type CoupleWithDetailsList = typeof coupleWithDetailsListSchema._type;
