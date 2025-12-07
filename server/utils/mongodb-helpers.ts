// server/utils/mongodb-helpers.ts
import { ObjectId } from 'mongodb';

// ===================================
// server/plugins/mongodb-indexes.ts
// ===================================

/**
 * Valida se uma string é um ObjectId válido do MongoDB
 */
export function isValidObjectId(id: string): boolean {
  return ObjectId.isValid(id);
}

/**
 * Converte string para ObjectId com validação
 */
export function toObjectId(id: string): ObjectId {
  if (!isValidObjectId(id)) {
    throw new Error(`ID inválido: ${id}`);
  }
  return new ObjectId(id);
}

/**
 * Converte ObjectId para string
 */
export function fromObjectId(id: ObjectId): string {
  return id.toString();
}

/**
 * Converte array de strings para array de ObjectIds
 */
export function toObjectIdArray(ids: string[]): ObjectId[] {
  return ids.map(id => toObjectId(id));
}

/**
 * Remove campos undefined de um objeto (útil para updates parciais)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cleanUndefined<T extends Record<string, any>>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v !== undefined),
  ) as Partial<T>;
}

/**
 * Gera token único para convites
 */
export function generateInvitationToken(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
}
