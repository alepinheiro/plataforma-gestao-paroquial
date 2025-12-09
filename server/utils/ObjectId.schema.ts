import { ObjectId } from 'mongodb';
import z from 'zod';

export const ObjectIdSchema = z.custom<ObjectId>(
  val => val instanceof ObjectId,
  { message: 'Valor não é um ObjectId válido' },
);
