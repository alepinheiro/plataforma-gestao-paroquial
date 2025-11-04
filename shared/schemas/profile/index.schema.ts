import { z } from 'zod';
import { addressSchema } from '~~/shared/schemas/address.schema';

const passwordSchema = z
  .string('Senha inválida')
  .min(8, 'A senha deve ter no mínimo 8 caracteres')
  .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
  .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
  .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
  .regex(/[^A-Za-z0-9]/, 'A senha deve conter pelo menos um caractere especial');
export const profileSchema = z
  .object({
    address: addressSchema,
    password: passwordSchema,
    photo: z.string().optional().transform(value => value ? value : null).nullable(),
    id: z.string('ID é inválido'),
    confirmPassword: passwordSchema,
    facebook: z.string().optional().transform(value => value ? value : null).nullable(),
    instagram: z.string().optional().transform(value => value ? value : null).nullable(),
    email: z.email('E-mail inválido'),
    gender: z.enum(['MALE', 'FEMALE']),
    phone: z.string('Telefone inválido'),
    name: z.string('Nome inválido').trim(),
    birthDate: z.string('Data de nascimento inválida'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });
