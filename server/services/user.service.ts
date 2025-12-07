// server/services/user.service.ts

import { compareSync, hashSync } from 'bcrypt';
import { UserModel } from '~~/server/models/user.model';
import type { ApprovalStatus } from '~~/shared/schemas/enums/approvalStatus.schema';
import type { UserRole } from '~~/shared/schemas/enums/userRole.schema';
import type { User } from '~~/shared/schemas/models/user.schema';

const userModel = new UserModel();

/**
 * Cria um novo usuário
 */
export async function createUser(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
  // Hash da senha
  const hashed = hashSync(data.password, 10);
  const user = await userModel.create({
    ...data,
    password: hashed,
  });
  return user as User;
}

/**
 * Busca usuário pelo ID
 */
export async function findUserById(id: string): Promise<User | null> {
  return userModel.getById(id) as Promise<User | null>;
}

/**
 * Busca usuário pelo email (opção de retornar senha)
 */
export async function findUserByEmail(email: string, withPassword = false): Promise<User | null> {
  if (withPassword) return userModel.findByEmailWithPassword(email);
  return userModel.findByEmail(email);
}

/**
 * Busca usuário pelo profileId
 */
export async function findUserByProfileId(profileId: string): Promise<User | null> {
  return userModel.findByProfileId(profileId);
}

/**
 * Lista todos os usuários
 */
export async function findAllUsers(limit = 50, skip = 0, filters?: Partial<Pick<User, 'role' | 'isActive' | 'approvalStatus'>>): Promise<User[]> {
  return userModel.findAll(limit, skip, filters);
}

/**
 * Conta o número de usuários
 */
export async function countUsers(filters?: Partial<Pick<User, 'role' | 'isActive' | 'approvalStatus'>>): Promise<number> {
  return userModel.count(filters);
}

/**
 * Atualiza dados de um usuário
 */
export async function updateUser(id: string, data: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'password'>>): Promise<User | null> {
  return userModel.update(id, data);
}

/**
 * Troca a senha de um usuário
 */
export async function changePassword(id: string, oldPassword: string, newPassword: string): Promise<boolean> {
  const user = await userModel.getById(id);
  if (!user) return false;
  if (!compareSync(oldPassword, user.password)) return false;
  const hashed = hashSync(newPassword, 10);
  await userModel.update(id, { password: hashed });
  return true;
}

/**
 * Reseta a senha de um usuário (admin)
 */
export async function resetPassword(id: string, newPassword: string): Promise<boolean> {
  const hashed = hashSync(newPassword, 10);
  const updated = await userModel.update(id, { password: hashed });
  return !!updated;
}

/**
 * Ativa um usuário
 */
export async function activateUser(id: string): Promise<User | null> {
  return userModel.update(id, { isActive: true });
}

/**
 * Inativa um usuário
 */
export async function deactivateUser(id: string): Promise<User | null> {
  return userModel.update(id, { isActive: false });
}

/**
 * Atualiza o status de aprovação do usuário
 */
export async function updateApprovalStatus(id: string, status: ApprovalStatus): Promise<User | null> {
  return userModel.update(id, { approvalStatus: status });
}

/**
 * Atualiza a role do usuário
 */
export async function updateUserRole(id: string, role: UserRole): Promise<User | null> {
  return userModel.update(id, { role });
}

/**
 * Exclui um usuário
 */
export async function deleteUser(id: string): Promise<boolean> {
  return userModel.delete(id);
}

/**
 * Valida credenciais de login
 */
export async function validateCredentials(email: string, password: string) {
  const user = await userModel.findByEmailWithPassword(email);
  if (!user) return null;
  // TODO: Usar bcrypt para comparar senhas
  // if (!compareSync(password, user.password)) return null;
  // console.log({ password, userPassword: user.password });
  if (password !== user.password) return null;

  return {
    ...user,
    password: undefined,
  };
}

/**
 * Busca usuários pendentes de aprovação
 */
export async function findPendingUsers(limit = 50, skip = 0): Promise<User[]> {
  return userModel.findPendingApproval(limit, skip);
}
