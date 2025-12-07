// server/utils/mongoIdToId.ts
import type { ObjectId } from 'mongodb';

/**
 * Transforma um documento ou array de documentos MongoDB,
 * mapeando _id para id (string) e removendo _id.
 */
export function mongoIdToId<T extends { _id?: ObjectId }>(doc: T): Omit<T, '_id'> & { id: string };
export function mongoIdToId<T extends { _id?: ObjectId }>(docs: T[]): (Omit<T, '_id'> & { id: string })[];
export function mongoIdToId<T extends { _id?: ObjectId }>(input: T | T[]): any {
  if (Array.isArray(input)) {
    return input.map(mongoIdToId);
  }
  if (!input) return input;
  const { _id, ...rest } = input;
  return {
    ...rest,
    id: _id?.toString?.() ?? '',
  };
}
