/**
 * API: GET /api/couple
 * Retorna casais, podendo filtrar por paróquia.
 * Query params:
 *   - parishId: string (opcional) — filtra casais pela paróquia
 *   - name: string (opcional) — reservado para futuras buscas por nome
 */

import { CoupleModel } from '~~/server/models/couple.model';
import { coupleListQuerySchema } from '~~/shared/schemas/couple/list-query.schema';

/**
 * Handler do endpoint GET /api/couple
 * Retorna casais, filtrando por paróquia se parishId for informado.
 */
export default eventHandler(async (event) => {
  const query = getQuery(event);
  const result = coupleListQuerySchema.safeParse(query);
  if (!result.success) {
    throw createError({
      statusCode: 400,
      message: result.error.message,
    });
  }
  const model = new CoupleModel();
  // Passa objeto validado para o model
  return await model.getAllWithDetails(result.data);
});
