// src/models/user.model.ts
import { ObjectId } from 'mongodb';
import { z } from 'zod';

export const UserSchema = z.object({
  _id: z.instanceof(ObjectId).optional(),
  email: z.email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  role: z.enum(UserRole).default(UserRole.MEMBER),
  isActive: z.boolean().default(true),
  profileId: z.instanceof(ObjectId),
  approvalStatus: z.enum(ApprovalStatus).default(ApprovalStatus.PENDING),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export const CreateUserSchema = UserSchema.omit({
  _id: true,
  createdAt: true,
  updatedAt: true,
  role: true,
  isActive: true,
  approvalStatus: true,
});

export const UpdateUserSchema = UserSchema.omit({
  _id: true,
  createdAt: true,
  updatedAt: true,
  password: true, // Password tem schema separado
}).partial();

export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(6),
  newPassword: z.string().min(6, 'Nova senha deve ter pelo menos 6 caracteres'),
  confirmPassword: z.string().min(6),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword'],
});

export type User = z.infer<typeof UserSchema>;
export type CreateUser = z.infer<typeof CreateUserSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;
export type ChangePassword = z.infer<typeof ChangePasswordSchema>;

export const USERS_COLLECTION = 'User';
