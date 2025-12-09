/**
 * API: GET /api/couple
 * Retorna casais, podendo filtrar por paróquia.
 * Query params:
 *   - parishId: string (opcional) — filtra casais pela paróquia
 *   - name: string (opcional) — reservado para futuras buscas por nome
 */

import { getCouples } from '~~/server/services/couple.service';
import { coupleListQuerySchema } from '~~/shared/schemas/couple/list-query.schema';

/**
 * Handler do endpoint GET /api/couple
 * Retorna casais, filtrando por paróquia se parishId for informado.
 */
export default eventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const result = coupleListQuerySchema.safeParse(query);
    if (!result.success) {
      throw createError({
        statusCode: 400,
        message: result.error.message,
      });
    }
    // Passa objeto validado para o service
    return await getCouples();
  }
  catch (error) {
    console.error('Error in GET /api/couple:', error);
    throw createError({
      statusCode: 400,
      message: error instanceof Error ? error.message : String(error),
    });
  }
});
