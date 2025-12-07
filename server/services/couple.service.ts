import { CoupleModel } from '~~/server/models/couple.model';
import type { Couple } from '~~/shared/schemas/models/couple.schema';

/**
 * Service para operações de casal.
 * Inclui criação, busca e manipulação de casais.
 */
export class CoupleService {
  private model: CoupleModel;

  constructor() {
    this.model = new CoupleModel();
  }

  /**
   * Cria um novo casal na base de dados.
   * Valida e insere o casal, retornando o registro criado.
   * @param couple Dados do casal a ser criado
   * @returns Casal criado
   * @throws {Error} Se não for possível criar o casal
   */
  async createCouple(couple: Couple): Promise<Couple> {
    // Toda persistência é delegada ao model, que gerencia conexão e conversão.
    const created = await this.model.create(couple);
    if (!created) throw new Error('Falha ao criar casal');
    return created;
  }
}
