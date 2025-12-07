// server/services/user.service.ts
import { compare, hash } from 'bcrypt';
import { getDb } from '~~/server/db';
import type { ChangePassword, CreateUser, UpdateUser, User } from '~~/server/models/user.model';
import { ChangePasswordSchema, CreateUserSchema, UpdateUserSchema, USERS_COLLECTION } from '~~/server/models/user.model';
import { isValidObjectId, toObjectId } from '~~/server/utils/mongodb-helpers';

const SALT_ROUNDS = 10;

export class UserService {
  /**
   * Obtém a collection de usuários
   */
  private static async getCollection() {
    const db = await getDb();
    return db.collection<User>(USERS_COLLECTION);
  }

  /**
   * Cria um novo usuário
   */
  static async create(userData: CreateUser): Promise<Omit<User, 'password'>> {
    // Valida dados com Zod
    const validated = CreateUserSchema.parse(userData);

    const collection = await this.getCollection();

    // Verifica se email já existe
    const existingUser = await collection.findOne({ email: validated.email });
    if (existingUser) {
      throw new Error('Email já cadastrado');
    }

    // Verifica se profileId já está vinculado a outro usuário
    const userWithProfile = await collection.findOne({
      profileId: validated.profileId,
    });
    if (userWithProfile) {
      throw new Error('Este perfil já está vinculado a outro usuário');
    }

    // Hash da senha
    const hashedPassword = await hash(validated.password, SALT_ROUNDS);

    // Monta o novo usuário
    const newUser: Omit<User, '_id'> = {
      email: validated.email,
      password: hashedPassword,
      profileId: validated.profileId,
      role: UserRole.MEMBER,
      isActive: true,
      approvalStatus: ApprovalStatus.PENDING,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await collection.insertOne(newUser as any);

    // Retorna sem o password
    return {
      _id: result.insertedId,
      email: newUser.email,
      profileId: newUser.profileId,
      role: newUser.role,
      isActive: newUser.isActive,
      approvalStatus: newUser.approvalStatus,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    };
  }

  /**
   * Busca usuário por ID
   */
  static async findById(id: string): Promise<Omit<User, 'password'> | null> {
    if (!isValidObjectId(id)) {
      throw new Error('ID inválido');
    }

    const collection = await this.getCollection();
    const user = await collection.findOne({ _id: toObjectId(id) });

    if (!user) return null;

    // Remove password do retorno
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /**
   * Busca usuário por email
   */
  static async findByEmail(email: string): Promise<Omit<User, 'password'> | null> {
    const collection = await this.getCollection();
    const user = await collection.findOne({ email });

    if (!user) return null;

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /**
   * Busca usuário por email (incluindo password para autenticação)
   */
  static async findByEmailWithPassword(email: string): Promise<User | null> {
    const collection = await this.getCollection();
    return await collection.findOne({ email });
  }

  /**
   * Busca usuário por profileId
   */
  static async findByProfileId(profileId: string): Promise<Omit<User, 'password'> | null> {
    if (!isValidObjectId(profileId)) {
      throw new Error('ProfileId inválido');
    }

    const collection = await this.getCollection();
    const user = await collection.findOne({ profileId: toObjectId(profileId) });

    if (!user) return null;

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /**
   * Lista todos os usuários com paginação
   */
  static async findAll(
    limit = 50,
    skip = 0,
    filters?: {
      role?: UserRole;
      isActive?: boolean;
      approvalStatus?: ApprovalStatus;
    },
  ): Promise<Omit<User, 'password'>[]> {
    const collection = await this.getCollection();

    const query: any = {};
    if (filters?.role) query.role = filters.role;
    if (filters?.isActive !== undefined) query.isActive = filters.isActive;
    if (filters?.approvalStatus) query.approvalStatus = filters.approvalStatus;

    const users = await collection
      .find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .toArray();

    // Remove password de todos os usuários
    return users.map(({ password, ...user }) => user);
  }

  /**
   * Conta total de usuários com filtros
   */
  static async count(filters?: {
    role?: UserRole;
    isActive?: boolean;
    approvalStatus?: ApprovalStatus;
  }): Promise<number> {
    const collection = await this.getCollection();

    const query: any = {};
    if (filters?.role) query.role = filters.role;
    if (filters?.isActive !== undefined) query.isActive = filters.isActive;
    if (filters?.approvalStatus) query.approvalStatus = filters.approvalStatus;

    return await collection.countDocuments(query);
  }

  /**
   * Atualiza dados do usuário
   */
  static async update(
    id: string,
    userData: UpdateUser,
  ): Promise<Omit<User, 'password'> | null> {
    if (!isValidObjectId(id)) {
      throw new Error('ID inválido');
    }

    // Valida dados com Zod
    const validated = UpdateUserSchema.parse(userData);

    const collection = await this.getCollection();

    // Se está atualizando email, verifica se já existe
    if (validated.email) {
      const existingUser = await collection.findOne({
        email: validated.email,
        _id: { $ne: toObjectId(id) },
      });
      if (existingUser) {
        throw new Error('Email já cadastrado');
      }
    }

    // Se está atualizando profileId, verifica se já está vinculado
    if (validated.profileId) {
      const userWithProfile = await collection.findOne({
        profileId: validated.profileId,
        _id: { $ne: toObjectId(id) },
      });
      if (userWithProfile) {
        throw new Error('Este perfil já está vinculado a outro usuário');
      }
    }

    const result = await collection.findOneAndUpdate(
      { _id: toObjectId(id) },
      {
        $set: {
          ...validated,
          updatedAt: new Date(),
        },
      },
      { returnDocument: 'after' },
    );

    if (!result) return null;

    const { password, ...userWithoutPassword } = result;
    return userWithoutPassword;
  }

  /**
   * Altera senha do usuário
   */
  static async changePassword(
    id: string,
    passwordData: ChangePassword,
  ): Promise<boolean> {
    if (!isValidObjectId(id)) {
      throw new Error('ID inválido');
    }

    // Valida dados com Zod
    const validated = ChangePasswordSchema.parse(passwordData);

    const collection = await this.getCollection();

    // Busca usuário com senha
    const user = await collection.findOne({ _id: toObjectId(id) });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    // Verifica senha atual
    const isPasswordValid = await compare(
      validated.currentPassword,
      user.password,
    );
    if (!isPasswordValid) {
      throw new Error('Senha atual incorreta');
    }

    // Hash da nova senha
    const hashedPassword = await hash(validated.newPassword, SALT_ROUNDS);

    // Atualiza senha
    const result = await collection.updateOne(
      { _id: toObjectId(id) },
      {
        $set: {
          password: hashedPassword,
          updatedAt: new Date(),
        },
      },
    );

    return result.modifiedCount > 0;
  }

  /**
   * Reseta senha (admin ou recuperação)
   */
  static async resetPassword(id: string, newPassword: string): Promise<boolean> {
    if (!isValidObjectId(id)) {
      throw new Error('ID inválido');
    }

    if (newPassword.length < 6) {
      throw new Error('Nova senha deve ter pelo menos 6 caracteres');
    }

    const collection = await this.getCollection();

    // Hash da nova senha
    const hashedPassword = await hash(newPassword, SALT_ROUNDS);

    const result = await collection.updateOne(
      { _id: toObjectId(id) },
      {
        $set: {
          password: hashedPassword,
          updatedAt: new Date(),
        },
      },
    );

    return result.modifiedCount > 0;
  }

  /**
   * Ativa/desativa usuário
   */
  static async toggleActive(id: string): Promise<Omit<User, 'password'> | null> {
    if (!isValidObjectId(id)) {
      throw new Error('ID inválido');
    }

    const collection = await this.getCollection();

    // Busca usuário atual
    const user = await collection.findOne({ _id: toObjectId(id) });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const result = await collection.findOneAndUpdate(
      { _id: toObjectId(id) },
      {
        $set: {
          isActive: !user.isActive,
          updatedAt: new Date(),
        },
      },
      { returnDocument: 'after' },
    );

    if (!result) return null;

    const { password, ...userWithoutPassword } = result;
    return userWithoutPassword;
  }

  /**
   * Atualiza status de aprovação
   */
  static async updateApprovalStatus(
    id: string,
    status: ApprovalStatus,
  ): Promise<Omit<User, 'password'> | null> {
    if (!isValidObjectId(id)) {
      throw new Error('ID inválido');
    }

    const collection = await this.getCollection();

    const result = await collection.findOneAndUpdate(
      { _id: toObjectId(id) },
      {
        $set: {
          approvalStatus: status,
          updatedAt: new Date(),
        },
      },
      { returnDocument: 'after' },
    );

    if (!result) return null;

    const { password, ...userWithoutPassword } = result;
    return userWithoutPassword;
  }

  /**
   * Atualiza role do usuário
   */
  static async updateRole(
    id: string,
    role: UserRole,
  ): Promise<Omit<User, 'password'> | null> {
    if (!isValidObjectId(id)) {
      throw new Error('ID inválido');
    }

    const collection = await this.getCollection();

    const result = await collection.findOneAndUpdate(
      { _id: toObjectId(id) },
      {
        $set: {
          role,
          updatedAt: new Date(),
        },
      },
      { returnDocument: 'after' },
    );

    if (!result) return null;

    const { password, ...userWithoutPassword } = result;
    return userWithoutPassword;
  }

  /**
   * Deleta usuário
   */
  static async delete(id: string): Promise<boolean> {
    if (!isValidObjectId(id)) {
      throw new Error('ID inválido');
    }

    const collection = await this.getCollection();
    const result = await collection.deleteOne({ _id: toObjectId(id) });
    return result.deletedCount > 0;
  }

  /**
   * Valida credenciais de login
   */
  static async validateCredentials(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.findByEmailWithPassword(email);

    if (!user) return null;

    // Verifica se usuário está ativo
    if (!user.isActive) {
      throw new Error('Usuário desativado');
    }

    // Verifica senha
    // const isPasswordValid = await compare(password, user.password);
    const isPasswordValid = password === user.password;

    if (!isPasswordValid) return null;

    // Remove password do retorno
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /**
   * Busca usuários pendentes de aprovação
   */
  static async findPendingApproval(
    limit = 50,
    skip = 0,
  ): Promise<Omit<User, 'password'>[]> {
    const collection = await this.getCollection();

    const users = await collection
      .find({ approvalStatus: ApprovalStatus.PENDING })
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .toArray();

    return users.map(({ password, ...user }) => user);
  }
}
