
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Archdiocese
 * Representa uma arquidiocese / área
 */
export type Archdiocese = $Result.DefaultSelection<Prisma.$ArchdiocesePayload>
/**
 * Model Parish
 * Representa uma paróquia
 */
export type Parish = $Result.DefaultSelection<Prisma.$ParishPayload>
/**
 * Model Couple
 * Representa um casal do movimento
 */
export type Couple = $Result.DefaultSelection<Prisma.$CouplePayload>
/**
 * Model Profile
 * Representa uma pessoa do casal
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model User
 * Representa um usuário do sistema
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RoleAssignment
 * Generic role assignment for Couples in Archdioceses or Parishes
 */
export type RoleAssignment = $Result.DefaultSelection<Prisma.$RoleAssignmentPayload>
/**
 * Model Permission
 * Represents permissions for users within specific contexts
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model DataAccessLog
 * Enhanced audit log for tracking all data access operations
 */
export type DataAccessLog = $Result.DefaultSelection<Prisma.$DataAccessLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const CoupleRole: {
  COORDINATOR: 'COORDINATOR',
  VICE_COORDINATOR: 'VICE_COORDINATOR',
  SPIRITUAL_ASSISTANT: 'SPIRITUAL_ASSISTANT',
  LITURGY: 'LITURGY',
  PUBLIC_RELATIONS: 'PUBLIC_RELATIONS',
  SECRETARY: 'SECRETARY',
  SUPPORT: 'SUPPORT',
  KITCHEN: 'KITCHEN',
  MEMBER: 'MEMBER'
};

export type CoupleRole = (typeof CoupleRole)[keyof typeof CoupleRole]


export const DataAccessEntity: {
  PROFILE: 'PROFILE',
  USER: 'USER',
  COUPLE: 'COUPLE',
  PARISH: 'PARISH',
  ARCHDIOCESE: 'ARCHDIOCESE',
  DATA_ACCESS_LOG: 'DATA_ACCESS_LOG'
};

export type DataAccessEntity = (typeof DataAccessEntity)[keyof typeof DataAccessEntity]


export const DataAccessAction: {
  CREATE: 'CREATE',
  READ: 'READ',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export type DataAccessAction = (typeof DataAccessAction)[keyof typeof DataAccessAction]


export const UserRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ARCHDIOCESE_ADMIN: 'ARCHDIOCESE_ADMIN',
  PARISH_ADMIN: 'PARISH_ADMIN',
  COUPLE_COORDINATOR: 'COUPLE_COORDINATOR',
  MEMBER: 'MEMBER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type CoupleRole = $Enums.CoupleRole

export const CoupleRole: typeof $Enums.CoupleRole

export type DataAccessEntity = $Enums.DataAccessEntity

export const DataAccessEntity: typeof $Enums.DataAccessEntity

export type DataAccessAction = $Enums.DataAccessAction

export const DataAccessAction: typeof $Enums.DataAccessAction

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Archdiocese
 * const archdiocese = await prisma.archdiocese.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Archdiocese
   * const archdiocese = await prisma.archdiocese.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.archdiocese`: Exposes CRUD operations for the **Archdiocese** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Archdiocese
    * const archdiocese = await prisma.archdiocese.findMany()
    * ```
    */
  get archdiocese(): Prisma.ArchdioceseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parish`: Exposes CRUD operations for the **Parish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parishes
    * const parishes = await prisma.parish.findMany()
    * ```
    */
  get parish(): Prisma.ParishDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.couple`: Exposes CRUD operations for the **Couple** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Couples
    * const couples = await prisma.couple.findMany()
    * ```
    */
  get couple(): Prisma.CoupleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roleAssignment`: Exposes CRUD operations for the **RoleAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoleAssignments
    * const roleAssignments = await prisma.roleAssignment.findMany()
    * ```
    */
  get roleAssignment(): Prisma.RoleAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataAccessLog`: Exposes CRUD operations for the **DataAccessLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataAccessLogs
    * const dataAccessLogs = await prisma.dataAccessLog.findMany()
    * ```
    */
  get dataAccessLog(): Prisma.DataAccessLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Archdiocese: 'Archdiocese',
    Parish: 'Parish',
    Couple: 'Couple',
    Profile: 'Profile',
    User: 'User',
    RoleAssignment: 'RoleAssignment',
    Permission: 'Permission',
    DataAccessLog: 'DataAccessLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "archdiocese" | "parish" | "couple" | "profile" | "user" | "roleAssignment" | "permission" | "dataAccessLog"
      txIsolationLevel: never
    }
    model: {
      Archdiocese: {
        payload: Prisma.$ArchdiocesePayload<ExtArgs>
        fields: Prisma.ArchdioceseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArchdioceseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchdiocesePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArchdioceseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchdiocesePayload>
          }
          findFirst: {
            args: Prisma.ArchdioceseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchdiocesePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArchdioceseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchdiocesePayload>
          }
          findMany: {
            args: Prisma.ArchdioceseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchdiocesePayload>[]
          }
          create: {
            args: Prisma.ArchdioceseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchdiocesePayload>
          }
          createMany: {
            args: Prisma.ArchdioceseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArchdioceseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchdiocesePayload>
          }
          update: {
            args: Prisma.ArchdioceseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchdiocesePayload>
          }
          deleteMany: {
            args: Prisma.ArchdioceseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArchdioceseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArchdioceseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchdiocesePayload>
          }
          aggregate: {
            args: Prisma.ArchdioceseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchdiocese>
          }
          groupBy: {
            args: Prisma.ArchdioceseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArchdioceseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ArchdioceseFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ArchdioceseAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ArchdioceseCountArgs<ExtArgs>
            result: $Utils.Optional<ArchdioceseCountAggregateOutputType> | number
          }
        }
      }
      Parish: {
        payload: Prisma.$ParishPayload<ExtArgs>
        fields: Prisma.ParishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParishPayload>
          }
          findFirst: {
            args: Prisma.ParishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParishPayload>
          }
          findMany: {
            args: Prisma.ParishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParishPayload>[]
          }
          create: {
            args: Prisma.ParishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParishPayload>
          }
          createMany: {
            args: Prisma.ParishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ParishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParishPayload>
          }
          update: {
            args: Prisma.ParishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParishPayload>
          }
          deleteMany: {
            args: Prisma.ParishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParishPayload>
          }
          aggregate: {
            args: Prisma.ParishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParish>
          }
          groupBy: {
            args: Prisma.ParishGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParishGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ParishFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ParishAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ParishCountArgs<ExtArgs>
            result: $Utils.Optional<ParishCountAggregateOutputType> | number
          }
        }
      }
      Couple: {
        payload: Prisma.$CouplePayload<ExtArgs>
        fields: Prisma.CoupleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoupleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoupleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          findFirst: {
            args: Prisma.CoupleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoupleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          findMany: {
            args: Prisma.CoupleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>[]
          }
          create: {
            args: Prisma.CoupleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          createMany: {
            args: Prisma.CoupleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CoupleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          update: {
            args: Prisma.CoupleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          deleteMany: {
            args: Prisma.CoupleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoupleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoupleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouplePayload>
          }
          aggregate: {
            args: Prisma.CoupleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCouple>
          }
          groupBy: {
            args: Prisma.CoupleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoupleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CoupleFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CoupleAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CoupleCountArgs<ExtArgs>
            result: $Utils.Optional<CoupleCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProfileFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProfileAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RoleAssignment: {
        payload: Prisma.$RoleAssignmentPayload<ExtArgs>
        fields: Prisma.RoleAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAssignmentPayload>
          }
          findFirst: {
            args: Prisma.RoleAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAssignmentPayload>
          }
          findMany: {
            args: Prisma.RoleAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAssignmentPayload>[]
          }
          create: {
            args: Prisma.RoleAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAssignmentPayload>
          }
          createMany: {
            args: Prisma.RoleAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAssignmentPayload>
          }
          update: {
            args: Prisma.RoleAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.RoleAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleAssignmentPayload>
          }
          aggregate: {
            args: Prisma.RoleAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoleAssignment>
          }
          groupBy: {
            args: Prisma.RoleAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleAssignmentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RoleAssignmentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RoleAssignmentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RoleAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<RoleAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PermissionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PermissionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      DataAccessLog: {
        payload: Prisma.$DataAccessLogPayload<ExtArgs>
        fields: Prisma.DataAccessLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataAccessLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAccessLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataAccessLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAccessLogPayload>
          }
          findFirst: {
            args: Prisma.DataAccessLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAccessLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataAccessLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAccessLogPayload>
          }
          findMany: {
            args: Prisma.DataAccessLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAccessLogPayload>[]
          }
          create: {
            args: Prisma.DataAccessLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAccessLogPayload>
          }
          createMany: {
            args: Prisma.DataAccessLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DataAccessLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAccessLogPayload>
          }
          update: {
            args: Prisma.DataAccessLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAccessLogPayload>
          }
          deleteMany: {
            args: Prisma.DataAccessLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataAccessLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DataAccessLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAccessLogPayload>
          }
          aggregate: {
            args: Prisma.DataAccessLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataAccessLog>
          }
          groupBy: {
            args: Prisma.DataAccessLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataAccessLogGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DataAccessLogFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DataAccessLogAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DataAccessLogCountArgs<ExtArgs>
            result: $Utils.Optional<DataAccessLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    archdiocese?: ArchdioceseOmit
    parish?: ParishOmit
    couple?: CoupleOmit
    profile?: ProfileOmit
    user?: UserOmit
    roleAssignment?: RoleAssignmentOmit
    permission?: PermissionOmit
    dataAccessLog?: DataAccessLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ArchdioceseCountOutputType
   */

  export type ArchdioceseCountOutputType = {
    parishes: number
    roles: number
    permissions: number
  }

  export type ArchdioceseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parishes?: boolean | ArchdioceseCountOutputTypeCountParishesArgs
    roles?: boolean | ArchdioceseCountOutputTypeCountRolesArgs
    permissions?: boolean | ArchdioceseCountOutputTypeCountPermissionsArgs
  }

  // Custom InputTypes
  /**
   * ArchdioceseCountOutputType without action
   */
  export type ArchdioceseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchdioceseCountOutputType
     */
    select?: ArchdioceseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArchdioceseCountOutputType without action
   */
  export type ArchdioceseCountOutputTypeCountParishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParishWhereInput
  }

  /**
   * ArchdioceseCountOutputType without action
   */
  export type ArchdioceseCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleAssignmentWhereInput
  }

  /**
   * ArchdioceseCountOutputType without action
   */
  export type ArchdioceseCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }


  /**
   * Count Type ParishCountOutputType
   */

  export type ParishCountOutputType = {
    couples: number
    roles: number
    permissions: number
  }

  export type ParishCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couples?: boolean | ParishCountOutputTypeCountCouplesArgs
    roles?: boolean | ParishCountOutputTypeCountRolesArgs
    permissions?: boolean | ParishCountOutputTypeCountPermissionsArgs
  }

  // Custom InputTypes
  /**
   * ParishCountOutputType without action
   */
  export type ParishCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParishCountOutputType
     */
    select?: ParishCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParishCountOutputType without action
   */
  export type ParishCountOutputTypeCountCouplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoupleWhereInput
  }

  /**
   * ParishCountOutputType without action
   */
  export type ParishCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleAssignmentWhereInput
  }

  /**
   * ParishCountOutputType without action
   */
  export type ParishCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }


  /**
   * Count Type CoupleCountOutputType
   */

  export type CoupleCountOutputType = {
    roles: number
    permissions: number
  }

  export type CoupleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | CoupleCountOutputTypeCountRolesArgs
    permissions?: boolean | CoupleCountOutputTypeCountPermissionsArgs
  }

  // Custom InputTypes
  /**
   * CoupleCountOutputType without action
   */
  export type CoupleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoupleCountOutputType
     */
    select?: CoupleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoupleCountOutputType without action
   */
  export type CoupleCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleAssignmentWhereInput
  }

  /**
   * CoupleCountOutputType without action
   */
  export type CoupleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    coupleAsMember1: number
    coupleAsMember2: number
    coupleAsGodparent1: number
    coupleAsGodparent2: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coupleAsMember1?: boolean | ProfileCountOutputTypeCountCoupleAsMember1Args
    coupleAsMember2?: boolean | ProfileCountOutputTypeCountCoupleAsMember2Args
    coupleAsGodparent1?: boolean | ProfileCountOutputTypeCountCoupleAsGodparent1Args
    coupleAsGodparent2?: boolean | ProfileCountOutputTypeCountCoupleAsGodparent2Args
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountCoupleAsMember1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoupleWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountCoupleAsMember2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoupleWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountCoupleAsGodparent1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoupleWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountCoupleAsGodparent2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoupleWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    permissions: number
    dataAccessLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | UserCountOutputTypeCountPermissionsArgs
    dataAccessLogs?: boolean | UserCountOutputTypeCountDataAccessLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDataAccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataAccessLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Address
   */





  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postalCode?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
  }, ExtArgs["result"]["address"]>



  export type AddressSelectScalar = {
    postalCode?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postalCode" | "street" | "number" | "complement" | "neighborhood" | "city" | "state" | "country", ExtArgs["result"]["address"]>

  export type $AddressPayload = {
    name: "Address"
    objects: {}
    scalars: {
      postalCode: string
      street: string
      number: string
      complement: string | null
      neighborhood: string
      city: string
      state: string
      country: string
    }
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>





  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly postalCode: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly number: FieldRef<"Address", 'String'>
    readonly complement: FieldRef<"Address", 'String'>
    readonly neighborhood: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
  }


  /**
   * Model Archdiocese
   */

  export type AggregateArchdiocese = {
    _count: ArchdioceseCountAggregateOutputType | null
    _min: ArchdioceseMinAggregateOutputType | null
    _max: ArchdioceseMaxAggregateOutputType | null
  }

  export type ArchdioceseMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArchdioceseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArchdioceseCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArchdioceseMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArchdioceseMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArchdioceseCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArchdioceseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Archdiocese to aggregate.
     */
    where?: ArchdioceseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archdiocese to fetch.
     */
    orderBy?: ArchdioceseOrderByWithRelationInput | ArchdioceseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArchdioceseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archdiocese from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archdiocese.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Archdiocese
    **/
    _count?: true | ArchdioceseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchdioceseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchdioceseMaxAggregateInputType
  }

  export type GetArchdioceseAggregateType<T extends ArchdioceseAggregateArgs> = {
        [P in keyof T & keyof AggregateArchdiocese]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchdiocese[P]>
      : GetScalarType<T[P], AggregateArchdiocese[P]>
  }




  export type ArchdioceseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchdioceseWhereInput
    orderBy?: ArchdioceseOrderByWithAggregationInput | ArchdioceseOrderByWithAggregationInput[]
    by: ArchdioceseScalarFieldEnum[] | ArchdioceseScalarFieldEnum
    having?: ArchdioceseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchdioceseCountAggregateInputType | true
    _min?: ArchdioceseMinAggregateInputType
    _max?: ArchdioceseMaxAggregateInputType
  }

  export type ArchdioceseGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ArchdioceseCountAggregateOutputType | null
    _min: ArchdioceseMinAggregateOutputType | null
    _max: ArchdioceseMaxAggregateOutputType | null
  }

  type GetArchdioceseGroupByPayload<T extends ArchdioceseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchdioceseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchdioceseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchdioceseGroupByOutputType[P]>
            : GetScalarType<T[P], ArchdioceseGroupByOutputType[P]>
        }
      >
    >


  export type ArchdioceseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parishes?: boolean | Archdiocese$parishesArgs<ExtArgs>
    roles?: boolean | Archdiocese$rolesArgs<ExtArgs>
    permissions?: boolean | Archdiocese$permissionsArgs<ExtArgs>
    _count?: boolean | ArchdioceseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["archdiocese"]>



  export type ArchdioceseSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArchdioceseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["archdiocese"]>
  export type ArchdioceseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parishes?: boolean | Archdiocese$parishesArgs<ExtArgs>
    roles?: boolean | Archdiocese$rolesArgs<ExtArgs>
    permissions?: boolean | Archdiocese$permissionsArgs<ExtArgs>
    _count?: boolean | ArchdioceseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ArchdiocesePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Archdiocese"
    objects: {
      parishes: Prisma.$ParishPayload<ExtArgs>[]
      roles: Prisma.$RoleAssignmentPayload<ExtArgs>[]
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["archdiocese"]>
    composites: {}
  }

  type ArchdioceseGetPayload<S extends boolean | null | undefined | ArchdioceseDefaultArgs> = $Result.GetResult<Prisma.$ArchdiocesePayload, S>

  type ArchdioceseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArchdioceseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArchdioceseCountAggregateInputType | true
    }

  export interface ArchdioceseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Archdiocese'], meta: { name: 'Archdiocese' } }
    /**
     * Find zero or one Archdiocese that matches the filter.
     * @param {ArchdioceseFindUniqueArgs} args - Arguments to find a Archdiocese
     * @example
     * // Get one Archdiocese
     * const archdiocese = await prisma.archdiocese.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArchdioceseFindUniqueArgs>(args: SelectSubset<T, ArchdioceseFindUniqueArgs<ExtArgs>>): Prisma__ArchdioceseClient<$Result.GetResult<Prisma.$ArchdiocesePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Archdiocese that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArchdioceseFindUniqueOrThrowArgs} args - Arguments to find a Archdiocese
     * @example
     * // Get one Archdiocese
     * const archdiocese = await prisma.archdiocese.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArchdioceseFindUniqueOrThrowArgs>(args: SelectSubset<T, ArchdioceseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArchdioceseClient<$Result.GetResult<Prisma.$ArchdiocesePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archdiocese that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchdioceseFindFirstArgs} args - Arguments to find a Archdiocese
     * @example
     * // Get one Archdiocese
     * const archdiocese = await prisma.archdiocese.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArchdioceseFindFirstArgs>(args?: SelectSubset<T, ArchdioceseFindFirstArgs<ExtArgs>>): Prisma__ArchdioceseClient<$Result.GetResult<Prisma.$ArchdiocesePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archdiocese that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchdioceseFindFirstOrThrowArgs} args - Arguments to find a Archdiocese
     * @example
     * // Get one Archdiocese
     * const archdiocese = await prisma.archdiocese.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArchdioceseFindFirstOrThrowArgs>(args?: SelectSubset<T, ArchdioceseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArchdioceseClient<$Result.GetResult<Prisma.$ArchdiocesePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Archdiocese that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchdioceseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Archdiocese
     * const archdiocese = await prisma.archdiocese.findMany()
     * 
     * // Get first 10 Archdiocese
     * const archdiocese = await prisma.archdiocese.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const archdioceseWithIdOnly = await prisma.archdiocese.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArchdioceseFindManyArgs>(args?: SelectSubset<T, ArchdioceseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchdiocesePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Archdiocese.
     * @param {ArchdioceseCreateArgs} args - Arguments to create a Archdiocese.
     * @example
     * // Create one Archdiocese
     * const Archdiocese = await prisma.archdiocese.create({
     *   data: {
     *     // ... data to create a Archdiocese
     *   }
     * })
     * 
     */
    create<T extends ArchdioceseCreateArgs>(args: SelectSubset<T, ArchdioceseCreateArgs<ExtArgs>>): Prisma__ArchdioceseClient<$Result.GetResult<Prisma.$ArchdiocesePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Archdiocese.
     * @param {ArchdioceseCreateManyArgs} args - Arguments to create many Archdiocese.
     * @example
     * // Create many Archdiocese
     * const archdiocese = await prisma.archdiocese.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArchdioceseCreateManyArgs>(args?: SelectSubset<T, ArchdioceseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Archdiocese.
     * @param {ArchdioceseDeleteArgs} args - Arguments to delete one Archdiocese.
     * @example
     * // Delete one Archdiocese
     * const Archdiocese = await prisma.archdiocese.delete({
     *   where: {
     *     // ... filter to delete one Archdiocese
     *   }
     * })
     * 
     */
    delete<T extends ArchdioceseDeleteArgs>(args: SelectSubset<T, ArchdioceseDeleteArgs<ExtArgs>>): Prisma__ArchdioceseClient<$Result.GetResult<Prisma.$ArchdiocesePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Archdiocese.
     * @param {ArchdioceseUpdateArgs} args - Arguments to update one Archdiocese.
     * @example
     * // Update one Archdiocese
     * const archdiocese = await prisma.archdiocese.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArchdioceseUpdateArgs>(args: SelectSubset<T, ArchdioceseUpdateArgs<ExtArgs>>): Prisma__ArchdioceseClient<$Result.GetResult<Prisma.$ArchdiocesePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Archdiocese.
     * @param {ArchdioceseDeleteManyArgs} args - Arguments to filter Archdiocese to delete.
     * @example
     * // Delete a few Archdiocese
     * const { count } = await prisma.archdiocese.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArchdioceseDeleteManyArgs>(args?: SelectSubset<T, ArchdioceseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archdiocese.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchdioceseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Archdiocese
     * const archdiocese = await prisma.archdiocese.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArchdioceseUpdateManyArgs>(args: SelectSubset<T, ArchdioceseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Archdiocese.
     * @param {ArchdioceseUpsertArgs} args - Arguments to update or create a Archdiocese.
     * @example
     * // Update or create a Archdiocese
     * const archdiocese = await prisma.archdiocese.upsert({
     *   create: {
     *     // ... data to create a Archdiocese
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Archdiocese we want to update
     *   }
     * })
     */
    upsert<T extends ArchdioceseUpsertArgs>(args: SelectSubset<T, ArchdioceseUpsertArgs<ExtArgs>>): Prisma__ArchdioceseClient<$Result.GetResult<Prisma.$ArchdiocesePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Archdiocese that matches the filter.
     * @param {ArchdioceseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const archdiocese = await prisma.archdiocese.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ArchdioceseFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Archdiocese.
     * @param {ArchdioceseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const archdiocese = await prisma.archdiocese.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ArchdioceseAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Archdiocese.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchdioceseCountArgs} args - Arguments to filter Archdiocese to count.
     * @example
     * // Count the number of Archdiocese
     * const count = await prisma.archdiocese.count({
     *   where: {
     *     // ... the filter for the Archdiocese we want to count
     *   }
     * })
    **/
    count<T extends ArchdioceseCountArgs>(
      args?: Subset<T, ArchdioceseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchdioceseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Archdiocese.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchdioceseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArchdioceseAggregateArgs>(args: Subset<T, ArchdioceseAggregateArgs>): Prisma.PrismaPromise<GetArchdioceseAggregateType<T>>

    /**
     * Group by Archdiocese.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchdioceseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArchdioceseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArchdioceseGroupByArgs['orderBy'] }
        : { orderBy?: ArchdioceseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArchdioceseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchdioceseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Archdiocese model
   */
  readonly fields: ArchdioceseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Archdiocese.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArchdioceseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parishes<T extends Archdiocese$parishesArgs<ExtArgs> = {}>(args?: Subset<T, Archdiocese$parishesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends Archdiocese$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Archdiocese$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissions<T extends Archdiocese$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Archdiocese$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Archdiocese model
   */
  interface ArchdioceseFieldRefs {
    readonly id: FieldRef<"Archdiocese", 'String'>
    readonly name: FieldRef<"Archdiocese", 'String'>
    readonly createdAt: FieldRef<"Archdiocese", 'DateTime'>
    readonly updatedAt: FieldRef<"Archdiocese", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Archdiocese findUnique
   */
  export type ArchdioceseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archdiocese
     */
    select?: ArchdioceseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archdiocese
     */
    omit?: ArchdioceseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchdioceseInclude<ExtArgs> | null
    /**
     * Filter, which Archdiocese to fetch.
     */
    where: ArchdioceseWhereUniqueInput
  }

  /**
   * Archdiocese findUniqueOrThrow
   */
  export type ArchdioceseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archdiocese
     */
    select?: ArchdioceseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archdiocese
     */
    omit?: ArchdioceseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchdioceseInclude<ExtArgs> | null
    /**
     * Filter, which Archdiocese to fetch.
     */
    where: ArchdioceseWhereUniqueInput
  }

  /**
   * Archdiocese findFirst
   */
  export type ArchdioceseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archdiocese
     */
    select?: ArchdioceseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archdiocese
     */
    omit?: ArchdioceseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchdioceseInclude<ExtArgs> | null
    /**
     * Filter, which Archdiocese to fetch.
     */
    where?: ArchdioceseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archdiocese to fetch.
     */
    orderBy?: ArchdioceseOrderByWithRelationInput | ArchdioceseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Archdiocese.
     */
    cursor?: ArchdioceseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archdiocese from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archdiocese.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Archdiocese.
     */
    distinct?: ArchdioceseScalarFieldEnum | ArchdioceseScalarFieldEnum[]
  }

  /**
   * Archdiocese findFirstOrThrow
   */
  export type ArchdioceseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archdiocese
     */
    select?: ArchdioceseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archdiocese
     */
    omit?: ArchdioceseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchdioceseInclude<ExtArgs> | null
    /**
     * Filter, which Archdiocese to fetch.
     */
    where?: ArchdioceseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archdiocese to fetch.
     */
    orderBy?: ArchdioceseOrderByWithRelationInput | ArchdioceseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Archdiocese.
     */
    cursor?: ArchdioceseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archdiocese from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archdiocese.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Archdiocese.
     */
    distinct?: ArchdioceseScalarFieldEnum | ArchdioceseScalarFieldEnum[]
  }

  /**
   * Archdiocese findMany
   */
  export type ArchdioceseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archdiocese
     */
    select?: ArchdioceseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archdiocese
     */
    omit?: ArchdioceseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchdioceseInclude<ExtArgs> | null
    /**
     * Filter, which Archdiocese to fetch.
     */
    where?: ArchdioceseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archdiocese to fetch.
     */
    orderBy?: ArchdioceseOrderByWithRelationInput | ArchdioceseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Archdiocese.
     */
    cursor?: ArchdioceseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archdiocese from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archdiocese.
     */
    skip?: number
    distinct?: ArchdioceseScalarFieldEnum | ArchdioceseScalarFieldEnum[]
  }

  /**
   * Archdiocese create
   */
  export type ArchdioceseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archdiocese
     */
    select?: ArchdioceseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archdiocese
     */
    omit?: ArchdioceseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchdioceseInclude<ExtArgs> | null
    /**
     * The data needed to create a Archdiocese.
     */
    data: XOR<ArchdioceseCreateInput, ArchdioceseUncheckedCreateInput>
  }

  /**
   * Archdiocese createMany
   */
  export type ArchdioceseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Archdiocese.
     */
    data: ArchdioceseCreateManyInput | ArchdioceseCreateManyInput[]
  }

  /**
   * Archdiocese update
   */
  export type ArchdioceseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archdiocese
     */
    select?: ArchdioceseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archdiocese
     */
    omit?: ArchdioceseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchdioceseInclude<ExtArgs> | null
    /**
     * The data needed to update a Archdiocese.
     */
    data: XOR<ArchdioceseUpdateInput, ArchdioceseUncheckedUpdateInput>
    /**
     * Choose, which Archdiocese to update.
     */
    where: ArchdioceseWhereUniqueInput
  }

  /**
   * Archdiocese updateMany
   */
  export type ArchdioceseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Archdiocese.
     */
    data: XOR<ArchdioceseUpdateManyMutationInput, ArchdioceseUncheckedUpdateManyInput>
    /**
     * Filter which Archdiocese to update
     */
    where?: ArchdioceseWhereInput
    /**
     * Limit how many Archdiocese to update.
     */
    limit?: number
  }

  /**
   * Archdiocese upsert
   */
  export type ArchdioceseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archdiocese
     */
    select?: ArchdioceseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archdiocese
     */
    omit?: ArchdioceseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchdioceseInclude<ExtArgs> | null
    /**
     * The filter to search for the Archdiocese to update in case it exists.
     */
    where: ArchdioceseWhereUniqueInput
    /**
     * In case the Archdiocese found by the `where` argument doesn't exist, create a new Archdiocese with this data.
     */
    create: XOR<ArchdioceseCreateInput, ArchdioceseUncheckedCreateInput>
    /**
     * In case the Archdiocese was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArchdioceseUpdateInput, ArchdioceseUncheckedUpdateInput>
  }

  /**
   * Archdiocese delete
   */
  export type ArchdioceseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archdiocese
     */
    select?: ArchdioceseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archdiocese
     */
    omit?: ArchdioceseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchdioceseInclude<ExtArgs> | null
    /**
     * Filter which Archdiocese to delete.
     */
    where: ArchdioceseWhereUniqueInput
  }

  /**
   * Archdiocese deleteMany
   */
  export type ArchdioceseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Archdiocese to delete
     */
    where?: ArchdioceseWhereInput
    /**
     * Limit how many Archdiocese to delete.
     */
    limit?: number
  }

  /**
   * Archdiocese findRaw
   */
  export type ArchdioceseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Archdiocese aggregateRaw
   */
  export type ArchdioceseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Archdiocese.parishes
   */
  export type Archdiocese$parishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parish
     */
    select?: ParishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parish
     */
    omit?: ParishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParishInclude<ExtArgs> | null
    where?: ParishWhereInput
    orderBy?: ParishOrderByWithRelationInput | ParishOrderByWithRelationInput[]
    cursor?: ParishWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParishScalarFieldEnum | ParishScalarFieldEnum[]
  }

  /**
   * Archdiocese.roles
   */
  export type Archdiocese$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAssignment
     */
    select?: RoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleAssignment
     */
    omit?: RoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAssignmentInclude<ExtArgs> | null
    where?: RoleAssignmentWhereInput
    orderBy?: RoleAssignmentOrderByWithRelationInput | RoleAssignmentOrderByWithRelationInput[]
    cursor?: RoleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleAssignmentScalarFieldEnum | RoleAssignmentScalarFieldEnum[]
  }

  /**
   * Archdiocese.permissions
   */
  export type Archdiocese$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Archdiocese without action
   */
  export type ArchdioceseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archdiocese
     */
    select?: ArchdioceseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archdiocese
     */
    omit?: ArchdioceseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchdioceseInclude<ExtArgs> | null
  }


  /**
   * Model Parish
   */

  export type AggregateParish = {
    _count: ParishCountAggregateOutputType | null
    _min: ParishMinAggregateOutputType | null
    _max: ParishMaxAggregateOutputType | null
  }

  export type ParishMinAggregateOutputType = {
    id: string | null
    name: string | null
    archdioceseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParishMaxAggregateOutputType = {
    id: string | null
    name: string | null
    archdioceseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParishCountAggregateOutputType = {
    id: number
    name: number
    archdioceseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParishMinAggregateInputType = {
    id?: true
    name?: true
    archdioceseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParishMaxAggregateInputType = {
    id?: true
    name?: true
    archdioceseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParishCountAggregateInputType = {
    id?: true
    name?: true
    archdioceseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parish to aggregate.
     */
    where?: ParishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parishes to fetch.
     */
    orderBy?: ParishOrderByWithRelationInput | ParishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parishes
    **/
    _count?: true | ParishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParishMaxAggregateInputType
  }

  export type GetParishAggregateType<T extends ParishAggregateArgs> = {
        [P in keyof T & keyof AggregateParish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParish[P]>
      : GetScalarType<T[P], AggregateParish[P]>
  }




  export type ParishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParishWhereInput
    orderBy?: ParishOrderByWithAggregationInput | ParishOrderByWithAggregationInput[]
    by: ParishScalarFieldEnum[] | ParishScalarFieldEnum
    having?: ParishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParishCountAggregateInputType | true
    _min?: ParishMinAggregateInputType
    _max?: ParishMaxAggregateInputType
  }

  export type ParishGroupByOutputType = {
    id: string
    name: string
    archdioceseId: string
    createdAt: Date
    updatedAt: Date
    _count: ParishCountAggregateOutputType | null
    _min: ParishMinAggregateOutputType | null
    _max: ParishMaxAggregateOutputType | null
  }

  type GetParishGroupByPayload<T extends ParishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParishGroupByOutputType[P]>
            : GetScalarType<T[P], ParishGroupByOutputType[P]>
        }
      >
    >


  export type ParishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    archdioceseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    archdiocese?: boolean | ArchdioceseDefaultArgs<ExtArgs>
    couples?: boolean | Parish$couplesArgs<ExtArgs>
    roles?: boolean | Parish$rolesArgs<ExtArgs>
    permissions?: boolean | Parish$permissionsArgs<ExtArgs>
    _count?: boolean | ParishCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parish"]>



  export type ParishSelectScalar = {
    id?: boolean
    name?: boolean
    archdioceseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParishOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "archdioceseId" | "createdAt" | "updatedAt", ExtArgs["result"]["parish"]>
  export type ParishInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archdiocese?: boolean | ArchdioceseDefaultArgs<ExtArgs>
    couples?: boolean | Parish$couplesArgs<ExtArgs>
    roles?: boolean | Parish$rolesArgs<ExtArgs>
    permissions?: boolean | Parish$permissionsArgs<ExtArgs>
    _count?: boolean | ParishCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ParishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parish"
    objects: {
      archdiocese: Prisma.$ArchdiocesePayload<ExtArgs>
      couples: Prisma.$CouplePayload<ExtArgs>[]
      roles: Prisma.$RoleAssignmentPayload<ExtArgs>[]
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      archdioceseId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parish"]>
    composites: {
      address: Prisma.$AddressPayload
    }
  }

  type ParishGetPayload<S extends boolean | null | undefined | ParishDefaultArgs> = $Result.GetResult<Prisma.$ParishPayload, S>

  type ParishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParishCountAggregateInputType | true
    }

  export interface ParishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parish'], meta: { name: 'Parish' } }
    /**
     * Find zero or one Parish that matches the filter.
     * @param {ParishFindUniqueArgs} args - Arguments to find a Parish
     * @example
     * // Get one Parish
     * const parish = await prisma.parish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParishFindUniqueArgs>(args: SelectSubset<T, ParishFindUniqueArgs<ExtArgs>>): Prisma__ParishClient<$Result.GetResult<Prisma.$ParishPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parish that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParishFindUniqueOrThrowArgs} args - Arguments to find a Parish
     * @example
     * // Get one Parish
     * const parish = await prisma.parish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParishFindUniqueOrThrowArgs>(args: SelectSubset<T, ParishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParishClient<$Result.GetResult<Prisma.$ParishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParishFindFirstArgs} args - Arguments to find a Parish
     * @example
     * // Get one Parish
     * const parish = await prisma.parish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParishFindFirstArgs>(args?: SelectSubset<T, ParishFindFirstArgs<ExtArgs>>): Prisma__ParishClient<$Result.GetResult<Prisma.$ParishPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParishFindFirstOrThrowArgs} args - Arguments to find a Parish
     * @example
     * // Get one Parish
     * const parish = await prisma.parish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParishFindFirstOrThrowArgs>(args?: SelectSubset<T, ParishFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParishClient<$Result.GetResult<Prisma.$ParishPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parishes
     * const parishes = await prisma.parish.findMany()
     * 
     * // Get first 10 Parishes
     * const parishes = await prisma.parish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parishWithIdOnly = await prisma.parish.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParishFindManyArgs>(args?: SelectSubset<T, ParishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parish.
     * @param {ParishCreateArgs} args - Arguments to create a Parish.
     * @example
     * // Create one Parish
     * const Parish = await prisma.parish.create({
     *   data: {
     *     // ... data to create a Parish
     *   }
     * })
     * 
     */
    create<T extends ParishCreateArgs>(args: SelectSubset<T, ParishCreateArgs<ExtArgs>>): Prisma__ParishClient<$Result.GetResult<Prisma.$ParishPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parishes.
     * @param {ParishCreateManyArgs} args - Arguments to create many Parishes.
     * @example
     * // Create many Parishes
     * const parish = await prisma.parish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParishCreateManyArgs>(args?: SelectSubset<T, ParishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Parish.
     * @param {ParishDeleteArgs} args - Arguments to delete one Parish.
     * @example
     * // Delete one Parish
     * const Parish = await prisma.parish.delete({
     *   where: {
     *     // ... filter to delete one Parish
     *   }
     * })
     * 
     */
    delete<T extends ParishDeleteArgs>(args: SelectSubset<T, ParishDeleteArgs<ExtArgs>>): Prisma__ParishClient<$Result.GetResult<Prisma.$ParishPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parish.
     * @param {ParishUpdateArgs} args - Arguments to update one Parish.
     * @example
     * // Update one Parish
     * const parish = await prisma.parish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParishUpdateArgs>(args: SelectSubset<T, ParishUpdateArgs<ExtArgs>>): Prisma__ParishClient<$Result.GetResult<Prisma.$ParishPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parishes.
     * @param {ParishDeleteManyArgs} args - Arguments to filter Parishes to delete.
     * @example
     * // Delete a few Parishes
     * const { count } = await prisma.parish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParishDeleteManyArgs>(args?: SelectSubset<T, ParishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parishes
     * const parish = await prisma.parish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParishUpdateManyArgs>(args: SelectSubset<T, ParishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parish.
     * @param {ParishUpsertArgs} args - Arguments to update or create a Parish.
     * @example
     * // Update or create a Parish
     * const parish = await prisma.parish.upsert({
     *   create: {
     *     // ... data to create a Parish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parish we want to update
     *   }
     * })
     */
    upsert<T extends ParishUpsertArgs>(args: SelectSubset<T, ParishUpsertArgs<ExtArgs>>): Prisma__ParishClient<$Result.GetResult<Prisma.$ParishPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parishes that matches the filter.
     * @param {ParishFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const parish = await prisma.parish.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ParishFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Parish.
     * @param {ParishAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const parish = await prisma.parish.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ParishAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Parishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParishCountArgs} args - Arguments to filter Parishes to count.
     * @example
     * // Count the number of Parishes
     * const count = await prisma.parish.count({
     *   where: {
     *     // ... the filter for the Parishes we want to count
     *   }
     * })
    **/
    count<T extends ParishCountArgs>(
      args?: Subset<T, ParishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParishAggregateArgs>(args: Subset<T, ParishAggregateArgs>): Prisma.PrismaPromise<GetParishAggregateType<T>>

    /**
     * Group by Parish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParishGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParishGroupByArgs['orderBy'] }
        : { orderBy?: ParishGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parish model
   */
  readonly fields: ParishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    archdiocese<T extends ArchdioceseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArchdioceseDefaultArgs<ExtArgs>>): Prisma__ArchdioceseClient<$Result.GetResult<Prisma.$ArchdiocesePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    couples<T extends Parish$couplesArgs<ExtArgs> = {}>(args?: Subset<T, Parish$couplesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends Parish$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Parish$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissions<T extends Parish$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Parish$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Parish model
   */
  interface ParishFieldRefs {
    readonly id: FieldRef<"Parish", 'String'>
    readonly name: FieldRef<"Parish", 'String'>
    readonly archdioceseId: FieldRef<"Parish", 'String'>
    readonly createdAt: FieldRef<"Parish", 'DateTime'>
    readonly updatedAt: FieldRef<"Parish", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parish findUnique
   */
  export type ParishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parish
     */
    select?: ParishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parish
     */
    omit?: ParishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParishInclude<ExtArgs> | null
    /**
     * Filter, which Parish to fetch.
     */
    where: ParishWhereUniqueInput
  }

  /**
   * Parish findUniqueOrThrow
   */
  export type ParishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parish
     */
    select?: ParishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parish
     */
    omit?: ParishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParishInclude<ExtArgs> | null
    /**
     * Filter, which Parish to fetch.
     */
    where: ParishWhereUniqueInput
  }

  /**
   * Parish findFirst
   */
  export type ParishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parish
     */
    select?: ParishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parish
     */
    omit?: ParishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParishInclude<ExtArgs> | null
    /**
     * Filter, which Parish to fetch.
     */
    where?: ParishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parishes to fetch.
     */
    orderBy?: ParishOrderByWithRelationInput | ParishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parishes.
     */
    cursor?: ParishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parishes.
     */
    distinct?: ParishScalarFieldEnum | ParishScalarFieldEnum[]
  }

  /**
   * Parish findFirstOrThrow
   */
  export type ParishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parish
     */
    select?: ParishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parish
     */
    omit?: ParishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParishInclude<ExtArgs> | null
    /**
     * Filter, which Parish to fetch.
     */
    where?: ParishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parishes to fetch.
     */
    orderBy?: ParishOrderByWithRelationInput | ParishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parishes.
     */
    cursor?: ParishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parishes.
     */
    distinct?: ParishScalarFieldEnum | ParishScalarFieldEnum[]
  }

  /**
   * Parish findMany
   */
  export type ParishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parish
     */
    select?: ParishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parish
     */
    omit?: ParishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParishInclude<ExtArgs> | null
    /**
     * Filter, which Parishes to fetch.
     */
    where?: ParishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parishes to fetch.
     */
    orderBy?: ParishOrderByWithRelationInput | ParishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parishes.
     */
    cursor?: ParishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parishes.
     */
    skip?: number
    distinct?: ParishScalarFieldEnum | ParishScalarFieldEnum[]
  }

  /**
   * Parish create
   */
  export type ParishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parish
     */
    select?: ParishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parish
     */
    omit?: ParishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParishInclude<ExtArgs> | null
    /**
     * The data needed to create a Parish.
     */
    data: XOR<ParishCreateInput, ParishUncheckedCreateInput>
  }

  /**
   * Parish createMany
   */
  export type ParishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parishes.
     */
    data: ParishCreateManyInput | ParishCreateManyInput[]
  }

  /**
   * Parish update
   */
  export type ParishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parish
     */
    select?: ParishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parish
     */
    omit?: ParishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParishInclude<ExtArgs> | null
    /**
     * The data needed to update a Parish.
     */
    data: XOR<ParishUpdateInput, ParishUncheckedUpdateInput>
    /**
     * Choose, which Parish to update.
     */
    where: ParishWhereUniqueInput
  }

  /**
   * Parish updateMany
   */
  export type ParishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parishes.
     */
    data: XOR<ParishUpdateManyMutationInput, ParishUncheckedUpdateManyInput>
    /**
     * Filter which Parishes to update
     */
    where?: ParishWhereInput
    /**
     * Limit how many Parishes to update.
     */
    limit?: number
  }

  /**
   * Parish upsert
   */
  export type ParishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parish
     */
    select?: ParishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parish
     */
    omit?: ParishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParishInclude<ExtArgs> | null
    /**
     * The filter to search for the Parish to update in case it exists.
     */
    where: ParishWhereUniqueInput
    /**
     * In case the Parish found by the `where` argument doesn't exist, create a new Parish with this data.
     */
    create: XOR<ParishCreateInput, ParishUncheckedCreateInput>
    /**
     * In case the Parish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParishUpdateInput, ParishUncheckedUpdateInput>
  }

  /**
   * Parish delete
   */
  export type ParishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parish
     */
    select?: ParishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parish
     */
    omit?: ParishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParishInclude<ExtArgs> | null
    /**
     * Filter which Parish to delete.
     */
    where: ParishWhereUniqueInput
  }

  /**
   * Parish deleteMany
   */
  export type ParishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parishes to delete
     */
    where?: ParishWhereInput
    /**
     * Limit how many Parishes to delete.
     */
    limit?: number
  }

  /**
   * Parish findRaw
   */
  export type ParishFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Parish aggregateRaw
   */
  export type ParishAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Parish.couples
   */
  export type Parish$couplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    where?: CoupleWhereInput
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    cursor?: CoupleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Parish.roles
   */
  export type Parish$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAssignment
     */
    select?: RoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleAssignment
     */
    omit?: RoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAssignmentInclude<ExtArgs> | null
    where?: RoleAssignmentWhereInput
    orderBy?: RoleAssignmentOrderByWithRelationInput | RoleAssignmentOrderByWithRelationInput[]
    cursor?: RoleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleAssignmentScalarFieldEnum | RoleAssignmentScalarFieldEnum[]
  }

  /**
   * Parish.permissions
   */
  export type Parish$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Parish without action
   */
  export type ParishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parish
     */
    select?: ParishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parish
     */
    omit?: ParishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParishInclude<ExtArgs> | null
  }


  /**
   * Model Couple
   */

  export type AggregateCouple = {
    _count: CoupleCountAggregateOutputType | null
    _min: CoupleMinAggregateOutputType | null
    _max: CoupleMaxAggregateOutputType | null
  }

  export type CoupleMinAggregateOutputType = {
    id: string | null
    member1Id: string | null
    member2Id: string | null
    godparent1Id: string | null
    godparent2Id: string | null
    marriageDate: Date | null
    parishId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoupleMaxAggregateOutputType = {
    id: string | null
    member1Id: string | null
    member2Id: string | null
    godparent1Id: string | null
    godparent2Id: string | null
    marriageDate: Date | null
    parishId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoupleCountAggregateOutputType = {
    id: number
    member1Id: number
    member2Id: number
    godparent1Id: number
    godparent2Id: number
    marriageDate: number
    parishId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoupleMinAggregateInputType = {
    id?: true
    member1Id?: true
    member2Id?: true
    godparent1Id?: true
    godparent2Id?: true
    marriageDate?: true
    parishId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoupleMaxAggregateInputType = {
    id?: true
    member1Id?: true
    member2Id?: true
    godparent1Id?: true
    godparent2Id?: true
    marriageDate?: true
    parishId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoupleCountAggregateInputType = {
    id?: true
    member1Id?: true
    member2Id?: true
    godparent1Id?: true
    godparent2Id?: true
    marriageDate?: true
    parishId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoupleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Couple to aggregate.
     */
    where?: CoupleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couples to fetch.
     */
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoupleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Couples
    **/
    _count?: true | CoupleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoupleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoupleMaxAggregateInputType
  }

  export type GetCoupleAggregateType<T extends CoupleAggregateArgs> = {
        [P in keyof T & keyof AggregateCouple]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCouple[P]>
      : GetScalarType<T[P], AggregateCouple[P]>
  }




  export type CoupleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoupleWhereInput
    orderBy?: CoupleOrderByWithAggregationInput | CoupleOrderByWithAggregationInput[]
    by: CoupleScalarFieldEnum[] | CoupleScalarFieldEnum
    having?: CoupleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoupleCountAggregateInputType | true
    _min?: CoupleMinAggregateInputType
    _max?: CoupleMaxAggregateInputType
  }

  export type CoupleGroupByOutputType = {
    id: string
    member1Id: string
    member2Id: string
    godparent1Id: string | null
    godparent2Id: string | null
    marriageDate: Date
    parishId: string
    createdAt: Date
    updatedAt: Date
    _count: CoupleCountAggregateOutputType | null
    _min: CoupleMinAggregateOutputType | null
    _max: CoupleMaxAggregateOutputType | null
  }

  type GetCoupleGroupByPayload<T extends CoupleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoupleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoupleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoupleGroupByOutputType[P]>
            : GetScalarType<T[P], CoupleGroupByOutputType[P]>
        }
      >
    >


  export type CoupleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member1Id?: boolean
    member2Id?: boolean
    godparent1Id?: boolean
    godparent2Id?: boolean
    marriageDate?: boolean
    parishId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member1?: boolean | ProfileDefaultArgs<ExtArgs>
    member2?: boolean | ProfileDefaultArgs<ExtArgs>
    godparent1?: boolean | Couple$godparent1Args<ExtArgs>
    godparent2?: boolean | Couple$godparent2Args<ExtArgs>
    parish?: boolean | ParishDefaultArgs<ExtArgs>
    roles?: boolean | Couple$rolesArgs<ExtArgs>
    permissions?: boolean | Couple$permissionsArgs<ExtArgs>
    _count?: boolean | CoupleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["couple"]>



  export type CoupleSelectScalar = {
    id?: boolean
    member1Id?: boolean
    member2Id?: boolean
    godparent1Id?: boolean
    godparent2Id?: boolean
    marriageDate?: boolean
    parishId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CoupleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "member1Id" | "member2Id" | "godparent1Id" | "godparent2Id" | "marriageDate" | "parishId" | "createdAt" | "updatedAt", ExtArgs["result"]["couple"]>
  export type CoupleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member1?: boolean | ProfileDefaultArgs<ExtArgs>
    member2?: boolean | ProfileDefaultArgs<ExtArgs>
    godparent1?: boolean | Couple$godparent1Args<ExtArgs>
    godparent2?: boolean | Couple$godparent2Args<ExtArgs>
    parish?: boolean | ParishDefaultArgs<ExtArgs>
    roles?: boolean | Couple$rolesArgs<ExtArgs>
    permissions?: boolean | Couple$permissionsArgs<ExtArgs>
    _count?: boolean | CoupleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CouplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Couple"
    objects: {
      member1: Prisma.$ProfilePayload<ExtArgs>
      member2: Prisma.$ProfilePayload<ExtArgs>
      godparent1: Prisma.$ProfilePayload<ExtArgs> | null
      godparent2: Prisma.$ProfilePayload<ExtArgs> | null
      parish: Prisma.$ParishPayload<ExtArgs>
      roles: Prisma.$RoleAssignmentPayload<ExtArgs>[]
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      member1Id: string
      member2Id: string
      godparent1Id: string | null
      godparent2Id: string | null
      marriageDate: Date
      parishId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["couple"]>
    composites: {}
  }

  type CoupleGetPayload<S extends boolean | null | undefined | CoupleDefaultArgs> = $Result.GetResult<Prisma.$CouplePayload, S>

  type CoupleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoupleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoupleCountAggregateInputType | true
    }

  export interface CoupleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Couple'], meta: { name: 'Couple' } }
    /**
     * Find zero or one Couple that matches the filter.
     * @param {CoupleFindUniqueArgs} args - Arguments to find a Couple
     * @example
     * // Get one Couple
     * const couple = await prisma.couple.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoupleFindUniqueArgs>(args: SelectSubset<T, CoupleFindUniqueArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Couple that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoupleFindUniqueOrThrowArgs} args - Arguments to find a Couple
     * @example
     * // Get one Couple
     * const couple = await prisma.couple.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoupleFindUniqueOrThrowArgs>(args: SelectSubset<T, CoupleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Couple that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleFindFirstArgs} args - Arguments to find a Couple
     * @example
     * // Get one Couple
     * const couple = await prisma.couple.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoupleFindFirstArgs>(args?: SelectSubset<T, CoupleFindFirstArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Couple that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleFindFirstOrThrowArgs} args - Arguments to find a Couple
     * @example
     * // Get one Couple
     * const couple = await prisma.couple.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoupleFindFirstOrThrowArgs>(args?: SelectSubset<T, CoupleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Couples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Couples
     * const couples = await prisma.couple.findMany()
     * 
     * // Get first 10 Couples
     * const couples = await prisma.couple.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coupleWithIdOnly = await prisma.couple.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoupleFindManyArgs>(args?: SelectSubset<T, CoupleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Couple.
     * @param {CoupleCreateArgs} args - Arguments to create a Couple.
     * @example
     * // Create one Couple
     * const Couple = await prisma.couple.create({
     *   data: {
     *     // ... data to create a Couple
     *   }
     * })
     * 
     */
    create<T extends CoupleCreateArgs>(args: SelectSubset<T, CoupleCreateArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Couples.
     * @param {CoupleCreateManyArgs} args - Arguments to create many Couples.
     * @example
     * // Create many Couples
     * const couple = await prisma.couple.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoupleCreateManyArgs>(args?: SelectSubset<T, CoupleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Couple.
     * @param {CoupleDeleteArgs} args - Arguments to delete one Couple.
     * @example
     * // Delete one Couple
     * const Couple = await prisma.couple.delete({
     *   where: {
     *     // ... filter to delete one Couple
     *   }
     * })
     * 
     */
    delete<T extends CoupleDeleteArgs>(args: SelectSubset<T, CoupleDeleteArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Couple.
     * @param {CoupleUpdateArgs} args - Arguments to update one Couple.
     * @example
     * // Update one Couple
     * const couple = await prisma.couple.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoupleUpdateArgs>(args: SelectSubset<T, CoupleUpdateArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Couples.
     * @param {CoupleDeleteManyArgs} args - Arguments to filter Couples to delete.
     * @example
     * // Delete a few Couples
     * const { count } = await prisma.couple.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoupleDeleteManyArgs>(args?: SelectSubset<T, CoupleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Couples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Couples
     * const couple = await prisma.couple.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoupleUpdateManyArgs>(args: SelectSubset<T, CoupleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Couple.
     * @param {CoupleUpsertArgs} args - Arguments to update or create a Couple.
     * @example
     * // Update or create a Couple
     * const couple = await prisma.couple.upsert({
     *   create: {
     *     // ... data to create a Couple
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Couple we want to update
     *   }
     * })
     */
    upsert<T extends CoupleUpsertArgs>(args: SelectSubset<T, CoupleUpsertArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Couples that matches the filter.
     * @param {CoupleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const couple = await prisma.couple.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CoupleFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Couple.
     * @param {CoupleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const couple = await prisma.couple.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CoupleAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Couples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleCountArgs} args - Arguments to filter Couples to count.
     * @example
     * // Count the number of Couples
     * const count = await prisma.couple.count({
     *   where: {
     *     // ... the filter for the Couples we want to count
     *   }
     * })
    **/
    count<T extends CoupleCountArgs>(
      args?: Subset<T, CoupleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoupleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Couple.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoupleAggregateArgs>(args: Subset<T, CoupleAggregateArgs>): Prisma.PrismaPromise<GetCoupleAggregateType<T>>

    /**
     * Group by Couple.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoupleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoupleGroupByArgs['orderBy'] }
        : { orderBy?: CoupleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoupleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoupleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Couple model
   */
  readonly fields: CoupleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Couple.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoupleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member1<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member2<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    godparent1<T extends Couple$godparent1Args<ExtArgs> = {}>(args?: Subset<T, Couple$godparent1Args<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    godparent2<T extends Couple$godparent2Args<ExtArgs> = {}>(args?: Subset<T, Couple$godparent2Args<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parish<T extends ParishDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParishDefaultArgs<ExtArgs>>): Prisma__ParishClient<$Result.GetResult<Prisma.$ParishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    roles<T extends Couple$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Couple$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissions<T extends Couple$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Couple$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Couple model
   */
  interface CoupleFieldRefs {
    readonly id: FieldRef<"Couple", 'String'>
    readonly member1Id: FieldRef<"Couple", 'String'>
    readonly member2Id: FieldRef<"Couple", 'String'>
    readonly godparent1Id: FieldRef<"Couple", 'String'>
    readonly godparent2Id: FieldRef<"Couple", 'String'>
    readonly marriageDate: FieldRef<"Couple", 'DateTime'>
    readonly parishId: FieldRef<"Couple", 'String'>
    readonly createdAt: FieldRef<"Couple", 'DateTime'>
    readonly updatedAt: FieldRef<"Couple", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Couple findUnique
   */
  export type CoupleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter, which Couple to fetch.
     */
    where: CoupleWhereUniqueInput
  }

  /**
   * Couple findUniqueOrThrow
   */
  export type CoupleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter, which Couple to fetch.
     */
    where: CoupleWhereUniqueInput
  }

  /**
   * Couple findFirst
   */
  export type CoupleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter, which Couple to fetch.
     */
    where?: CoupleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couples to fetch.
     */
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couples.
     */
    cursor?: CoupleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couples.
     */
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Couple findFirstOrThrow
   */
  export type CoupleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter, which Couple to fetch.
     */
    where?: CoupleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couples to fetch.
     */
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couples.
     */
    cursor?: CoupleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couples.
     */
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Couple findMany
   */
  export type CoupleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter, which Couples to fetch.
     */
    where?: CoupleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couples to fetch.
     */
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Couples.
     */
    cursor?: CoupleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couples.
     */
    skip?: number
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Couple create
   */
  export type CoupleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * The data needed to create a Couple.
     */
    data: XOR<CoupleCreateInput, CoupleUncheckedCreateInput>
  }

  /**
   * Couple createMany
   */
  export type CoupleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Couples.
     */
    data: CoupleCreateManyInput | CoupleCreateManyInput[]
  }

  /**
   * Couple update
   */
  export type CoupleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * The data needed to update a Couple.
     */
    data: XOR<CoupleUpdateInput, CoupleUncheckedUpdateInput>
    /**
     * Choose, which Couple to update.
     */
    where: CoupleWhereUniqueInput
  }

  /**
   * Couple updateMany
   */
  export type CoupleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Couples.
     */
    data: XOR<CoupleUpdateManyMutationInput, CoupleUncheckedUpdateManyInput>
    /**
     * Filter which Couples to update
     */
    where?: CoupleWhereInput
    /**
     * Limit how many Couples to update.
     */
    limit?: number
  }

  /**
   * Couple upsert
   */
  export type CoupleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * The filter to search for the Couple to update in case it exists.
     */
    where: CoupleWhereUniqueInput
    /**
     * In case the Couple found by the `where` argument doesn't exist, create a new Couple with this data.
     */
    create: XOR<CoupleCreateInput, CoupleUncheckedCreateInput>
    /**
     * In case the Couple was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoupleUpdateInput, CoupleUncheckedUpdateInput>
  }

  /**
   * Couple delete
   */
  export type CoupleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    /**
     * Filter which Couple to delete.
     */
    where: CoupleWhereUniqueInput
  }

  /**
   * Couple deleteMany
   */
  export type CoupleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Couples to delete
     */
    where?: CoupleWhereInput
    /**
     * Limit how many Couples to delete.
     */
    limit?: number
  }

  /**
   * Couple findRaw
   */
  export type CoupleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Couple aggregateRaw
   */
  export type CoupleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Couple.godparent1
   */
  export type Couple$godparent1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * Couple.godparent2
   */
  export type Couple$godparent2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * Couple.roles
   */
  export type Couple$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAssignment
     */
    select?: RoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleAssignment
     */
    omit?: RoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAssignmentInclude<ExtArgs> | null
    where?: RoleAssignmentWhereInput
    orderBy?: RoleAssignmentOrderByWithRelationInput | RoleAssignmentOrderByWithRelationInput[]
    cursor?: RoleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleAssignmentScalarFieldEnum | RoleAssignmentScalarFieldEnum[]
  }

  /**
   * Couple.permissions
   */
  export type Couple$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Couple without action
   */
  export type CoupleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    name: string | null
    gender: $Enums.Gender | null
    birthDate: Date | null
    phone: string | null
    email: string | null
    photo: string | null
    instagram: string | null
    facebook: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    name: string | null
    gender: $Enums.Gender | null
    birthDate: Date | null
    phone: string | null
    email: string | null
    photo: string | null
    instagram: string | null
    facebook: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    name: number
    gender: number
    birthDate: number
    phone: number
    email: number
    photo: number
    instagram: number
    facebook: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    birthDate?: true
    phone?: true
    email?: true
    photo?: true
    instagram?: true
    facebook?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    birthDate?: true
    phone?: true
    email?: true
    photo?: true
    instagram?: true
    facebook?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    birthDate?: true
    phone?: true
    email?: true
    photo?: true
    instagram?: true
    facebook?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    name: string
    gender: $Enums.Gender
    birthDate: Date
    phone: string
    email: string
    photo: string | null
    instagram: string | null
    facebook: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    gender?: boolean
    birthDate?: boolean
    phone?: boolean
    email?: boolean
    photo?: boolean
    instagram?: boolean
    facebook?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Profile$userArgs<ExtArgs>
    coupleAsMember1?: boolean | Profile$coupleAsMember1Args<ExtArgs>
    coupleAsMember2?: boolean | Profile$coupleAsMember2Args<ExtArgs>
    coupleAsGodparent1?: boolean | Profile$coupleAsGodparent1Args<ExtArgs>
    coupleAsGodparent2?: boolean | Profile$coupleAsGodparent2Args<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>



  export type ProfileSelectScalar = {
    id?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    phone?: boolean
    email?: boolean
    photo?: boolean
    instagram?: boolean
    facebook?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "gender" | "birthDate" | "phone" | "email" | "photo" | "instagram" | "facebook" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Profile$userArgs<ExtArgs>
    coupleAsMember1?: boolean | Profile$coupleAsMember1Args<ExtArgs>
    coupleAsMember2?: boolean | Profile$coupleAsMember2Args<ExtArgs>
    coupleAsGodparent1?: boolean | Profile$coupleAsGodparent1Args<ExtArgs>
    coupleAsGodparent2?: boolean | Profile$coupleAsGodparent2Args<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      coupleAsMember1: Prisma.$CouplePayload<ExtArgs>[]
      coupleAsMember2: Prisma.$CouplePayload<ExtArgs>[]
      coupleAsGodparent1: Prisma.$CouplePayload<ExtArgs>[]
      coupleAsGodparent2: Prisma.$CouplePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      gender: $Enums.Gender
      birthDate: Date
      phone: string
      email: string
      photo: string | null
      instagram: string | null
      facebook: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {
      address: Prisma.$AddressPayload
    }
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * @param {ProfileFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const profile = await prisma.profile.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProfileFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Profile.
     * @param {ProfileAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const profile = await prisma.profile.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProfileAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Profile$userArgs<ExtArgs> = {}>(args?: Subset<T, Profile$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    coupleAsMember1<T extends Profile$coupleAsMember1Args<ExtArgs> = {}>(args?: Subset<T, Profile$coupleAsMember1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coupleAsMember2<T extends Profile$coupleAsMember2Args<ExtArgs> = {}>(args?: Subset<T, Profile$coupleAsMember2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coupleAsGodparent1<T extends Profile$coupleAsGodparent1Args<ExtArgs> = {}>(args?: Subset<T, Profile$coupleAsGodparent1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coupleAsGodparent2<T extends Profile$coupleAsGodparent2Args<ExtArgs> = {}>(args?: Subset<T, Profile$coupleAsGodparent2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly gender: FieldRef<"Profile", 'Gender'>
    readonly birthDate: FieldRef<"Profile", 'DateTime'>
    readonly phone: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly photo: FieldRef<"Profile", 'String'>
    readonly instagram: FieldRef<"Profile", 'String'>
    readonly facebook: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile findRaw
   */
  export type ProfileFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Profile aggregateRaw
   */
  export type ProfileAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Profile.user
   */
  export type Profile$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Profile.coupleAsMember1
   */
  export type Profile$coupleAsMember1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    where?: CoupleWhereInput
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    cursor?: CoupleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Profile.coupleAsMember2
   */
  export type Profile$coupleAsMember2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    where?: CoupleWhereInput
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    cursor?: CoupleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Profile.coupleAsGodparent1
   */
  export type Profile$coupleAsGodparent1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    where?: CoupleWhereInput
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    cursor?: CoupleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Profile.coupleAsGodparent2
   */
  export type Profile$coupleAsGodparent2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    where?: CoupleWhereInput
    orderBy?: CoupleOrderByWithRelationInput | CoupleOrderByWithRelationInput[]
    cursor?: CoupleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoupleScalarFieldEnum | CoupleScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    profileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    profileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    isActive: number
    profileId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    isActive?: true
    profileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    isActive?: true
    profileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    isActive?: true
    profileId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.UserRole
    isActive: boolean
    profileId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    permissions?: boolean | User$permissionsArgs<ExtArgs>
    dataAccessLogs?: boolean | User$dataAccessLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "isActive" | "profileId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    permissions?: boolean | User$permissionsArgs<ExtArgs>
    dataAccessLogs?: boolean | User$dataAccessLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
      dataAccessLogs: Prisma.$DataAccessLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.UserRole
      isActive: boolean
      profileId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permissions<T extends User$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dataAccessLogs<T extends User$dataAccessLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$dataAccessLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataAccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly profileId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.permissions
   */
  export type User$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * User.dataAccessLogs
   */
  export type User$dataAccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAccessLog
     */
    select?: DataAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAccessLog
     */
    omit?: DataAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataAccessLogInclude<ExtArgs> | null
    where?: DataAccessLogWhereInput
    orderBy?: DataAccessLogOrderByWithRelationInput | DataAccessLogOrderByWithRelationInput[]
    cursor?: DataAccessLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataAccessLogScalarFieldEnum | DataAccessLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RoleAssignment
   */

  export type AggregateRoleAssignment = {
    _count: RoleAssignmentCountAggregateOutputType | null
    _min: RoleAssignmentMinAggregateOutputType | null
    _max: RoleAssignmentMaxAggregateOutputType | null
  }

  export type RoleAssignmentMinAggregateOutputType = {
    id: string | null
    role: $Enums.CoupleRole | null
    coupleId: string | null
    archdioceseId: string | null
    parishId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleAssignmentMaxAggregateOutputType = {
    id: string | null
    role: $Enums.CoupleRole | null
    coupleId: string | null
    archdioceseId: string | null
    parishId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleAssignmentCountAggregateOutputType = {
    id: number
    role: number
    coupleId: number
    archdioceseId: number
    parishId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleAssignmentMinAggregateInputType = {
    id?: true
    role?: true
    coupleId?: true
    archdioceseId?: true
    parishId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleAssignmentMaxAggregateInputType = {
    id?: true
    role?: true
    coupleId?: true
    archdioceseId?: true
    parishId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleAssignmentCountAggregateInputType = {
    id?: true
    role?: true
    coupleId?: true
    archdioceseId?: true
    parishId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleAssignment to aggregate.
     */
    where?: RoleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleAssignments to fetch.
     */
    orderBy?: RoleAssignmentOrderByWithRelationInput | RoleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoleAssignments
    **/
    _count?: true | RoleAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleAssignmentMaxAggregateInputType
  }

  export type GetRoleAssignmentAggregateType<T extends RoleAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateRoleAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoleAssignment[P]>
      : GetScalarType<T[P], AggregateRoleAssignment[P]>
  }




  export type RoleAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleAssignmentWhereInput
    orderBy?: RoleAssignmentOrderByWithAggregationInput | RoleAssignmentOrderByWithAggregationInput[]
    by: RoleAssignmentScalarFieldEnum[] | RoleAssignmentScalarFieldEnum
    having?: RoleAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleAssignmentCountAggregateInputType | true
    _min?: RoleAssignmentMinAggregateInputType
    _max?: RoleAssignmentMaxAggregateInputType
  }

  export type RoleAssignmentGroupByOutputType = {
    id: string
    role: $Enums.CoupleRole
    coupleId: string
    archdioceseId: string | null
    parishId: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoleAssignmentCountAggregateOutputType | null
    _min: RoleAssignmentMinAggregateOutputType | null
    _max: RoleAssignmentMaxAggregateOutputType | null
  }

  type GetRoleAssignmentGroupByPayload<T extends RoleAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], RoleAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type RoleAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    coupleId?: boolean
    archdioceseId?: boolean
    parishId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    couple?: boolean | CoupleDefaultArgs<ExtArgs>
    archdiocese?: boolean | RoleAssignment$archdioceseArgs<ExtArgs>
    parish?: boolean | RoleAssignment$parishArgs<ExtArgs>
  }, ExtArgs["result"]["roleAssignment"]>



  export type RoleAssignmentSelectScalar = {
    id?: boolean
    role?: boolean
    coupleId?: boolean
    archdioceseId?: boolean
    parishId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "coupleId" | "archdioceseId" | "parishId" | "createdAt" | "updatedAt", ExtArgs["result"]["roleAssignment"]>
  export type RoleAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couple?: boolean | CoupleDefaultArgs<ExtArgs>
    archdiocese?: boolean | RoleAssignment$archdioceseArgs<ExtArgs>
    parish?: boolean | RoleAssignment$parishArgs<ExtArgs>
  }

  export type $RoleAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoleAssignment"
    objects: {
      couple: Prisma.$CouplePayload<ExtArgs>
      archdiocese: Prisma.$ArchdiocesePayload<ExtArgs> | null
      parish: Prisma.$ParishPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.CoupleRole
      coupleId: string
      archdioceseId: string | null
      parishId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roleAssignment"]>
    composites: {}
  }

  type RoleAssignmentGetPayload<S extends boolean | null | undefined | RoleAssignmentDefaultArgs> = $Result.GetResult<Prisma.$RoleAssignmentPayload, S>

  type RoleAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleAssignmentCountAggregateInputType | true
    }

  export interface RoleAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoleAssignment'], meta: { name: 'RoleAssignment' } }
    /**
     * Find zero or one RoleAssignment that matches the filter.
     * @param {RoleAssignmentFindUniqueArgs} args - Arguments to find a RoleAssignment
     * @example
     * // Get one RoleAssignment
     * const roleAssignment = await prisma.roleAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleAssignmentFindUniqueArgs>(args: SelectSubset<T, RoleAssignmentFindUniqueArgs<ExtArgs>>): Prisma__RoleAssignmentClient<$Result.GetResult<Prisma.$RoleAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoleAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleAssignmentFindUniqueOrThrowArgs} args - Arguments to find a RoleAssignment
     * @example
     * // Get one RoleAssignment
     * const roleAssignment = await prisma.roleAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleAssignmentClient<$Result.GetResult<Prisma.$RoleAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoleAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAssignmentFindFirstArgs} args - Arguments to find a RoleAssignment
     * @example
     * // Get one RoleAssignment
     * const roleAssignment = await prisma.roleAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleAssignmentFindFirstArgs>(args?: SelectSubset<T, RoleAssignmentFindFirstArgs<ExtArgs>>): Prisma__RoleAssignmentClient<$Result.GetResult<Prisma.$RoleAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoleAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAssignmentFindFirstOrThrowArgs} args - Arguments to find a RoleAssignment
     * @example
     * // Get one RoleAssignment
     * const roleAssignment = await prisma.roleAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleAssignmentClient<$Result.GetResult<Prisma.$RoleAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoleAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoleAssignments
     * const roleAssignments = await prisma.roleAssignment.findMany()
     * 
     * // Get first 10 RoleAssignments
     * const roleAssignments = await prisma.roleAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleAssignmentWithIdOnly = await prisma.roleAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleAssignmentFindManyArgs>(args?: SelectSubset<T, RoleAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoleAssignment.
     * @param {RoleAssignmentCreateArgs} args - Arguments to create a RoleAssignment.
     * @example
     * // Create one RoleAssignment
     * const RoleAssignment = await prisma.roleAssignment.create({
     *   data: {
     *     // ... data to create a RoleAssignment
     *   }
     * })
     * 
     */
    create<T extends RoleAssignmentCreateArgs>(args: SelectSubset<T, RoleAssignmentCreateArgs<ExtArgs>>): Prisma__RoleAssignmentClient<$Result.GetResult<Prisma.$RoleAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoleAssignments.
     * @param {RoleAssignmentCreateManyArgs} args - Arguments to create many RoleAssignments.
     * @example
     * // Create many RoleAssignments
     * const roleAssignment = await prisma.roleAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleAssignmentCreateManyArgs>(args?: SelectSubset<T, RoleAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoleAssignment.
     * @param {RoleAssignmentDeleteArgs} args - Arguments to delete one RoleAssignment.
     * @example
     * // Delete one RoleAssignment
     * const RoleAssignment = await prisma.roleAssignment.delete({
     *   where: {
     *     // ... filter to delete one RoleAssignment
     *   }
     * })
     * 
     */
    delete<T extends RoleAssignmentDeleteArgs>(args: SelectSubset<T, RoleAssignmentDeleteArgs<ExtArgs>>): Prisma__RoleAssignmentClient<$Result.GetResult<Prisma.$RoleAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoleAssignment.
     * @param {RoleAssignmentUpdateArgs} args - Arguments to update one RoleAssignment.
     * @example
     * // Update one RoleAssignment
     * const roleAssignment = await prisma.roleAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleAssignmentUpdateArgs>(args: SelectSubset<T, RoleAssignmentUpdateArgs<ExtArgs>>): Prisma__RoleAssignmentClient<$Result.GetResult<Prisma.$RoleAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoleAssignments.
     * @param {RoleAssignmentDeleteManyArgs} args - Arguments to filter RoleAssignments to delete.
     * @example
     * // Delete a few RoleAssignments
     * const { count } = await prisma.roleAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleAssignmentDeleteManyArgs>(args?: SelectSubset<T, RoleAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoleAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoleAssignments
     * const roleAssignment = await prisma.roleAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleAssignmentUpdateManyArgs>(args: SelectSubset<T, RoleAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoleAssignment.
     * @param {RoleAssignmentUpsertArgs} args - Arguments to update or create a RoleAssignment.
     * @example
     * // Update or create a RoleAssignment
     * const roleAssignment = await prisma.roleAssignment.upsert({
     *   create: {
     *     // ... data to create a RoleAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoleAssignment we want to update
     *   }
     * })
     */
    upsert<T extends RoleAssignmentUpsertArgs>(args: SelectSubset<T, RoleAssignmentUpsertArgs<ExtArgs>>): Prisma__RoleAssignmentClient<$Result.GetResult<Prisma.$RoleAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoleAssignments that matches the filter.
     * @param {RoleAssignmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const roleAssignment = await prisma.roleAssignment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RoleAssignmentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RoleAssignment.
     * @param {RoleAssignmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const roleAssignment = await prisma.roleAssignment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RoleAssignmentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RoleAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAssignmentCountArgs} args - Arguments to filter RoleAssignments to count.
     * @example
     * // Count the number of RoleAssignments
     * const count = await prisma.roleAssignment.count({
     *   where: {
     *     // ... the filter for the RoleAssignments we want to count
     *   }
     * })
    **/
    count<T extends RoleAssignmentCountArgs>(
      args?: Subset<T, RoleAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoleAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAssignmentAggregateArgs>(args: Subset<T, RoleAssignmentAggregateArgs>): Prisma.PrismaPromise<GetRoleAssignmentAggregateType<T>>

    /**
     * Group by RoleAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: RoleAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoleAssignment model
   */
  readonly fields: RoleAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoleAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    couple<T extends CoupleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoupleDefaultArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    archdiocese<T extends RoleAssignment$archdioceseArgs<ExtArgs> = {}>(args?: Subset<T, RoleAssignment$archdioceseArgs<ExtArgs>>): Prisma__ArchdioceseClient<$Result.GetResult<Prisma.$ArchdiocesePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parish<T extends RoleAssignment$parishArgs<ExtArgs> = {}>(args?: Subset<T, RoleAssignment$parishArgs<ExtArgs>>): Prisma__ParishClient<$Result.GetResult<Prisma.$ParishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoleAssignment model
   */
  interface RoleAssignmentFieldRefs {
    readonly id: FieldRef<"RoleAssignment", 'String'>
    readonly role: FieldRef<"RoleAssignment", 'CoupleRole'>
    readonly coupleId: FieldRef<"RoleAssignment", 'String'>
    readonly archdioceseId: FieldRef<"RoleAssignment", 'String'>
    readonly parishId: FieldRef<"RoleAssignment", 'String'>
    readonly createdAt: FieldRef<"RoleAssignment", 'DateTime'>
    readonly updatedAt: FieldRef<"RoleAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoleAssignment findUnique
   */
  export type RoleAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAssignment
     */
    select?: RoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleAssignment
     */
    omit?: RoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which RoleAssignment to fetch.
     */
    where: RoleAssignmentWhereUniqueInput
  }

  /**
   * RoleAssignment findUniqueOrThrow
   */
  export type RoleAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAssignment
     */
    select?: RoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleAssignment
     */
    omit?: RoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which RoleAssignment to fetch.
     */
    where: RoleAssignmentWhereUniqueInput
  }

  /**
   * RoleAssignment findFirst
   */
  export type RoleAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAssignment
     */
    select?: RoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleAssignment
     */
    omit?: RoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which RoleAssignment to fetch.
     */
    where?: RoleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleAssignments to fetch.
     */
    orderBy?: RoleAssignmentOrderByWithRelationInput | RoleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleAssignments.
     */
    cursor?: RoleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleAssignments.
     */
    distinct?: RoleAssignmentScalarFieldEnum | RoleAssignmentScalarFieldEnum[]
  }

  /**
   * RoleAssignment findFirstOrThrow
   */
  export type RoleAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAssignment
     */
    select?: RoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleAssignment
     */
    omit?: RoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which RoleAssignment to fetch.
     */
    where?: RoleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleAssignments to fetch.
     */
    orderBy?: RoleAssignmentOrderByWithRelationInput | RoleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleAssignments.
     */
    cursor?: RoleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleAssignments.
     */
    distinct?: RoleAssignmentScalarFieldEnum | RoleAssignmentScalarFieldEnum[]
  }

  /**
   * RoleAssignment findMany
   */
  export type RoleAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAssignment
     */
    select?: RoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleAssignment
     */
    omit?: RoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which RoleAssignments to fetch.
     */
    where?: RoleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleAssignments to fetch.
     */
    orderBy?: RoleAssignmentOrderByWithRelationInput | RoleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoleAssignments.
     */
    cursor?: RoleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleAssignments.
     */
    skip?: number
    distinct?: RoleAssignmentScalarFieldEnum | RoleAssignmentScalarFieldEnum[]
  }

  /**
   * RoleAssignment create
   */
  export type RoleAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAssignment
     */
    select?: RoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleAssignment
     */
    omit?: RoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a RoleAssignment.
     */
    data: XOR<RoleAssignmentCreateInput, RoleAssignmentUncheckedCreateInput>
  }

  /**
   * RoleAssignment createMany
   */
  export type RoleAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoleAssignments.
     */
    data: RoleAssignmentCreateManyInput | RoleAssignmentCreateManyInput[]
  }

  /**
   * RoleAssignment update
   */
  export type RoleAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAssignment
     */
    select?: RoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleAssignment
     */
    omit?: RoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a RoleAssignment.
     */
    data: XOR<RoleAssignmentUpdateInput, RoleAssignmentUncheckedUpdateInput>
    /**
     * Choose, which RoleAssignment to update.
     */
    where: RoleAssignmentWhereUniqueInput
  }

  /**
   * RoleAssignment updateMany
   */
  export type RoleAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoleAssignments.
     */
    data: XOR<RoleAssignmentUpdateManyMutationInput, RoleAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which RoleAssignments to update
     */
    where?: RoleAssignmentWhereInput
    /**
     * Limit how many RoleAssignments to update.
     */
    limit?: number
  }

  /**
   * RoleAssignment upsert
   */
  export type RoleAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAssignment
     */
    select?: RoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleAssignment
     */
    omit?: RoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the RoleAssignment to update in case it exists.
     */
    where: RoleAssignmentWhereUniqueInput
    /**
     * In case the RoleAssignment found by the `where` argument doesn't exist, create a new RoleAssignment with this data.
     */
    create: XOR<RoleAssignmentCreateInput, RoleAssignmentUncheckedCreateInput>
    /**
     * In case the RoleAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleAssignmentUpdateInput, RoleAssignmentUncheckedUpdateInput>
  }

  /**
   * RoleAssignment delete
   */
  export type RoleAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAssignment
     */
    select?: RoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleAssignment
     */
    omit?: RoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter which RoleAssignment to delete.
     */
    where: RoleAssignmentWhereUniqueInput
  }

  /**
   * RoleAssignment deleteMany
   */
  export type RoleAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleAssignments to delete
     */
    where?: RoleAssignmentWhereInput
    /**
     * Limit how many RoleAssignments to delete.
     */
    limit?: number
  }

  /**
   * RoleAssignment findRaw
   */
  export type RoleAssignmentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RoleAssignment aggregateRaw
   */
  export type RoleAssignmentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RoleAssignment.archdiocese
   */
  export type RoleAssignment$archdioceseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archdiocese
     */
    select?: ArchdioceseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archdiocese
     */
    omit?: ArchdioceseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchdioceseInclude<ExtArgs> | null
    where?: ArchdioceseWhereInput
  }

  /**
   * RoleAssignment.parish
   */
  export type RoleAssignment$parishArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parish
     */
    select?: ParishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parish
     */
    omit?: ParishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParishInclude<ExtArgs> | null
    where?: ParishWhereInput
  }

  /**
   * RoleAssignment without action
   */
  export type RoleAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleAssignment
     */
    select?: RoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleAssignment
     */
    omit?: RoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    entity: $Enums.DataAccessEntity | null
    action: $Enums.DataAccessAction | null
    archdioceseId: string | null
    parishId: string | null
    coupleId: string | null
    resourceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    entity: $Enums.DataAccessEntity | null
    action: $Enums.DataAccessAction | null
    archdioceseId: string | null
    parishId: string | null
    coupleId: string | null
    resourceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    userId: number
    entity: number
    action: number
    archdioceseId: number
    parishId: number
    coupleId: number
    resourceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermissionMinAggregateInputType = {
    id?: true
    userId?: true
    entity?: true
    action?: true
    archdioceseId?: true
    parishId?: true
    coupleId?: true
    resourceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    userId?: true
    entity?: true
    action?: true
    archdioceseId?: true
    parishId?: true
    coupleId?: true
    resourceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    userId?: true
    entity?: true
    action?: true
    archdioceseId?: true
    parishId?: true
    coupleId?: true
    resourceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: string
    userId: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    archdioceseId: string | null
    parishId: string | null
    coupleId: string | null
    resourceId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    entity?: boolean
    action?: boolean
    archdioceseId?: boolean
    parishId?: boolean
    coupleId?: boolean
    resourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    archdiocese?: boolean | Permission$archdioceseArgs<ExtArgs>
    parish?: boolean | Permission$parishArgs<ExtArgs>
    couple?: boolean | Permission$coupleArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>



  export type PermissionSelectScalar = {
    id?: boolean
    userId?: boolean
    entity?: boolean
    action?: boolean
    archdioceseId?: boolean
    parishId?: boolean
    coupleId?: boolean
    resourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "entity" | "action" | "archdioceseId" | "parishId" | "coupleId" | "resourceId" | "createdAt" | "updatedAt", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    archdiocese?: boolean | Permission$archdioceseArgs<ExtArgs>
    parish?: boolean | Permission$parishArgs<ExtArgs>
    couple?: boolean | Permission$coupleArgs<ExtArgs>
  }

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      archdiocese: Prisma.$ArchdiocesePayload<ExtArgs> | null
      parish: Prisma.$ParishPayload<ExtArgs> | null
      couple: Prisma.$CouplePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      entity: $Enums.DataAccessEntity
      action: $Enums.DataAccessAction
      archdioceseId: string | null
      parishId: string | null
      coupleId: string | null
      resourceId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * @param {PermissionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const permission = await prisma.permission.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PermissionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Permission.
     * @param {PermissionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const permission = await prisma.permission.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PermissionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    archdiocese<T extends Permission$archdioceseArgs<ExtArgs> = {}>(args?: Subset<T, Permission$archdioceseArgs<ExtArgs>>): Prisma__ArchdioceseClient<$Result.GetResult<Prisma.$ArchdiocesePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parish<T extends Permission$parishArgs<ExtArgs> = {}>(args?: Subset<T, Permission$parishArgs<ExtArgs>>): Prisma__ParishClient<$Result.GetResult<Prisma.$ParishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    couple<T extends Permission$coupleArgs<ExtArgs> = {}>(args?: Subset<T, Permission$coupleArgs<ExtArgs>>): Prisma__CoupleClient<$Result.GetResult<Prisma.$CouplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'String'>
    readonly userId: FieldRef<"Permission", 'String'>
    readonly entity: FieldRef<"Permission", 'DataAccessEntity'>
    readonly action: FieldRef<"Permission", 'DataAccessAction'>
    readonly archdioceseId: FieldRef<"Permission", 'String'>
    readonly parishId: FieldRef<"Permission", 'String'>
    readonly coupleId: FieldRef<"Permission", 'String'>
    readonly resourceId: FieldRef<"Permission", 'String'>
    readonly createdAt: FieldRef<"Permission", 'DateTime'>
    readonly updatedAt: FieldRef<"Permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission findRaw
   */
  export type PermissionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Permission aggregateRaw
   */
  export type PermissionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Permission.archdiocese
   */
  export type Permission$archdioceseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archdiocese
     */
    select?: ArchdioceseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archdiocese
     */
    omit?: ArchdioceseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchdioceseInclude<ExtArgs> | null
    where?: ArchdioceseWhereInput
  }

  /**
   * Permission.parish
   */
  export type Permission$parishArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parish
     */
    select?: ParishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parish
     */
    omit?: ParishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParishInclude<ExtArgs> | null
    where?: ParishWhereInput
  }

  /**
   * Permission.couple
   */
  export type Permission$coupleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couple
     */
    select?: CoupleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couple
     */
    omit?: CoupleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupleInclude<ExtArgs> | null
    where?: CoupleWhereInput
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model DataAccessLog
   */

  export type AggregateDataAccessLog = {
    _count: DataAccessLogCountAggregateOutputType | null
    _min: DataAccessLogMinAggregateOutputType | null
    _max: DataAccessLogMaxAggregateOutputType | null
  }

  export type DataAccessLogMinAggregateOutputType = {
    id: string | null
    entity: $Enums.DataAccessEntity | null
    entityId: string | null
    action: $Enums.DataAccessAction | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    success: boolean | null
    errorMessage: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataAccessLogMaxAggregateOutputType = {
    id: string | null
    entity: $Enums.DataAccessEntity | null
    entityId: string | null
    action: $Enums.DataAccessAction | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    success: boolean | null
    errorMessage: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataAccessLogCountAggregateOutputType = {
    id: number
    entity: number
    entityId: number
    action: number
    userId: number
    ipAddress: number
    userAgent: number
    success: number
    errorMessage: number
    requestData: number
    responseData: number
    timestamp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DataAccessLogMinAggregateInputType = {
    id?: true
    entity?: true
    entityId?: true
    action?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    success?: true
    errorMessage?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataAccessLogMaxAggregateInputType = {
    id?: true
    entity?: true
    entityId?: true
    action?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    success?: true
    errorMessage?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataAccessLogCountAggregateInputType = {
    id?: true
    entity?: true
    entityId?: true
    action?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    success?: true
    errorMessage?: true
    requestData?: true
    responseData?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DataAccessLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataAccessLog to aggregate.
     */
    where?: DataAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataAccessLogs to fetch.
     */
    orderBy?: DataAccessLogOrderByWithRelationInput | DataAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataAccessLogs
    **/
    _count?: true | DataAccessLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataAccessLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataAccessLogMaxAggregateInputType
  }

  export type GetDataAccessLogAggregateType<T extends DataAccessLogAggregateArgs> = {
        [P in keyof T & keyof AggregateDataAccessLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataAccessLog[P]>
      : GetScalarType<T[P], AggregateDataAccessLog[P]>
  }




  export type DataAccessLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataAccessLogWhereInput
    orderBy?: DataAccessLogOrderByWithAggregationInput | DataAccessLogOrderByWithAggregationInput[]
    by: DataAccessLogScalarFieldEnum[] | DataAccessLogScalarFieldEnum
    having?: DataAccessLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataAccessLogCountAggregateInputType | true
    _min?: DataAccessLogMinAggregateInputType
    _max?: DataAccessLogMaxAggregateInputType
  }

  export type DataAccessLogGroupByOutputType = {
    id: string
    entity: $Enums.DataAccessEntity
    entityId: string
    action: $Enums.DataAccessAction
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    success: boolean
    errorMessage: string | null
    requestData: JsonValue | null
    responseData: JsonValue | null
    timestamp: Date
    createdAt: Date
    updatedAt: Date
    _count: DataAccessLogCountAggregateOutputType | null
    _min: DataAccessLogMinAggregateOutputType | null
    _max: DataAccessLogMaxAggregateOutputType | null
  }

  type GetDataAccessLogGroupByPayload<T extends DataAccessLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataAccessLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataAccessLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataAccessLogGroupByOutputType[P]>
            : GetScalarType<T[P], DataAccessLogGroupByOutputType[P]>
        }
      >
    >


  export type DataAccessLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    success?: boolean
    errorMessage?: boolean
    requestData?: boolean
    responseData?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | DataAccessLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["dataAccessLog"]>



  export type DataAccessLogSelectScalar = {
    id?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    success?: boolean
    errorMessage?: boolean
    requestData?: boolean
    responseData?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DataAccessLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entity" | "entityId" | "action" | "userId" | "ipAddress" | "userAgent" | "success" | "errorMessage" | "requestData" | "responseData" | "timestamp" | "createdAt" | "updatedAt", ExtArgs["result"]["dataAccessLog"]>
  export type DataAccessLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | DataAccessLog$userArgs<ExtArgs>
  }

  export type $DataAccessLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataAccessLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entity: $Enums.DataAccessEntity
      entityId: string
      action: $Enums.DataAccessAction
      userId: string | null
      ipAddress: string | null
      userAgent: string | null
      success: boolean
      errorMessage: string | null
      requestData: Prisma.JsonValue | null
      responseData: Prisma.JsonValue | null
      timestamp: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dataAccessLog"]>
    composites: {}
  }

  type DataAccessLogGetPayload<S extends boolean | null | undefined | DataAccessLogDefaultArgs> = $Result.GetResult<Prisma.$DataAccessLogPayload, S>

  type DataAccessLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataAccessLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataAccessLogCountAggregateInputType | true
    }

  export interface DataAccessLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataAccessLog'], meta: { name: 'DataAccessLog' } }
    /**
     * Find zero or one DataAccessLog that matches the filter.
     * @param {DataAccessLogFindUniqueArgs} args - Arguments to find a DataAccessLog
     * @example
     * // Get one DataAccessLog
     * const dataAccessLog = await prisma.dataAccessLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataAccessLogFindUniqueArgs>(args: SelectSubset<T, DataAccessLogFindUniqueArgs<ExtArgs>>): Prisma__DataAccessLogClient<$Result.GetResult<Prisma.$DataAccessLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataAccessLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataAccessLogFindUniqueOrThrowArgs} args - Arguments to find a DataAccessLog
     * @example
     * // Get one DataAccessLog
     * const dataAccessLog = await prisma.dataAccessLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataAccessLogFindUniqueOrThrowArgs>(args: SelectSubset<T, DataAccessLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataAccessLogClient<$Result.GetResult<Prisma.$DataAccessLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataAccessLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAccessLogFindFirstArgs} args - Arguments to find a DataAccessLog
     * @example
     * // Get one DataAccessLog
     * const dataAccessLog = await prisma.dataAccessLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataAccessLogFindFirstArgs>(args?: SelectSubset<T, DataAccessLogFindFirstArgs<ExtArgs>>): Prisma__DataAccessLogClient<$Result.GetResult<Prisma.$DataAccessLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataAccessLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAccessLogFindFirstOrThrowArgs} args - Arguments to find a DataAccessLog
     * @example
     * // Get one DataAccessLog
     * const dataAccessLog = await prisma.dataAccessLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataAccessLogFindFirstOrThrowArgs>(args?: SelectSubset<T, DataAccessLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataAccessLogClient<$Result.GetResult<Prisma.$DataAccessLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataAccessLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAccessLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataAccessLogs
     * const dataAccessLogs = await prisma.dataAccessLog.findMany()
     * 
     * // Get first 10 DataAccessLogs
     * const dataAccessLogs = await prisma.dataAccessLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataAccessLogWithIdOnly = await prisma.dataAccessLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataAccessLogFindManyArgs>(args?: SelectSubset<T, DataAccessLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataAccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataAccessLog.
     * @param {DataAccessLogCreateArgs} args - Arguments to create a DataAccessLog.
     * @example
     * // Create one DataAccessLog
     * const DataAccessLog = await prisma.dataAccessLog.create({
     *   data: {
     *     // ... data to create a DataAccessLog
     *   }
     * })
     * 
     */
    create<T extends DataAccessLogCreateArgs>(args: SelectSubset<T, DataAccessLogCreateArgs<ExtArgs>>): Prisma__DataAccessLogClient<$Result.GetResult<Prisma.$DataAccessLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataAccessLogs.
     * @param {DataAccessLogCreateManyArgs} args - Arguments to create many DataAccessLogs.
     * @example
     * // Create many DataAccessLogs
     * const dataAccessLog = await prisma.dataAccessLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataAccessLogCreateManyArgs>(args?: SelectSubset<T, DataAccessLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataAccessLog.
     * @param {DataAccessLogDeleteArgs} args - Arguments to delete one DataAccessLog.
     * @example
     * // Delete one DataAccessLog
     * const DataAccessLog = await prisma.dataAccessLog.delete({
     *   where: {
     *     // ... filter to delete one DataAccessLog
     *   }
     * })
     * 
     */
    delete<T extends DataAccessLogDeleteArgs>(args: SelectSubset<T, DataAccessLogDeleteArgs<ExtArgs>>): Prisma__DataAccessLogClient<$Result.GetResult<Prisma.$DataAccessLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataAccessLog.
     * @param {DataAccessLogUpdateArgs} args - Arguments to update one DataAccessLog.
     * @example
     * // Update one DataAccessLog
     * const dataAccessLog = await prisma.dataAccessLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataAccessLogUpdateArgs>(args: SelectSubset<T, DataAccessLogUpdateArgs<ExtArgs>>): Prisma__DataAccessLogClient<$Result.GetResult<Prisma.$DataAccessLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataAccessLogs.
     * @param {DataAccessLogDeleteManyArgs} args - Arguments to filter DataAccessLogs to delete.
     * @example
     * // Delete a few DataAccessLogs
     * const { count } = await prisma.dataAccessLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataAccessLogDeleteManyArgs>(args?: SelectSubset<T, DataAccessLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataAccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAccessLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataAccessLogs
     * const dataAccessLog = await prisma.dataAccessLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataAccessLogUpdateManyArgs>(args: SelectSubset<T, DataAccessLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataAccessLog.
     * @param {DataAccessLogUpsertArgs} args - Arguments to update or create a DataAccessLog.
     * @example
     * // Update or create a DataAccessLog
     * const dataAccessLog = await prisma.dataAccessLog.upsert({
     *   create: {
     *     // ... data to create a DataAccessLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataAccessLog we want to update
     *   }
     * })
     */
    upsert<T extends DataAccessLogUpsertArgs>(args: SelectSubset<T, DataAccessLogUpsertArgs<ExtArgs>>): Prisma__DataAccessLogClient<$Result.GetResult<Prisma.$DataAccessLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataAccessLogs that matches the filter.
     * @param {DataAccessLogFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const dataAccessLog = await prisma.dataAccessLog.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DataAccessLogFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DataAccessLog.
     * @param {DataAccessLogAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const dataAccessLog = await prisma.dataAccessLog.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DataAccessLogAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DataAccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAccessLogCountArgs} args - Arguments to filter DataAccessLogs to count.
     * @example
     * // Count the number of DataAccessLogs
     * const count = await prisma.dataAccessLog.count({
     *   where: {
     *     // ... the filter for the DataAccessLogs we want to count
     *   }
     * })
    **/
    count<T extends DataAccessLogCountArgs>(
      args?: Subset<T, DataAccessLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataAccessLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataAccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAccessLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataAccessLogAggregateArgs>(args: Subset<T, DataAccessLogAggregateArgs>): Prisma.PrismaPromise<GetDataAccessLogAggregateType<T>>

    /**
     * Group by DataAccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAccessLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataAccessLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataAccessLogGroupByArgs['orderBy'] }
        : { orderBy?: DataAccessLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataAccessLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataAccessLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataAccessLog model
   */
  readonly fields: DataAccessLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataAccessLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataAccessLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends DataAccessLog$userArgs<ExtArgs> = {}>(args?: Subset<T, DataAccessLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DataAccessLog model
   */
  interface DataAccessLogFieldRefs {
    readonly id: FieldRef<"DataAccessLog", 'String'>
    readonly entity: FieldRef<"DataAccessLog", 'DataAccessEntity'>
    readonly entityId: FieldRef<"DataAccessLog", 'String'>
    readonly action: FieldRef<"DataAccessLog", 'DataAccessAction'>
    readonly userId: FieldRef<"DataAccessLog", 'String'>
    readonly ipAddress: FieldRef<"DataAccessLog", 'String'>
    readonly userAgent: FieldRef<"DataAccessLog", 'String'>
    readonly success: FieldRef<"DataAccessLog", 'Boolean'>
    readonly errorMessage: FieldRef<"DataAccessLog", 'String'>
    readonly requestData: FieldRef<"DataAccessLog", 'Json'>
    readonly responseData: FieldRef<"DataAccessLog", 'Json'>
    readonly timestamp: FieldRef<"DataAccessLog", 'DateTime'>
    readonly createdAt: FieldRef<"DataAccessLog", 'DateTime'>
    readonly updatedAt: FieldRef<"DataAccessLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataAccessLog findUnique
   */
  export type DataAccessLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAccessLog
     */
    select?: DataAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAccessLog
     */
    omit?: DataAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which DataAccessLog to fetch.
     */
    where: DataAccessLogWhereUniqueInput
  }

  /**
   * DataAccessLog findUniqueOrThrow
   */
  export type DataAccessLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAccessLog
     */
    select?: DataAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAccessLog
     */
    omit?: DataAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which DataAccessLog to fetch.
     */
    where: DataAccessLogWhereUniqueInput
  }

  /**
   * DataAccessLog findFirst
   */
  export type DataAccessLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAccessLog
     */
    select?: DataAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAccessLog
     */
    omit?: DataAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which DataAccessLog to fetch.
     */
    where?: DataAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataAccessLogs to fetch.
     */
    orderBy?: DataAccessLogOrderByWithRelationInput | DataAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataAccessLogs.
     */
    cursor?: DataAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataAccessLogs.
     */
    distinct?: DataAccessLogScalarFieldEnum | DataAccessLogScalarFieldEnum[]
  }

  /**
   * DataAccessLog findFirstOrThrow
   */
  export type DataAccessLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAccessLog
     */
    select?: DataAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAccessLog
     */
    omit?: DataAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which DataAccessLog to fetch.
     */
    where?: DataAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataAccessLogs to fetch.
     */
    orderBy?: DataAccessLogOrderByWithRelationInput | DataAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataAccessLogs.
     */
    cursor?: DataAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataAccessLogs.
     */
    distinct?: DataAccessLogScalarFieldEnum | DataAccessLogScalarFieldEnum[]
  }

  /**
   * DataAccessLog findMany
   */
  export type DataAccessLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAccessLog
     */
    select?: DataAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAccessLog
     */
    omit?: DataAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which DataAccessLogs to fetch.
     */
    where?: DataAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataAccessLogs to fetch.
     */
    orderBy?: DataAccessLogOrderByWithRelationInput | DataAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataAccessLogs.
     */
    cursor?: DataAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataAccessLogs.
     */
    skip?: number
    distinct?: DataAccessLogScalarFieldEnum | DataAccessLogScalarFieldEnum[]
  }

  /**
   * DataAccessLog create
   */
  export type DataAccessLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAccessLog
     */
    select?: DataAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAccessLog
     */
    omit?: DataAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataAccessLogInclude<ExtArgs> | null
    /**
     * The data needed to create a DataAccessLog.
     */
    data: XOR<DataAccessLogCreateInput, DataAccessLogUncheckedCreateInput>
  }

  /**
   * DataAccessLog createMany
   */
  export type DataAccessLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataAccessLogs.
     */
    data: DataAccessLogCreateManyInput | DataAccessLogCreateManyInput[]
  }

  /**
   * DataAccessLog update
   */
  export type DataAccessLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAccessLog
     */
    select?: DataAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAccessLog
     */
    omit?: DataAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataAccessLogInclude<ExtArgs> | null
    /**
     * The data needed to update a DataAccessLog.
     */
    data: XOR<DataAccessLogUpdateInput, DataAccessLogUncheckedUpdateInput>
    /**
     * Choose, which DataAccessLog to update.
     */
    where: DataAccessLogWhereUniqueInput
  }

  /**
   * DataAccessLog updateMany
   */
  export type DataAccessLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataAccessLogs.
     */
    data: XOR<DataAccessLogUpdateManyMutationInput, DataAccessLogUncheckedUpdateManyInput>
    /**
     * Filter which DataAccessLogs to update
     */
    where?: DataAccessLogWhereInput
    /**
     * Limit how many DataAccessLogs to update.
     */
    limit?: number
  }

  /**
   * DataAccessLog upsert
   */
  export type DataAccessLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAccessLog
     */
    select?: DataAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAccessLog
     */
    omit?: DataAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataAccessLogInclude<ExtArgs> | null
    /**
     * The filter to search for the DataAccessLog to update in case it exists.
     */
    where: DataAccessLogWhereUniqueInput
    /**
     * In case the DataAccessLog found by the `where` argument doesn't exist, create a new DataAccessLog with this data.
     */
    create: XOR<DataAccessLogCreateInput, DataAccessLogUncheckedCreateInput>
    /**
     * In case the DataAccessLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataAccessLogUpdateInput, DataAccessLogUncheckedUpdateInput>
  }

  /**
   * DataAccessLog delete
   */
  export type DataAccessLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAccessLog
     */
    select?: DataAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAccessLog
     */
    omit?: DataAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataAccessLogInclude<ExtArgs> | null
    /**
     * Filter which DataAccessLog to delete.
     */
    where: DataAccessLogWhereUniqueInput
  }

  /**
   * DataAccessLog deleteMany
   */
  export type DataAccessLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataAccessLogs to delete
     */
    where?: DataAccessLogWhereInput
    /**
     * Limit how many DataAccessLogs to delete.
     */
    limit?: number
  }

  /**
   * DataAccessLog findRaw
   */
  export type DataAccessLogFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DataAccessLog aggregateRaw
   */
  export type DataAccessLogAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DataAccessLog.user
   */
  export type DataAccessLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * DataAccessLog without action
   */
  export type DataAccessLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAccessLog
     */
    select?: DataAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAccessLog
     */
    omit?: DataAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataAccessLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ArchdioceseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArchdioceseScalarFieldEnum = (typeof ArchdioceseScalarFieldEnum)[keyof typeof ArchdioceseScalarFieldEnum]


  export const ParishScalarFieldEnum: {
    id: 'id',
    name: 'name',
    archdioceseId: 'archdioceseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParishScalarFieldEnum = (typeof ParishScalarFieldEnum)[keyof typeof ParishScalarFieldEnum]


  export const CoupleScalarFieldEnum: {
    id: 'id',
    member1Id: 'member1Id',
    member2Id: 'member2Id',
    godparent1Id: 'godparent1Id',
    godparent2Id: 'godparent2Id',
    marriageDate: 'marriageDate',
    parishId: 'parishId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoupleScalarFieldEnum = (typeof CoupleScalarFieldEnum)[keyof typeof CoupleScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    birthDate: 'birthDate',
    phone: 'phone',
    email: 'email',
    photo: 'photo',
    instagram: 'instagram',
    facebook: 'facebook',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    isActive: 'isActive',
    profileId: 'profileId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleAssignmentScalarFieldEnum: {
    id: 'id',
    role: 'role',
    coupleId: 'coupleId',
    archdioceseId: 'archdioceseId',
    parishId: 'parishId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleAssignmentScalarFieldEnum = (typeof RoleAssignmentScalarFieldEnum)[keyof typeof RoleAssignmentScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    entity: 'entity',
    action: 'action',
    archdioceseId: 'archdioceseId',
    parishId: 'parishId',
    coupleId: 'coupleId',
    resourceId: 'resourceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const DataAccessLogScalarFieldEnum: {
    id: 'id',
    entity: 'entity',
    entityId: 'entityId',
    action: 'action',
    userId: 'userId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    success: 'success',
    errorMessage: 'errorMessage',
    requestData: 'requestData',
    responseData: 'responseData',
    timestamp: 'timestamp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DataAccessLogScalarFieldEnum = (typeof DataAccessLogScalarFieldEnum)[keyof typeof DataAccessLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CoupleRole'
   */
  export type EnumCoupleRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoupleRole'>
    


  /**
   * Reference to a field of type 'CoupleRole[]'
   */
  export type ListEnumCoupleRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoupleRole[]'>
    


  /**
   * Reference to a field of type 'DataAccessEntity'
   */
  export type EnumDataAccessEntityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DataAccessEntity'>
    


  /**
   * Reference to a field of type 'DataAccessEntity[]'
   */
  export type ListEnumDataAccessEntityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DataAccessEntity[]'>
    


  /**
   * Reference to a field of type 'DataAccessAction'
   */
  export type EnumDataAccessActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DataAccessAction'>
    


  /**
   * Reference to a field of type 'DataAccessAction[]'
   */
  export type ListEnumDataAccessActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DataAccessAction[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ArchdioceseWhereInput = {
    AND?: ArchdioceseWhereInput | ArchdioceseWhereInput[]
    OR?: ArchdioceseWhereInput[]
    NOT?: ArchdioceseWhereInput | ArchdioceseWhereInput[]
    id?: StringFilter<"Archdiocese"> | string
    name?: StringFilter<"Archdiocese"> | string
    createdAt?: DateTimeFilter<"Archdiocese"> | Date | string
    updatedAt?: DateTimeFilter<"Archdiocese"> | Date | string
    parishes?: ParishListRelationFilter
    roles?: RoleAssignmentListRelationFilter
    permissions?: PermissionListRelationFilter
  }

  export type ArchdioceseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parishes?: ParishOrderByRelationAggregateInput
    roles?: RoleAssignmentOrderByRelationAggregateInput
    permissions?: PermissionOrderByRelationAggregateInput
  }

  export type ArchdioceseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ArchdioceseWhereInput | ArchdioceseWhereInput[]
    OR?: ArchdioceseWhereInput[]
    NOT?: ArchdioceseWhereInput | ArchdioceseWhereInput[]
    createdAt?: DateTimeFilter<"Archdiocese"> | Date | string
    updatedAt?: DateTimeFilter<"Archdiocese"> | Date | string
    parishes?: ParishListRelationFilter
    roles?: RoleAssignmentListRelationFilter
    permissions?: PermissionListRelationFilter
  }, "id" | "name">

  export type ArchdioceseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArchdioceseCountOrderByAggregateInput
    _max?: ArchdioceseMaxOrderByAggregateInput
    _min?: ArchdioceseMinOrderByAggregateInput
  }

  export type ArchdioceseScalarWhereWithAggregatesInput = {
    AND?: ArchdioceseScalarWhereWithAggregatesInput | ArchdioceseScalarWhereWithAggregatesInput[]
    OR?: ArchdioceseScalarWhereWithAggregatesInput[]
    NOT?: ArchdioceseScalarWhereWithAggregatesInput | ArchdioceseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Archdiocese"> | string
    name?: StringWithAggregatesFilter<"Archdiocese"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Archdiocese"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Archdiocese"> | Date | string
  }

  export type ParishWhereInput = {
    AND?: ParishWhereInput | ParishWhereInput[]
    OR?: ParishWhereInput[]
    NOT?: ParishWhereInput | ParishWhereInput[]
    id?: StringFilter<"Parish"> | string
    name?: StringFilter<"Parish"> | string
    address?: XOR<AddressCompositeFilter, AddressObjectEqualityInput>
    archdioceseId?: StringFilter<"Parish"> | string
    createdAt?: DateTimeFilter<"Parish"> | Date | string
    updatedAt?: DateTimeFilter<"Parish"> | Date | string
    archdiocese?: XOR<ArchdioceseScalarRelationFilter, ArchdioceseWhereInput>
    couples?: CoupleListRelationFilter
    roles?: RoleAssignmentListRelationFilter
    permissions?: PermissionListRelationFilter
  }

  export type ParishOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: AddressOrderByInput
    archdioceseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archdiocese?: ArchdioceseOrderByWithRelationInput
    couples?: CoupleOrderByRelationAggregateInput
    roles?: RoleAssignmentOrderByRelationAggregateInput
    permissions?: PermissionOrderByRelationAggregateInput
  }

  export type ParishWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_archdioceseId?: ParishNameArchdioceseIdCompoundUniqueInput
    AND?: ParishWhereInput | ParishWhereInput[]
    OR?: ParishWhereInput[]
    NOT?: ParishWhereInput | ParishWhereInput[]
    name?: StringFilter<"Parish"> | string
    address?: XOR<AddressCompositeFilter, AddressObjectEqualityInput>
    archdioceseId?: StringFilter<"Parish"> | string
    createdAt?: DateTimeFilter<"Parish"> | Date | string
    updatedAt?: DateTimeFilter<"Parish"> | Date | string
    archdiocese?: XOR<ArchdioceseScalarRelationFilter, ArchdioceseWhereInput>
    couples?: CoupleListRelationFilter
    roles?: RoleAssignmentListRelationFilter
    permissions?: PermissionListRelationFilter
  }, "id" | "name_archdioceseId">

  export type ParishOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    archdioceseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParishCountOrderByAggregateInput
    _max?: ParishMaxOrderByAggregateInput
    _min?: ParishMinOrderByAggregateInput
  }

  export type ParishScalarWhereWithAggregatesInput = {
    AND?: ParishScalarWhereWithAggregatesInput | ParishScalarWhereWithAggregatesInput[]
    OR?: ParishScalarWhereWithAggregatesInput[]
    NOT?: ParishScalarWhereWithAggregatesInput | ParishScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parish"> | string
    name?: StringWithAggregatesFilter<"Parish"> | string
    archdioceseId?: StringWithAggregatesFilter<"Parish"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Parish"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Parish"> | Date | string
  }

  export type CoupleWhereInput = {
    AND?: CoupleWhereInput | CoupleWhereInput[]
    OR?: CoupleWhereInput[]
    NOT?: CoupleWhereInput | CoupleWhereInput[]
    id?: StringFilter<"Couple"> | string
    member1Id?: StringFilter<"Couple"> | string
    member2Id?: StringFilter<"Couple"> | string
    godparent1Id?: StringNullableFilter<"Couple"> | string | null
    godparent2Id?: StringNullableFilter<"Couple"> | string | null
    marriageDate?: DateTimeFilter<"Couple"> | Date | string
    parishId?: StringFilter<"Couple"> | string
    createdAt?: DateTimeFilter<"Couple"> | Date | string
    updatedAt?: DateTimeFilter<"Couple"> | Date | string
    member1?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    member2?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    godparent1?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    godparent2?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    parish?: XOR<ParishScalarRelationFilter, ParishWhereInput>
    roles?: RoleAssignmentListRelationFilter
    permissions?: PermissionListRelationFilter
  }

  export type CoupleOrderByWithRelationInput = {
    id?: SortOrder
    member1Id?: SortOrder
    member2Id?: SortOrder
    godparent1Id?: SortOrder
    godparent2Id?: SortOrder
    marriageDate?: SortOrder
    parishId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    member1?: ProfileOrderByWithRelationInput
    member2?: ProfileOrderByWithRelationInput
    godparent1?: ProfileOrderByWithRelationInput
    godparent2?: ProfileOrderByWithRelationInput
    parish?: ParishOrderByWithRelationInput
    roles?: RoleAssignmentOrderByRelationAggregateInput
    permissions?: PermissionOrderByRelationAggregateInput
  }

  export type CoupleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    member1Id_member2Id?: CoupleMember1IdMember2IdCompoundUniqueInput
    AND?: CoupleWhereInput | CoupleWhereInput[]
    OR?: CoupleWhereInput[]
    NOT?: CoupleWhereInput | CoupleWhereInput[]
    member1Id?: StringFilter<"Couple"> | string
    member2Id?: StringFilter<"Couple"> | string
    godparent1Id?: StringNullableFilter<"Couple"> | string | null
    godparent2Id?: StringNullableFilter<"Couple"> | string | null
    marriageDate?: DateTimeFilter<"Couple"> | Date | string
    parishId?: StringFilter<"Couple"> | string
    createdAt?: DateTimeFilter<"Couple"> | Date | string
    updatedAt?: DateTimeFilter<"Couple"> | Date | string
    member1?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    member2?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    godparent1?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    godparent2?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    parish?: XOR<ParishScalarRelationFilter, ParishWhereInput>
    roles?: RoleAssignmentListRelationFilter
    permissions?: PermissionListRelationFilter
  }, "id" | "member1Id_member2Id">

  export type CoupleOrderByWithAggregationInput = {
    id?: SortOrder
    member1Id?: SortOrder
    member2Id?: SortOrder
    godparent1Id?: SortOrder
    godparent2Id?: SortOrder
    marriageDate?: SortOrder
    parishId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoupleCountOrderByAggregateInput
    _max?: CoupleMaxOrderByAggregateInput
    _min?: CoupleMinOrderByAggregateInput
  }

  export type CoupleScalarWhereWithAggregatesInput = {
    AND?: CoupleScalarWhereWithAggregatesInput | CoupleScalarWhereWithAggregatesInput[]
    OR?: CoupleScalarWhereWithAggregatesInput[]
    NOT?: CoupleScalarWhereWithAggregatesInput | CoupleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Couple"> | string
    member1Id?: StringWithAggregatesFilter<"Couple"> | string
    member2Id?: StringWithAggregatesFilter<"Couple"> | string
    godparent1Id?: StringNullableWithAggregatesFilter<"Couple"> | string | null
    godparent2Id?: StringNullableWithAggregatesFilter<"Couple"> | string | null
    marriageDate?: DateTimeWithAggregatesFilter<"Couple"> | Date | string
    parishId?: StringWithAggregatesFilter<"Couple"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Couple"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Couple"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    name?: StringFilter<"Profile"> | string
    address?: XOR<AddressCompositeFilter, AddressObjectEqualityInput>
    gender?: EnumGenderFilter<"Profile"> | $Enums.Gender
    birthDate?: DateTimeFilter<"Profile"> | Date | string
    phone?: StringFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    photo?: StringNullableFilter<"Profile"> | string | null
    instagram?: StringNullableFilter<"Profile"> | string | null
    facebook?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    coupleAsMember1?: CoupleListRelationFilter
    coupleAsMember2?: CoupleListRelationFilter
    coupleAsGodparent1?: CoupleListRelationFilter
    coupleAsGodparent2?: CoupleListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: AddressOrderByInput
    gender?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    coupleAsMember1?: CoupleOrderByRelationAggregateInput
    coupleAsMember2?: CoupleOrderByRelationAggregateInput
    coupleAsGodparent1?: CoupleOrderByRelationAggregateInput
    coupleAsGodparent2?: CoupleOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    name?: StringFilter<"Profile"> | string
    address?: XOR<AddressCompositeFilter, AddressObjectEqualityInput>
    gender?: EnumGenderFilter<"Profile"> | $Enums.Gender
    birthDate?: DateTimeFilter<"Profile"> | Date | string
    phone?: StringFilter<"Profile"> | string
    photo?: StringNullableFilter<"Profile"> | string | null
    instagram?: StringNullableFilter<"Profile"> | string | null
    facebook?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    coupleAsMember1?: CoupleListRelationFilter
    coupleAsMember2?: CoupleListRelationFilter
    coupleAsGodparent1?: CoupleListRelationFilter
    coupleAsGodparent2?: CoupleListRelationFilter
  }, "id" | "email">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    name?: StringWithAggregatesFilter<"Profile"> | string
    gender?: EnumGenderWithAggregatesFilter<"Profile"> | $Enums.Gender
    birthDate?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    phone?: StringWithAggregatesFilter<"Profile"> | string
    email?: StringWithAggregatesFilter<"Profile"> | string
    photo?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    facebook?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    profileId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    permissions?: PermissionListRelationFilter
    dataAccessLogs?: DataAccessLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    permissions?: PermissionOrderByRelationAggregateInput
    dataAccessLogs?: DataAccessLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    profileId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    permissions?: PermissionListRelationFilter
    dataAccessLogs?: DataAccessLogListRelationFilter
  }, "id" | "email" | "profileId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    profileId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleAssignmentWhereInput = {
    AND?: RoleAssignmentWhereInput | RoleAssignmentWhereInput[]
    OR?: RoleAssignmentWhereInput[]
    NOT?: RoleAssignmentWhereInput | RoleAssignmentWhereInput[]
    id?: StringFilter<"RoleAssignment"> | string
    role?: EnumCoupleRoleFilter<"RoleAssignment"> | $Enums.CoupleRole
    coupleId?: StringFilter<"RoleAssignment"> | string
    archdioceseId?: StringNullableFilter<"RoleAssignment"> | string | null
    parishId?: StringNullableFilter<"RoleAssignment"> | string | null
    createdAt?: DateTimeFilter<"RoleAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"RoleAssignment"> | Date | string
    couple?: XOR<CoupleScalarRelationFilter, CoupleWhereInput>
    archdiocese?: XOR<ArchdioceseNullableScalarRelationFilter, ArchdioceseWhereInput> | null
    parish?: XOR<ParishNullableScalarRelationFilter, ParishWhereInput> | null
  }

  export type RoleAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    coupleId?: SortOrder
    archdioceseId?: SortOrder
    parishId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    couple?: CoupleOrderByWithRelationInput
    archdiocese?: ArchdioceseOrderByWithRelationInput
    parish?: ParishOrderByWithRelationInput
  }

  export type RoleAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    coupleId_archdioceseId_parishId_role?: RoleAssignmentCoupleIdArchdioceseIdParishIdRoleCompoundUniqueInput
    AND?: RoleAssignmentWhereInput | RoleAssignmentWhereInput[]
    OR?: RoleAssignmentWhereInput[]
    NOT?: RoleAssignmentWhereInput | RoleAssignmentWhereInput[]
    role?: EnumCoupleRoleFilter<"RoleAssignment"> | $Enums.CoupleRole
    coupleId?: StringFilter<"RoleAssignment"> | string
    archdioceseId?: StringNullableFilter<"RoleAssignment"> | string | null
    parishId?: StringNullableFilter<"RoleAssignment"> | string | null
    createdAt?: DateTimeFilter<"RoleAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"RoleAssignment"> | Date | string
    couple?: XOR<CoupleScalarRelationFilter, CoupleWhereInput>
    archdiocese?: XOR<ArchdioceseNullableScalarRelationFilter, ArchdioceseWhereInput> | null
    parish?: XOR<ParishNullableScalarRelationFilter, ParishWhereInput> | null
  }, "id" | "coupleId_archdioceseId_parishId_role">

  export type RoleAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    coupleId?: SortOrder
    archdioceseId?: SortOrder
    parishId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleAssignmentCountOrderByAggregateInput
    _max?: RoleAssignmentMaxOrderByAggregateInput
    _min?: RoleAssignmentMinOrderByAggregateInput
  }

  export type RoleAssignmentScalarWhereWithAggregatesInput = {
    AND?: RoleAssignmentScalarWhereWithAggregatesInput | RoleAssignmentScalarWhereWithAggregatesInput[]
    OR?: RoleAssignmentScalarWhereWithAggregatesInput[]
    NOT?: RoleAssignmentScalarWhereWithAggregatesInput | RoleAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoleAssignment"> | string
    role?: EnumCoupleRoleWithAggregatesFilter<"RoleAssignment"> | $Enums.CoupleRole
    coupleId?: StringWithAggregatesFilter<"RoleAssignment"> | string
    archdioceseId?: StringNullableWithAggregatesFilter<"RoleAssignment"> | string | null
    parishId?: StringNullableWithAggregatesFilter<"RoleAssignment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RoleAssignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoleAssignment"> | Date | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: StringFilter<"Permission"> | string
    userId?: StringFilter<"Permission"> | string
    entity?: EnumDataAccessEntityFilter<"Permission"> | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFilter<"Permission"> | $Enums.DataAccessAction
    archdioceseId?: StringNullableFilter<"Permission"> | string | null
    parishId?: StringNullableFilter<"Permission"> | string | null
    coupleId?: StringNullableFilter<"Permission"> | string | null
    resourceId?: StringNullableFilter<"Permission"> | string | null
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    archdiocese?: XOR<ArchdioceseNullableScalarRelationFilter, ArchdioceseWhereInput> | null
    parish?: XOR<ParishNullableScalarRelationFilter, ParishWhereInput> | null
    couple?: XOR<CoupleNullableScalarRelationFilter, CoupleWhereInput> | null
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    entity?: SortOrder
    action?: SortOrder
    archdioceseId?: SortOrder
    parishId?: SortOrder
    coupleId?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    archdiocese?: ArchdioceseOrderByWithRelationInput
    parish?: ParishOrderByWithRelationInput
    couple?: CoupleOrderByWithRelationInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_entity_action_archdioceseId_parishId_coupleId_resourceId?: PermissionUserIdEntityActionArchdioceseIdParishIdCoupleIdResourceIdCompoundUniqueInput
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    userId?: StringFilter<"Permission"> | string
    entity?: EnumDataAccessEntityFilter<"Permission"> | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFilter<"Permission"> | $Enums.DataAccessAction
    archdioceseId?: StringNullableFilter<"Permission"> | string | null
    parishId?: StringNullableFilter<"Permission"> | string | null
    coupleId?: StringNullableFilter<"Permission"> | string | null
    resourceId?: StringNullableFilter<"Permission"> | string | null
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    archdiocese?: XOR<ArchdioceseNullableScalarRelationFilter, ArchdioceseWhereInput> | null
    parish?: XOR<ParishNullableScalarRelationFilter, ParishWhereInput> | null
    couple?: XOR<CoupleNullableScalarRelationFilter, CoupleWhereInput> | null
  }, "id" | "userId_entity_action_archdioceseId_parishId_coupleId_resourceId">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    entity?: SortOrder
    action?: SortOrder
    archdioceseId?: SortOrder
    parishId?: SortOrder
    coupleId?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permission"> | string
    userId?: StringWithAggregatesFilter<"Permission"> | string
    entity?: EnumDataAccessEntityWithAggregatesFilter<"Permission"> | $Enums.DataAccessEntity
    action?: EnumDataAccessActionWithAggregatesFilter<"Permission"> | $Enums.DataAccessAction
    archdioceseId?: StringNullableWithAggregatesFilter<"Permission"> | string | null
    parishId?: StringNullableWithAggregatesFilter<"Permission"> | string | null
    coupleId?: StringNullableWithAggregatesFilter<"Permission"> | string | null
    resourceId?: StringNullableWithAggregatesFilter<"Permission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
  }

  export type DataAccessLogWhereInput = {
    AND?: DataAccessLogWhereInput | DataAccessLogWhereInput[]
    OR?: DataAccessLogWhereInput[]
    NOT?: DataAccessLogWhereInput | DataAccessLogWhereInput[]
    id?: StringFilter<"DataAccessLog"> | string
    entity?: EnumDataAccessEntityFilter<"DataAccessLog"> | $Enums.DataAccessEntity
    entityId?: StringFilter<"DataAccessLog"> | string
    action?: EnumDataAccessActionFilter<"DataAccessLog"> | $Enums.DataAccessAction
    userId?: StringNullableFilter<"DataAccessLog"> | string | null
    ipAddress?: StringNullableFilter<"DataAccessLog"> | string | null
    userAgent?: StringNullableFilter<"DataAccessLog"> | string | null
    success?: BoolFilter<"DataAccessLog"> | boolean
    errorMessage?: StringNullableFilter<"DataAccessLog"> | string | null
    requestData?: JsonNullableFilter<"DataAccessLog">
    responseData?: JsonNullableFilter<"DataAccessLog">
    timestamp?: DateTimeFilter<"DataAccessLog"> | Date | string
    createdAt?: DateTimeFilter<"DataAccessLog"> | Date | string
    updatedAt?: DateTimeFilter<"DataAccessLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type DataAccessLogOrderByWithRelationInput = {
    id?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    requestData?: SortOrder
    responseData?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DataAccessLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DataAccessLogWhereInput | DataAccessLogWhereInput[]
    OR?: DataAccessLogWhereInput[]
    NOT?: DataAccessLogWhereInput | DataAccessLogWhereInput[]
    entity?: EnumDataAccessEntityFilter<"DataAccessLog"> | $Enums.DataAccessEntity
    entityId?: StringFilter<"DataAccessLog"> | string
    action?: EnumDataAccessActionFilter<"DataAccessLog"> | $Enums.DataAccessAction
    userId?: StringNullableFilter<"DataAccessLog"> | string | null
    ipAddress?: StringNullableFilter<"DataAccessLog"> | string | null
    userAgent?: StringNullableFilter<"DataAccessLog"> | string | null
    success?: BoolFilter<"DataAccessLog"> | boolean
    errorMessage?: StringNullableFilter<"DataAccessLog"> | string | null
    requestData?: JsonNullableFilter<"DataAccessLog">
    responseData?: JsonNullableFilter<"DataAccessLog">
    timestamp?: DateTimeFilter<"DataAccessLog"> | Date | string
    createdAt?: DateTimeFilter<"DataAccessLog"> | Date | string
    updatedAt?: DateTimeFilter<"DataAccessLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type DataAccessLogOrderByWithAggregationInput = {
    id?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    requestData?: SortOrder
    responseData?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DataAccessLogCountOrderByAggregateInput
    _max?: DataAccessLogMaxOrderByAggregateInput
    _min?: DataAccessLogMinOrderByAggregateInput
  }

  export type DataAccessLogScalarWhereWithAggregatesInput = {
    AND?: DataAccessLogScalarWhereWithAggregatesInput | DataAccessLogScalarWhereWithAggregatesInput[]
    OR?: DataAccessLogScalarWhereWithAggregatesInput[]
    NOT?: DataAccessLogScalarWhereWithAggregatesInput | DataAccessLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DataAccessLog"> | string
    entity?: EnumDataAccessEntityWithAggregatesFilter<"DataAccessLog"> | $Enums.DataAccessEntity
    entityId?: StringWithAggregatesFilter<"DataAccessLog"> | string
    action?: EnumDataAccessActionWithAggregatesFilter<"DataAccessLog"> | $Enums.DataAccessAction
    userId?: StringNullableWithAggregatesFilter<"DataAccessLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"DataAccessLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"DataAccessLog"> | string | null
    success?: BoolWithAggregatesFilter<"DataAccessLog"> | boolean
    errorMessage?: StringNullableWithAggregatesFilter<"DataAccessLog"> | string | null
    requestData?: JsonNullableWithAggregatesFilter<"DataAccessLog">
    responseData?: JsonNullableWithAggregatesFilter<"DataAccessLog">
    timestamp?: DateTimeWithAggregatesFilter<"DataAccessLog"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"DataAccessLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DataAccessLog"> | Date | string
  }

  export type ArchdioceseCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parishes?: ParishCreateNestedManyWithoutArchdioceseInput
    roles?: RoleAssignmentCreateNestedManyWithoutArchdioceseInput
    permissions?: PermissionCreateNestedManyWithoutArchdioceseInput
  }

  export type ArchdioceseUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parishes?: ParishUncheckedCreateNestedManyWithoutArchdioceseInput
    roles?: RoleAssignmentUncheckedCreateNestedManyWithoutArchdioceseInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutArchdioceseInput
  }

  export type ArchdioceseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parishes?: ParishUpdateManyWithoutArchdioceseNestedInput
    roles?: RoleAssignmentUpdateManyWithoutArchdioceseNestedInput
    permissions?: PermissionUpdateManyWithoutArchdioceseNestedInput
  }

  export type ArchdioceseUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parishes?: ParishUncheckedUpdateManyWithoutArchdioceseNestedInput
    roles?: RoleAssignmentUncheckedUpdateManyWithoutArchdioceseNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutArchdioceseNestedInput
  }

  export type ArchdioceseCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArchdioceseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchdioceseUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParishCreateInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    createdAt?: Date | string
    updatedAt?: Date | string
    archdiocese: ArchdioceseCreateNestedOneWithoutParishesInput
    couples?: CoupleCreateNestedManyWithoutParishInput
    roles?: RoleAssignmentCreateNestedManyWithoutParishInput
    permissions?: PermissionCreateNestedManyWithoutParishInput
  }

  export type ParishUncheckedCreateInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    archdioceseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    couples?: CoupleUncheckedCreateNestedManyWithoutParishInput
    roles?: RoleAssignmentUncheckedCreateNestedManyWithoutParishInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutParishInput
  }

  export type ParishUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archdiocese?: ArchdioceseUpdateOneRequiredWithoutParishesNestedInput
    couples?: CoupleUpdateManyWithoutParishNestedInput
    roles?: RoleAssignmentUpdateManyWithoutParishNestedInput
    permissions?: PermissionUpdateManyWithoutParishNestedInput
  }

  export type ParishUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    archdioceseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couples?: CoupleUncheckedUpdateManyWithoutParishNestedInput
    roles?: RoleAssignmentUncheckedUpdateManyWithoutParishNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutParishNestedInput
  }

  export type ParishCreateManyInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    archdioceseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParishUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParishUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    archdioceseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupleCreateInput = {
    id?: string
    marriageDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    member1: ProfileCreateNestedOneWithoutCoupleAsMember1Input
    member2: ProfileCreateNestedOneWithoutCoupleAsMember2Input
    godparent1?: ProfileCreateNestedOneWithoutCoupleAsGodparent1Input
    godparent2?: ProfileCreateNestedOneWithoutCoupleAsGodparent2Input
    parish: ParishCreateNestedOneWithoutCouplesInput
    roles?: RoleAssignmentCreateNestedManyWithoutCoupleInput
    permissions?: PermissionCreateNestedManyWithoutCoupleInput
  }

  export type CoupleUncheckedCreateInput = {
    id?: string
    member1Id: string
    member2Id: string
    godparent1Id?: string | null
    godparent2Id?: string | null
    marriageDate: Date | string
    parishId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleAssignmentUncheckedCreateNestedManyWithoutCoupleInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutCoupleInput
  }

  export type CoupleUpdateInput = {
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member1?: ProfileUpdateOneRequiredWithoutCoupleAsMember1NestedInput
    member2?: ProfileUpdateOneRequiredWithoutCoupleAsMember2NestedInput
    godparent1?: ProfileUpdateOneWithoutCoupleAsGodparent1NestedInput
    godparent2?: ProfileUpdateOneWithoutCoupleAsGodparent2NestedInput
    parish?: ParishUpdateOneRequiredWithoutCouplesNestedInput
    roles?: RoleAssignmentUpdateManyWithoutCoupleNestedInput
    permissions?: PermissionUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleUncheckedUpdateInput = {
    member1Id?: StringFieldUpdateOperationsInput | string
    member2Id?: StringFieldUpdateOperationsInput | string
    godparent1Id?: NullableStringFieldUpdateOperationsInput | string | null
    godparent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    parishId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleAssignmentUncheckedUpdateManyWithoutCoupleNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleCreateManyInput = {
    id?: string
    member1Id: string
    member2Id: string
    godparent1Id?: string | null
    godparent2Id?: string | null
    marriageDate: Date | string
    parishId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoupleUpdateManyMutationInput = {
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupleUncheckedUpdateManyInput = {
    member1Id?: StringFieldUpdateOperationsInput | string
    member2Id?: StringFieldUpdateOperationsInput | string
    godparent1Id?: NullableStringFieldUpdateOperationsInput | string | null
    godparent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    parishId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    gender: $Enums.Gender
    birthDate: Date | string
    phone: string
    email: string
    photo?: string | null
    instagram?: string | null
    facebook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProfileInput
    coupleAsMember1?: CoupleCreateNestedManyWithoutMember1Input
    coupleAsMember2?: CoupleCreateNestedManyWithoutMember2Input
    coupleAsGodparent1?: CoupleCreateNestedManyWithoutGodparent1Input
    coupleAsGodparent2?: CoupleCreateNestedManyWithoutGodparent2Input
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    gender: $Enums.Gender
    birthDate: Date | string
    phone: string
    email: string
    photo?: string | null
    instagram?: string | null
    facebook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutProfileInput
    coupleAsMember1?: CoupleUncheckedCreateNestedManyWithoutMember1Input
    coupleAsMember2?: CoupleUncheckedCreateNestedManyWithoutMember2Input
    coupleAsGodparent1?: CoupleUncheckedCreateNestedManyWithoutGodparent1Input
    coupleAsGodparent2?: CoupleUncheckedCreateNestedManyWithoutGodparent2Input
  }

  export type ProfileUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProfileNestedInput
    coupleAsMember1?: CoupleUpdateManyWithoutMember1NestedInput
    coupleAsMember2?: CoupleUpdateManyWithoutMember2NestedInput
    coupleAsGodparent1?: CoupleUpdateManyWithoutGodparent1NestedInput
    coupleAsGodparent2?: CoupleUpdateManyWithoutGodparent2NestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutProfileNestedInput
    coupleAsMember1?: CoupleUncheckedUpdateManyWithoutMember1NestedInput
    coupleAsMember2?: CoupleUncheckedUpdateManyWithoutMember2NestedInput
    coupleAsGodparent1?: CoupleUncheckedUpdateManyWithoutGodparent1NestedInput
    coupleAsGodparent2?: CoupleUncheckedUpdateManyWithoutGodparent2NestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    gender: $Enums.Gender
    birthDate: Date | string
    phone: string
    email: string
    photo?: string | null
    instagram?: string | null
    facebook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutUserInput
    permissions?: PermissionCreateNestedManyWithoutUserInput
    dataAccessLogs?: DataAccessLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: PermissionUncheckedCreateNestedManyWithoutUserInput
    dataAccessLogs?: DataAccessLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutUserNestedInput
    permissions?: PermissionUpdateManyWithoutUserNestedInput
    dataAccessLogs?: DataAccessLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUncheckedUpdateManyWithoutUserNestedInput
    dataAccessLogs?: DataAccessLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleAssignmentCreateInput = {
    id?: string
    role: $Enums.CoupleRole
    createdAt?: Date | string
    updatedAt?: Date | string
    couple: CoupleCreateNestedOneWithoutRolesInput
    archdiocese?: ArchdioceseCreateNestedOneWithoutRolesInput
    parish?: ParishCreateNestedOneWithoutRolesInput
  }

  export type RoleAssignmentUncheckedCreateInput = {
    id?: string
    role: $Enums.CoupleRole
    coupleId: string
    archdioceseId?: string | null
    parishId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleAssignmentUpdateInput = {
    role?: EnumCoupleRoleFieldUpdateOperationsInput | $Enums.CoupleRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couple?: CoupleUpdateOneRequiredWithoutRolesNestedInput
    archdiocese?: ArchdioceseUpdateOneWithoutRolesNestedInput
    parish?: ParishUpdateOneWithoutRolesNestedInput
  }

  export type RoleAssignmentUncheckedUpdateInput = {
    role?: EnumCoupleRoleFieldUpdateOperationsInput | $Enums.CoupleRole
    coupleId?: StringFieldUpdateOperationsInput | string
    archdioceseId?: NullableStringFieldUpdateOperationsInput | string | null
    parishId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleAssignmentCreateManyInput = {
    id?: string
    role: $Enums.CoupleRole
    coupleId: string
    archdioceseId?: string | null
    parishId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleAssignmentUpdateManyMutationInput = {
    role?: EnumCoupleRoleFieldUpdateOperationsInput | $Enums.CoupleRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleAssignmentUncheckedUpdateManyInput = {
    role?: EnumCoupleRoleFieldUpdateOperationsInput | $Enums.CoupleRole
    coupleId?: StringFieldUpdateOperationsInput | string
    archdioceseId?: NullableStringFieldUpdateOperationsInput | string | null
    parishId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    id?: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPermissionsInput
    archdiocese?: ArchdioceseCreateNestedOneWithoutPermissionsInput
    parish?: ParishCreateNestedOneWithoutPermissionsInput
    couple?: CoupleCreateNestedOneWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: string
    userId: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    archdioceseId?: string | null
    parishId?: string | null
    coupleId?: string | null
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUpdateInput = {
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPermissionsNestedInput
    archdiocese?: ArchdioceseUpdateOneWithoutPermissionsNestedInput
    parish?: ParishUpdateOneWithoutPermissionsNestedInput
    couple?: CoupleUpdateOneWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    archdioceseId?: NullableStringFieldUpdateOperationsInput | string | null
    parishId?: NullableStringFieldUpdateOperationsInput | string | null
    coupleId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateManyInput = {
    id?: string
    userId: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    archdioceseId?: string | null
    parishId?: string | null
    coupleId?: string | null
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUpdateManyMutationInput = {
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    archdioceseId?: NullableStringFieldUpdateOperationsInput | string | null
    parishId?: NullableStringFieldUpdateOperationsInput | string | null
    coupleId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataAccessLogCreateInput = {
    id?: string
    entity: $Enums.DataAccessEntity
    entityId: string
    action: $Enums.DataAccessAction
    ipAddress?: string | null
    userAgent?: string | null
    success?: boolean
    errorMessage?: string | null
    requestData?: InputJsonValue | null
    responseData?: InputJsonValue | null
    timestamp?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutDataAccessLogsInput
  }

  export type DataAccessLogUncheckedCreateInput = {
    id?: string
    entity: $Enums.DataAccessEntity
    entityId: string
    action: $Enums.DataAccessAction
    userId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    success?: boolean
    errorMessage?: string | null
    requestData?: InputJsonValue | null
    responseData?: InputJsonValue | null
    timestamp?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataAccessLogUpdateInput = {
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    requestData?: InputJsonValue | InputJsonValue | null
    responseData?: InputJsonValue | InputJsonValue | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutDataAccessLogsNestedInput
  }

  export type DataAccessLogUncheckedUpdateInput = {
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    requestData?: InputJsonValue | InputJsonValue | null
    responseData?: InputJsonValue | InputJsonValue | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataAccessLogCreateManyInput = {
    id?: string
    entity: $Enums.DataAccessEntity
    entityId: string
    action: $Enums.DataAccessAction
    userId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    success?: boolean
    errorMessage?: string | null
    requestData?: InputJsonValue | null
    responseData?: InputJsonValue | null
    timestamp?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataAccessLogUpdateManyMutationInput = {
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    requestData?: InputJsonValue | InputJsonValue | null
    responseData?: InputJsonValue | InputJsonValue | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataAccessLogUncheckedUpdateManyInput = {
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    requestData?: InputJsonValue | InputJsonValue | null
    responseData?: InputJsonValue | InputJsonValue | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ParishListRelationFilter = {
    every?: ParishWhereInput
    some?: ParishWhereInput
    none?: ParishWhereInput
  }

  export type RoleAssignmentListRelationFilter = {
    every?: RoleAssignmentWhereInput
    some?: RoleAssignmentWhereInput
    none?: RoleAssignmentWhereInput
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type ParishOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArchdioceseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArchdioceseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArchdioceseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AddressCompositeFilter = {
    equals?: AddressObjectEqualityInput
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type AddressObjectEqualityInput = {
    postalCode: string
    street: string
    number: string
    complement?: string | null
    neighborhood: string
    city: string
    state: string
    country: string
  }

  export type ArchdioceseScalarRelationFilter = {
    is?: ArchdioceseWhereInput
    isNot?: ArchdioceseWhereInput
  }

  export type CoupleListRelationFilter = {
    every?: CoupleWhereInput
    some?: CoupleWhereInput
    none?: CoupleWhereInput
  }

  export type AddressOrderByInput = {
    postalCode?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
  }

  export type CoupleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParishNameArchdioceseIdCompoundUniqueInput = {
    name: string
    archdioceseId: string
  }

  export type ParishCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    archdioceseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParishMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    archdioceseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParishMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    archdioceseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type ParishScalarRelationFilter = {
    is?: ParishWhereInput
    isNot?: ParishWhereInput
  }

  export type CoupleMember1IdMember2IdCompoundUniqueInput = {
    member1Id: string
    member2Id: string
  }

  export type CoupleCountOrderByAggregateInput = {
    id?: SortOrder
    member1Id?: SortOrder
    member2Id?: SortOrder
    godparent1Id?: SortOrder
    godparent2Id?: SortOrder
    marriageDate?: SortOrder
    parishId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoupleMaxOrderByAggregateInput = {
    id?: SortOrder
    member1Id?: SortOrder
    member2Id?: SortOrder
    godparent1Id?: SortOrder
    godparent2Id?: SortOrder
    marriageDate?: SortOrder
    parishId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoupleMinOrderByAggregateInput = {
    id?: SortOrder
    member1Id?: SortOrder
    member2Id?: SortOrder
    godparent1Id?: SortOrder
    godparent2Id?: SortOrder
    marriageDate?: SortOrder
    parishId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DataAccessLogListRelationFilter = {
    every?: DataAccessLogWhereInput
    some?: DataAccessLogWhereInput
    none?: DataAccessLogWhereInput
  }

  export type DataAccessLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumCoupleRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CoupleRole | EnumCoupleRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CoupleRole[] | ListEnumCoupleRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoupleRole[] | ListEnumCoupleRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCoupleRoleFilter<$PrismaModel> | $Enums.CoupleRole
  }

  export type CoupleScalarRelationFilter = {
    is?: CoupleWhereInput
    isNot?: CoupleWhereInput
  }

  export type ArchdioceseNullableScalarRelationFilter = {
    is?: ArchdioceseWhereInput | null
    isNot?: ArchdioceseWhereInput | null
  }

  export type ParishNullableScalarRelationFilter = {
    is?: ParishWhereInput | null
    isNot?: ParishWhereInput | null
  }

  export type RoleAssignmentCoupleIdArchdioceseIdParishIdRoleCompoundUniqueInput = {
    coupleId: string
    archdioceseId: string
    parishId: string
    role: $Enums.CoupleRole
  }

  export type RoleAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    coupleId?: SortOrder
    archdioceseId?: SortOrder
    parishId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    coupleId?: SortOrder
    archdioceseId?: SortOrder
    parishId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    coupleId?: SortOrder
    archdioceseId?: SortOrder
    parishId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCoupleRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoupleRole | EnumCoupleRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CoupleRole[] | ListEnumCoupleRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoupleRole[] | ListEnumCoupleRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCoupleRoleWithAggregatesFilter<$PrismaModel> | $Enums.CoupleRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoupleRoleFilter<$PrismaModel>
    _max?: NestedEnumCoupleRoleFilter<$PrismaModel>
  }

  export type EnumDataAccessEntityFilter<$PrismaModel = never> = {
    equals?: $Enums.DataAccessEntity | EnumDataAccessEntityFieldRefInput<$PrismaModel>
    in?: $Enums.DataAccessEntity[] | ListEnumDataAccessEntityFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataAccessEntity[] | ListEnumDataAccessEntityFieldRefInput<$PrismaModel>
    not?: NestedEnumDataAccessEntityFilter<$PrismaModel> | $Enums.DataAccessEntity
  }

  export type EnumDataAccessActionFilter<$PrismaModel = never> = {
    equals?: $Enums.DataAccessAction | EnumDataAccessActionFieldRefInput<$PrismaModel>
    in?: $Enums.DataAccessAction[] | ListEnumDataAccessActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataAccessAction[] | ListEnumDataAccessActionFieldRefInput<$PrismaModel>
    not?: NestedEnumDataAccessActionFilter<$PrismaModel> | $Enums.DataAccessAction
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CoupleNullableScalarRelationFilter = {
    is?: CoupleWhereInput | null
    isNot?: CoupleWhereInput | null
  }

  export type PermissionUserIdEntityActionArchdioceseIdParishIdCoupleIdResourceIdCompoundUniqueInput = {
    userId: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    archdioceseId: string
    parishId: string
    coupleId: string
    resourceId: string
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entity?: SortOrder
    action?: SortOrder
    archdioceseId?: SortOrder
    parishId?: SortOrder
    coupleId?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entity?: SortOrder
    action?: SortOrder
    archdioceseId?: SortOrder
    parishId?: SortOrder
    coupleId?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entity?: SortOrder
    action?: SortOrder
    archdioceseId?: SortOrder
    parishId?: SortOrder
    coupleId?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDataAccessEntityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DataAccessEntity | EnumDataAccessEntityFieldRefInput<$PrismaModel>
    in?: $Enums.DataAccessEntity[] | ListEnumDataAccessEntityFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataAccessEntity[] | ListEnumDataAccessEntityFieldRefInput<$PrismaModel>
    not?: NestedEnumDataAccessEntityWithAggregatesFilter<$PrismaModel> | $Enums.DataAccessEntity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDataAccessEntityFilter<$PrismaModel>
    _max?: NestedEnumDataAccessEntityFilter<$PrismaModel>
  }

  export type EnumDataAccessActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DataAccessAction | EnumDataAccessActionFieldRefInput<$PrismaModel>
    in?: $Enums.DataAccessAction[] | ListEnumDataAccessActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataAccessAction[] | ListEnumDataAccessActionFieldRefInput<$PrismaModel>
    not?: NestedEnumDataAccessActionWithAggregatesFilter<$PrismaModel> | $Enums.DataAccessAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDataAccessActionFilter<$PrismaModel>
    _max?: NestedEnumDataAccessActionFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type DataAccessLogCountOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    requestData?: SortOrder
    responseData?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataAccessLogMaxOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataAccessLogMinOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ParishCreateNestedManyWithoutArchdioceseInput = {
    create?: XOR<ParishCreateWithoutArchdioceseInput, ParishUncheckedCreateWithoutArchdioceseInput> | ParishCreateWithoutArchdioceseInput[] | ParishUncheckedCreateWithoutArchdioceseInput[]
    connectOrCreate?: ParishCreateOrConnectWithoutArchdioceseInput | ParishCreateOrConnectWithoutArchdioceseInput[]
    createMany?: ParishCreateManyArchdioceseInputEnvelope
    connect?: ParishWhereUniqueInput | ParishWhereUniqueInput[]
  }

  export type RoleAssignmentCreateNestedManyWithoutArchdioceseInput = {
    create?: XOR<RoleAssignmentCreateWithoutArchdioceseInput, RoleAssignmentUncheckedCreateWithoutArchdioceseInput> | RoleAssignmentCreateWithoutArchdioceseInput[] | RoleAssignmentUncheckedCreateWithoutArchdioceseInput[]
    connectOrCreate?: RoleAssignmentCreateOrConnectWithoutArchdioceseInput | RoleAssignmentCreateOrConnectWithoutArchdioceseInput[]
    createMany?: RoleAssignmentCreateManyArchdioceseInputEnvelope
    connect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
  }

  export type PermissionCreateNestedManyWithoutArchdioceseInput = {
    create?: XOR<PermissionCreateWithoutArchdioceseInput, PermissionUncheckedCreateWithoutArchdioceseInput> | PermissionCreateWithoutArchdioceseInput[] | PermissionUncheckedCreateWithoutArchdioceseInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutArchdioceseInput | PermissionCreateOrConnectWithoutArchdioceseInput[]
    createMany?: PermissionCreateManyArchdioceseInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type ParishUncheckedCreateNestedManyWithoutArchdioceseInput = {
    create?: XOR<ParishCreateWithoutArchdioceseInput, ParishUncheckedCreateWithoutArchdioceseInput> | ParishCreateWithoutArchdioceseInput[] | ParishUncheckedCreateWithoutArchdioceseInput[]
    connectOrCreate?: ParishCreateOrConnectWithoutArchdioceseInput | ParishCreateOrConnectWithoutArchdioceseInput[]
    createMany?: ParishCreateManyArchdioceseInputEnvelope
    connect?: ParishWhereUniqueInput | ParishWhereUniqueInput[]
  }

  export type RoleAssignmentUncheckedCreateNestedManyWithoutArchdioceseInput = {
    create?: XOR<RoleAssignmentCreateWithoutArchdioceseInput, RoleAssignmentUncheckedCreateWithoutArchdioceseInput> | RoleAssignmentCreateWithoutArchdioceseInput[] | RoleAssignmentUncheckedCreateWithoutArchdioceseInput[]
    connectOrCreate?: RoleAssignmentCreateOrConnectWithoutArchdioceseInput | RoleAssignmentCreateOrConnectWithoutArchdioceseInput[]
    createMany?: RoleAssignmentCreateManyArchdioceseInputEnvelope
    connect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutArchdioceseInput = {
    create?: XOR<PermissionCreateWithoutArchdioceseInput, PermissionUncheckedCreateWithoutArchdioceseInput> | PermissionCreateWithoutArchdioceseInput[] | PermissionUncheckedCreateWithoutArchdioceseInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutArchdioceseInput | PermissionCreateOrConnectWithoutArchdioceseInput[]
    createMany?: PermissionCreateManyArchdioceseInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParishUpdateManyWithoutArchdioceseNestedInput = {
    create?: XOR<ParishCreateWithoutArchdioceseInput, ParishUncheckedCreateWithoutArchdioceseInput> | ParishCreateWithoutArchdioceseInput[] | ParishUncheckedCreateWithoutArchdioceseInput[]
    connectOrCreate?: ParishCreateOrConnectWithoutArchdioceseInput | ParishCreateOrConnectWithoutArchdioceseInput[]
    upsert?: ParishUpsertWithWhereUniqueWithoutArchdioceseInput | ParishUpsertWithWhereUniqueWithoutArchdioceseInput[]
    createMany?: ParishCreateManyArchdioceseInputEnvelope
    set?: ParishWhereUniqueInput | ParishWhereUniqueInput[]
    disconnect?: ParishWhereUniqueInput | ParishWhereUniqueInput[]
    delete?: ParishWhereUniqueInput | ParishWhereUniqueInput[]
    connect?: ParishWhereUniqueInput | ParishWhereUniqueInput[]
    update?: ParishUpdateWithWhereUniqueWithoutArchdioceseInput | ParishUpdateWithWhereUniqueWithoutArchdioceseInput[]
    updateMany?: ParishUpdateManyWithWhereWithoutArchdioceseInput | ParishUpdateManyWithWhereWithoutArchdioceseInput[]
    deleteMany?: ParishScalarWhereInput | ParishScalarWhereInput[]
  }

  export type RoleAssignmentUpdateManyWithoutArchdioceseNestedInput = {
    create?: XOR<RoleAssignmentCreateWithoutArchdioceseInput, RoleAssignmentUncheckedCreateWithoutArchdioceseInput> | RoleAssignmentCreateWithoutArchdioceseInput[] | RoleAssignmentUncheckedCreateWithoutArchdioceseInput[]
    connectOrCreate?: RoleAssignmentCreateOrConnectWithoutArchdioceseInput | RoleAssignmentCreateOrConnectWithoutArchdioceseInput[]
    upsert?: RoleAssignmentUpsertWithWhereUniqueWithoutArchdioceseInput | RoleAssignmentUpsertWithWhereUniqueWithoutArchdioceseInput[]
    createMany?: RoleAssignmentCreateManyArchdioceseInputEnvelope
    set?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    disconnect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    delete?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    connect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    update?: RoleAssignmentUpdateWithWhereUniqueWithoutArchdioceseInput | RoleAssignmentUpdateWithWhereUniqueWithoutArchdioceseInput[]
    updateMany?: RoleAssignmentUpdateManyWithWhereWithoutArchdioceseInput | RoleAssignmentUpdateManyWithWhereWithoutArchdioceseInput[]
    deleteMany?: RoleAssignmentScalarWhereInput | RoleAssignmentScalarWhereInput[]
  }

  export type PermissionUpdateManyWithoutArchdioceseNestedInput = {
    create?: XOR<PermissionCreateWithoutArchdioceseInput, PermissionUncheckedCreateWithoutArchdioceseInput> | PermissionCreateWithoutArchdioceseInput[] | PermissionUncheckedCreateWithoutArchdioceseInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutArchdioceseInput | PermissionCreateOrConnectWithoutArchdioceseInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutArchdioceseInput | PermissionUpsertWithWhereUniqueWithoutArchdioceseInput[]
    createMany?: PermissionCreateManyArchdioceseInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutArchdioceseInput | PermissionUpdateWithWhereUniqueWithoutArchdioceseInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutArchdioceseInput | PermissionUpdateManyWithWhereWithoutArchdioceseInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type ParishUncheckedUpdateManyWithoutArchdioceseNestedInput = {
    create?: XOR<ParishCreateWithoutArchdioceseInput, ParishUncheckedCreateWithoutArchdioceseInput> | ParishCreateWithoutArchdioceseInput[] | ParishUncheckedCreateWithoutArchdioceseInput[]
    connectOrCreate?: ParishCreateOrConnectWithoutArchdioceseInput | ParishCreateOrConnectWithoutArchdioceseInput[]
    upsert?: ParishUpsertWithWhereUniqueWithoutArchdioceseInput | ParishUpsertWithWhereUniqueWithoutArchdioceseInput[]
    createMany?: ParishCreateManyArchdioceseInputEnvelope
    set?: ParishWhereUniqueInput | ParishWhereUniqueInput[]
    disconnect?: ParishWhereUniqueInput | ParishWhereUniqueInput[]
    delete?: ParishWhereUniqueInput | ParishWhereUniqueInput[]
    connect?: ParishWhereUniqueInput | ParishWhereUniqueInput[]
    update?: ParishUpdateWithWhereUniqueWithoutArchdioceseInput | ParishUpdateWithWhereUniqueWithoutArchdioceseInput[]
    updateMany?: ParishUpdateManyWithWhereWithoutArchdioceseInput | ParishUpdateManyWithWhereWithoutArchdioceseInput[]
    deleteMany?: ParishScalarWhereInput | ParishScalarWhereInput[]
  }

  export type RoleAssignmentUncheckedUpdateManyWithoutArchdioceseNestedInput = {
    create?: XOR<RoleAssignmentCreateWithoutArchdioceseInput, RoleAssignmentUncheckedCreateWithoutArchdioceseInput> | RoleAssignmentCreateWithoutArchdioceseInput[] | RoleAssignmentUncheckedCreateWithoutArchdioceseInput[]
    connectOrCreate?: RoleAssignmentCreateOrConnectWithoutArchdioceseInput | RoleAssignmentCreateOrConnectWithoutArchdioceseInput[]
    upsert?: RoleAssignmentUpsertWithWhereUniqueWithoutArchdioceseInput | RoleAssignmentUpsertWithWhereUniqueWithoutArchdioceseInput[]
    createMany?: RoleAssignmentCreateManyArchdioceseInputEnvelope
    set?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    disconnect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    delete?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    connect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    update?: RoleAssignmentUpdateWithWhereUniqueWithoutArchdioceseInput | RoleAssignmentUpdateWithWhereUniqueWithoutArchdioceseInput[]
    updateMany?: RoleAssignmentUpdateManyWithWhereWithoutArchdioceseInput | RoleAssignmentUpdateManyWithWhereWithoutArchdioceseInput[]
    deleteMany?: RoleAssignmentScalarWhereInput | RoleAssignmentScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutArchdioceseNestedInput = {
    create?: XOR<PermissionCreateWithoutArchdioceseInput, PermissionUncheckedCreateWithoutArchdioceseInput> | PermissionCreateWithoutArchdioceseInput[] | PermissionUncheckedCreateWithoutArchdioceseInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutArchdioceseInput | PermissionCreateOrConnectWithoutArchdioceseInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutArchdioceseInput | PermissionUpsertWithWhereUniqueWithoutArchdioceseInput[]
    createMany?: PermissionCreateManyArchdioceseInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutArchdioceseInput | PermissionUpdateWithWhereUniqueWithoutArchdioceseInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutArchdioceseInput | PermissionUpdateManyWithWhereWithoutArchdioceseInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type AddressCreateEnvelopeInput = {
    set?: AddressCreateInput
  }

  export type AddressCreateInput = {
    postalCode: string
    street: string
    number: string
    complement?: string | null
    neighborhood: string
    city: string
    state: string
    country: string
  }

  export type ArchdioceseCreateNestedOneWithoutParishesInput = {
    create?: XOR<ArchdioceseCreateWithoutParishesInput, ArchdioceseUncheckedCreateWithoutParishesInput>
    connectOrCreate?: ArchdioceseCreateOrConnectWithoutParishesInput
    connect?: ArchdioceseWhereUniqueInput
  }

  export type CoupleCreateNestedManyWithoutParishInput = {
    create?: XOR<CoupleCreateWithoutParishInput, CoupleUncheckedCreateWithoutParishInput> | CoupleCreateWithoutParishInput[] | CoupleUncheckedCreateWithoutParishInput[]
    connectOrCreate?: CoupleCreateOrConnectWithoutParishInput | CoupleCreateOrConnectWithoutParishInput[]
    createMany?: CoupleCreateManyParishInputEnvelope
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
  }

  export type RoleAssignmentCreateNestedManyWithoutParishInput = {
    create?: XOR<RoleAssignmentCreateWithoutParishInput, RoleAssignmentUncheckedCreateWithoutParishInput> | RoleAssignmentCreateWithoutParishInput[] | RoleAssignmentUncheckedCreateWithoutParishInput[]
    connectOrCreate?: RoleAssignmentCreateOrConnectWithoutParishInput | RoleAssignmentCreateOrConnectWithoutParishInput[]
    createMany?: RoleAssignmentCreateManyParishInputEnvelope
    connect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
  }

  export type PermissionCreateNestedManyWithoutParishInput = {
    create?: XOR<PermissionCreateWithoutParishInput, PermissionUncheckedCreateWithoutParishInput> | PermissionCreateWithoutParishInput[] | PermissionUncheckedCreateWithoutParishInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutParishInput | PermissionCreateOrConnectWithoutParishInput[]
    createMany?: PermissionCreateManyParishInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type CoupleUncheckedCreateNestedManyWithoutParishInput = {
    create?: XOR<CoupleCreateWithoutParishInput, CoupleUncheckedCreateWithoutParishInput> | CoupleCreateWithoutParishInput[] | CoupleUncheckedCreateWithoutParishInput[]
    connectOrCreate?: CoupleCreateOrConnectWithoutParishInput | CoupleCreateOrConnectWithoutParishInput[]
    createMany?: CoupleCreateManyParishInputEnvelope
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
  }

  export type RoleAssignmentUncheckedCreateNestedManyWithoutParishInput = {
    create?: XOR<RoleAssignmentCreateWithoutParishInput, RoleAssignmentUncheckedCreateWithoutParishInput> | RoleAssignmentCreateWithoutParishInput[] | RoleAssignmentUncheckedCreateWithoutParishInput[]
    connectOrCreate?: RoleAssignmentCreateOrConnectWithoutParishInput | RoleAssignmentCreateOrConnectWithoutParishInput[]
    createMany?: RoleAssignmentCreateManyParishInputEnvelope
    connect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutParishInput = {
    create?: XOR<PermissionCreateWithoutParishInput, PermissionUncheckedCreateWithoutParishInput> | PermissionCreateWithoutParishInput[] | PermissionUncheckedCreateWithoutParishInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutParishInput | PermissionCreateOrConnectWithoutParishInput[]
    createMany?: PermissionCreateManyParishInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type AddressUpdateEnvelopeInput = {
    set?: AddressCreateInput
    update?: AddressUpdateInput
  }

  export type ArchdioceseUpdateOneRequiredWithoutParishesNestedInput = {
    create?: XOR<ArchdioceseCreateWithoutParishesInput, ArchdioceseUncheckedCreateWithoutParishesInput>
    connectOrCreate?: ArchdioceseCreateOrConnectWithoutParishesInput
    upsert?: ArchdioceseUpsertWithoutParishesInput
    connect?: ArchdioceseWhereUniqueInput
    update?: XOR<XOR<ArchdioceseUpdateToOneWithWhereWithoutParishesInput, ArchdioceseUpdateWithoutParishesInput>, ArchdioceseUncheckedUpdateWithoutParishesInput>
  }

  export type CoupleUpdateManyWithoutParishNestedInput = {
    create?: XOR<CoupleCreateWithoutParishInput, CoupleUncheckedCreateWithoutParishInput> | CoupleCreateWithoutParishInput[] | CoupleUncheckedCreateWithoutParishInput[]
    connectOrCreate?: CoupleCreateOrConnectWithoutParishInput | CoupleCreateOrConnectWithoutParishInput[]
    upsert?: CoupleUpsertWithWhereUniqueWithoutParishInput | CoupleUpsertWithWhereUniqueWithoutParishInput[]
    createMany?: CoupleCreateManyParishInputEnvelope
    set?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    disconnect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    delete?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    update?: CoupleUpdateWithWhereUniqueWithoutParishInput | CoupleUpdateWithWhereUniqueWithoutParishInput[]
    updateMany?: CoupleUpdateManyWithWhereWithoutParishInput | CoupleUpdateManyWithWhereWithoutParishInput[]
    deleteMany?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
  }

  export type RoleAssignmentUpdateManyWithoutParishNestedInput = {
    create?: XOR<RoleAssignmentCreateWithoutParishInput, RoleAssignmentUncheckedCreateWithoutParishInput> | RoleAssignmentCreateWithoutParishInput[] | RoleAssignmentUncheckedCreateWithoutParishInput[]
    connectOrCreate?: RoleAssignmentCreateOrConnectWithoutParishInput | RoleAssignmentCreateOrConnectWithoutParishInput[]
    upsert?: RoleAssignmentUpsertWithWhereUniqueWithoutParishInput | RoleAssignmentUpsertWithWhereUniqueWithoutParishInput[]
    createMany?: RoleAssignmentCreateManyParishInputEnvelope
    set?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    disconnect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    delete?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    connect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    update?: RoleAssignmentUpdateWithWhereUniqueWithoutParishInput | RoleAssignmentUpdateWithWhereUniqueWithoutParishInput[]
    updateMany?: RoleAssignmentUpdateManyWithWhereWithoutParishInput | RoleAssignmentUpdateManyWithWhereWithoutParishInput[]
    deleteMany?: RoleAssignmentScalarWhereInput | RoleAssignmentScalarWhereInput[]
  }

  export type PermissionUpdateManyWithoutParishNestedInput = {
    create?: XOR<PermissionCreateWithoutParishInput, PermissionUncheckedCreateWithoutParishInput> | PermissionCreateWithoutParishInput[] | PermissionUncheckedCreateWithoutParishInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutParishInput | PermissionCreateOrConnectWithoutParishInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutParishInput | PermissionUpsertWithWhereUniqueWithoutParishInput[]
    createMany?: PermissionCreateManyParishInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutParishInput | PermissionUpdateWithWhereUniqueWithoutParishInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutParishInput | PermissionUpdateManyWithWhereWithoutParishInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type CoupleUncheckedUpdateManyWithoutParishNestedInput = {
    create?: XOR<CoupleCreateWithoutParishInput, CoupleUncheckedCreateWithoutParishInput> | CoupleCreateWithoutParishInput[] | CoupleUncheckedCreateWithoutParishInput[]
    connectOrCreate?: CoupleCreateOrConnectWithoutParishInput | CoupleCreateOrConnectWithoutParishInput[]
    upsert?: CoupleUpsertWithWhereUniqueWithoutParishInput | CoupleUpsertWithWhereUniqueWithoutParishInput[]
    createMany?: CoupleCreateManyParishInputEnvelope
    set?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    disconnect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    delete?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    update?: CoupleUpdateWithWhereUniqueWithoutParishInput | CoupleUpdateWithWhereUniqueWithoutParishInput[]
    updateMany?: CoupleUpdateManyWithWhereWithoutParishInput | CoupleUpdateManyWithWhereWithoutParishInput[]
    deleteMany?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
  }

  export type RoleAssignmentUncheckedUpdateManyWithoutParishNestedInput = {
    create?: XOR<RoleAssignmentCreateWithoutParishInput, RoleAssignmentUncheckedCreateWithoutParishInput> | RoleAssignmentCreateWithoutParishInput[] | RoleAssignmentUncheckedCreateWithoutParishInput[]
    connectOrCreate?: RoleAssignmentCreateOrConnectWithoutParishInput | RoleAssignmentCreateOrConnectWithoutParishInput[]
    upsert?: RoleAssignmentUpsertWithWhereUniqueWithoutParishInput | RoleAssignmentUpsertWithWhereUniqueWithoutParishInput[]
    createMany?: RoleAssignmentCreateManyParishInputEnvelope
    set?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    disconnect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    delete?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    connect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    update?: RoleAssignmentUpdateWithWhereUniqueWithoutParishInput | RoleAssignmentUpdateWithWhereUniqueWithoutParishInput[]
    updateMany?: RoleAssignmentUpdateManyWithWhereWithoutParishInput | RoleAssignmentUpdateManyWithWhereWithoutParishInput[]
    deleteMany?: RoleAssignmentScalarWhereInput | RoleAssignmentScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutParishNestedInput = {
    create?: XOR<PermissionCreateWithoutParishInput, PermissionUncheckedCreateWithoutParishInput> | PermissionCreateWithoutParishInput[] | PermissionUncheckedCreateWithoutParishInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutParishInput | PermissionCreateOrConnectWithoutParishInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutParishInput | PermissionUpsertWithWhereUniqueWithoutParishInput[]
    createMany?: PermissionCreateManyParishInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutParishInput | PermissionUpdateWithWhereUniqueWithoutParishInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutParishInput | PermissionUpdateManyWithWhereWithoutParishInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutCoupleAsMember1Input = {
    create?: XOR<ProfileCreateWithoutCoupleAsMember1Input, ProfileUncheckedCreateWithoutCoupleAsMember1Input>
    connectOrCreate?: ProfileCreateOrConnectWithoutCoupleAsMember1Input
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutCoupleAsMember2Input = {
    create?: XOR<ProfileCreateWithoutCoupleAsMember2Input, ProfileUncheckedCreateWithoutCoupleAsMember2Input>
    connectOrCreate?: ProfileCreateOrConnectWithoutCoupleAsMember2Input
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutCoupleAsGodparent1Input = {
    create?: XOR<ProfileCreateWithoutCoupleAsGodparent1Input, ProfileUncheckedCreateWithoutCoupleAsGodparent1Input>
    connectOrCreate?: ProfileCreateOrConnectWithoutCoupleAsGodparent1Input
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutCoupleAsGodparent2Input = {
    create?: XOR<ProfileCreateWithoutCoupleAsGodparent2Input, ProfileUncheckedCreateWithoutCoupleAsGodparent2Input>
    connectOrCreate?: ProfileCreateOrConnectWithoutCoupleAsGodparent2Input
    connect?: ProfileWhereUniqueInput
  }

  export type ParishCreateNestedOneWithoutCouplesInput = {
    create?: XOR<ParishCreateWithoutCouplesInput, ParishUncheckedCreateWithoutCouplesInput>
    connectOrCreate?: ParishCreateOrConnectWithoutCouplesInput
    connect?: ParishWhereUniqueInput
  }

  export type RoleAssignmentCreateNestedManyWithoutCoupleInput = {
    create?: XOR<RoleAssignmentCreateWithoutCoupleInput, RoleAssignmentUncheckedCreateWithoutCoupleInput> | RoleAssignmentCreateWithoutCoupleInput[] | RoleAssignmentUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: RoleAssignmentCreateOrConnectWithoutCoupleInput | RoleAssignmentCreateOrConnectWithoutCoupleInput[]
    createMany?: RoleAssignmentCreateManyCoupleInputEnvelope
    connect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
  }

  export type PermissionCreateNestedManyWithoutCoupleInput = {
    create?: XOR<PermissionCreateWithoutCoupleInput, PermissionUncheckedCreateWithoutCoupleInput> | PermissionCreateWithoutCoupleInput[] | PermissionUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutCoupleInput | PermissionCreateOrConnectWithoutCoupleInput[]
    createMany?: PermissionCreateManyCoupleInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type RoleAssignmentUncheckedCreateNestedManyWithoutCoupleInput = {
    create?: XOR<RoleAssignmentCreateWithoutCoupleInput, RoleAssignmentUncheckedCreateWithoutCoupleInput> | RoleAssignmentCreateWithoutCoupleInput[] | RoleAssignmentUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: RoleAssignmentCreateOrConnectWithoutCoupleInput | RoleAssignmentCreateOrConnectWithoutCoupleInput[]
    createMany?: RoleAssignmentCreateManyCoupleInputEnvelope
    connect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutCoupleInput = {
    create?: XOR<PermissionCreateWithoutCoupleInput, PermissionUncheckedCreateWithoutCoupleInput> | PermissionCreateWithoutCoupleInput[] | PermissionUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutCoupleInput | PermissionCreateOrConnectWithoutCoupleInput[]
    createMany?: PermissionCreateManyCoupleInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type ProfileUpdateOneRequiredWithoutCoupleAsMember1NestedInput = {
    create?: XOR<ProfileCreateWithoutCoupleAsMember1Input, ProfileUncheckedCreateWithoutCoupleAsMember1Input>
    connectOrCreate?: ProfileCreateOrConnectWithoutCoupleAsMember1Input
    upsert?: ProfileUpsertWithoutCoupleAsMember1Input
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutCoupleAsMember1Input, ProfileUpdateWithoutCoupleAsMember1Input>, ProfileUncheckedUpdateWithoutCoupleAsMember1Input>
  }

  export type ProfileUpdateOneRequiredWithoutCoupleAsMember2NestedInput = {
    create?: XOR<ProfileCreateWithoutCoupleAsMember2Input, ProfileUncheckedCreateWithoutCoupleAsMember2Input>
    connectOrCreate?: ProfileCreateOrConnectWithoutCoupleAsMember2Input
    upsert?: ProfileUpsertWithoutCoupleAsMember2Input
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutCoupleAsMember2Input, ProfileUpdateWithoutCoupleAsMember2Input>, ProfileUncheckedUpdateWithoutCoupleAsMember2Input>
  }

  export type ProfileUpdateOneWithoutCoupleAsGodparent1NestedInput = {
    create?: XOR<ProfileCreateWithoutCoupleAsGodparent1Input, ProfileUncheckedCreateWithoutCoupleAsGodparent1Input>
    connectOrCreate?: ProfileCreateOrConnectWithoutCoupleAsGodparent1Input
    upsert?: ProfileUpsertWithoutCoupleAsGodparent1Input
    disconnect?: boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutCoupleAsGodparent1Input, ProfileUpdateWithoutCoupleAsGodparent1Input>, ProfileUncheckedUpdateWithoutCoupleAsGodparent1Input>
  }

  export type ProfileUpdateOneWithoutCoupleAsGodparent2NestedInput = {
    create?: XOR<ProfileCreateWithoutCoupleAsGodparent2Input, ProfileUncheckedCreateWithoutCoupleAsGodparent2Input>
    connectOrCreate?: ProfileCreateOrConnectWithoutCoupleAsGodparent2Input
    upsert?: ProfileUpsertWithoutCoupleAsGodparent2Input
    disconnect?: boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutCoupleAsGodparent2Input, ProfileUpdateWithoutCoupleAsGodparent2Input>, ProfileUncheckedUpdateWithoutCoupleAsGodparent2Input>
  }

  export type ParishUpdateOneRequiredWithoutCouplesNestedInput = {
    create?: XOR<ParishCreateWithoutCouplesInput, ParishUncheckedCreateWithoutCouplesInput>
    connectOrCreate?: ParishCreateOrConnectWithoutCouplesInput
    upsert?: ParishUpsertWithoutCouplesInput
    connect?: ParishWhereUniqueInput
    update?: XOR<XOR<ParishUpdateToOneWithWhereWithoutCouplesInput, ParishUpdateWithoutCouplesInput>, ParishUncheckedUpdateWithoutCouplesInput>
  }

  export type RoleAssignmentUpdateManyWithoutCoupleNestedInput = {
    create?: XOR<RoleAssignmentCreateWithoutCoupleInput, RoleAssignmentUncheckedCreateWithoutCoupleInput> | RoleAssignmentCreateWithoutCoupleInput[] | RoleAssignmentUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: RoleAssignmentCreateOrConnectWithoutCoupleInput | RoleAssignmentCreateOrConnectWithoutCoupleInput[]
    upsert?: RoleAssignmentUpsertWithWhereUniqueWithoutCoupleInput | RoleAssignmentUpsertWithWhereUniqueWithoutCoupleInput[]
    createMany?: RoleAssignmentCreateManyCoupleInputEnvelope
    set?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    disconnect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    delete?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    connect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    update?: RoleAssignmentUpdateWithWhereUniqueWithoutCoupleInput | RoleAssignmentUpdateWithWhereUniqueWithoutCoupleInput[]
    updateMany?: RoleAssignmentUpdateManyWithWhereWithoutCoupleInput | RoleAssignmentUpdateManyWithWhereWithoutCoupleInput[]
    deleteMany?: RoleAssignmentScalarWhereInput | RoleAssignmentScalarWhereInput[]
  }

  export type PermissionUpdateManyWithoutCoupleNestedInput = {
    create?: XOR<PermissionCreateWithoutCoupleInput, PermissionUncheckedCreateWithoutCoupleInput> | PermissionCreateWithoutCoupleInput[] | PermissionUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutCoupleInput | PermissionCreateOrConnectWithoutCoupleInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutCoupleInput | PermissionUpsertWithWhereUniqueWithoutCoupleInput[]
    createMany?: PermissionCreateManyCoupleInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutCoupleInput | PermissionUpdateWithWhereUniqueWithoutCoupleInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutCoupleInput | PermissionUpdateManyWithWhereWithoutCoupleInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type RoleAssignmentUncheckedUpdateManyWithoutCoupleNestedInput = {
    create?: XOR<RoleAssignmentCreateWithoutCoupleInput, RoleAssignmentUncheckedCreateWithoutCoupleInput> | RoleAssignmentCreateWithoutCoupleInput[] | RoleAssignmentUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: RoleAssignmentCreateOrConnectWithoutCoupleInput | RoleAssignmentCreateOrConnectWithoutCoupleInput[]
    upsert?: RoleAssignmentUpsertWithWhereUniqueWithoutCoupleInput | RoleAssignmentUpsertWithWhereUniqueWithoutCoupleInput[]
    createMany?: RoleAssignmentCreateManyCoupleInputEnvelope
    set?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    disconnect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    delete?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    connect?: RoleAssignmentWhereUniqueInput | RoleAssignmentWhereUniqueInput[]
    update?: RoleAssignmentUpdateWithWhereUniqueWithoutCoupleInput | RoleAssignmentUpdateWithWhereUniqueWithoutCoupleInput[]
    updateMany?: RoleAssignmentUpdateManyWithWhereWithoutCoupleInput | RoleAssignmentUpdateManyWithWhereWithoutCoupleInput[]
    deleteMany?: RoleAssignmentScalarWhereInput | RoleAssignmentScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutCoupleNestedInput = {
    create?: XOR<PermissionCreateWithoutCoupleInput, PermissionUncheckedCreateWithoutCoupleInput> | PermissionCreateWithoutCoupleInput[] | PermissionUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutCoupleInput | PermissionCreateOrConnectWithoutCoupleInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutCoupleInput | PermissionUpsertWithWhereUniqueWithoutCoupleInput[]
    createMany?: PermissionCreateManyCoupleInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutCoupleInput | PermissionUpdateWithWhereUniqueWithoutCoupleInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutCoupleInput | PermissionUpdateManyWithWhereWithoutCoupleInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type CoupleCreateNestedManyWithoutMember1Input = {
    create?: XOR<CoupleCreateWithoutMember1Input, CoupleUncheckedCreateWithoutMember1Input> | CoupleCreateWithoutMember1Input[] | CoupleUncheckedCreateWithoutMember1Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember1Input | CoupleCreateOrConnectWithoutMember1Input[]
    createMany?: CoupleCreateManyMember1InputEnvelope
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
  }

  export type CoupleCreateNestedManyWithoutMember2Input = {
    create?: XOR<CoupleCreateWithoutMember2Input, CoupleUncheckedCreateWithoutMember2Input> | CoupleCreateWithoutMember2Input[] | CoupleUncheckedCreateWithoutMember2Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember2Input | CoupleCreateOrConnectWithoutMember2Input[]
    createMany?: CoupleCreateManyMember2InputEnvelope
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
  }

  export type CoupleCreateNestedManyWithoutGodparent1Input = {
    create?: XOR<CoupleCreateWithoutGodparent1Input, CoupleUncheckedCreateWithoutGodparent1Input> | CoupleCreateWithoutGodparent1Input[] | CoupleUncheckedCreateWithoutGodparent1Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutGodparent1Input | CoupleCreateOrConnectWithoutGodparent1Input[]
    createMany?: CoupleCreateManyGodparent1InputEnvelope
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
  }

  export type CoupleCreateNestedManyWithoutGodparent2Input = {
    create?: XOR<CoupleCreateWithoutGodparent2Input, CoupleUncheckedCreateWithoutGodparent2Input> | CoupleCreateWithoutGodparent2Input[] | CoupleUncheckedCreateWithoutGodparent2Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutGodparent2Input | CoupleCreateOrConnectWithoutGodparent2Input[]
    createMany?: CoupleCreateManyGodparent2InputEnvelope
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type CoupleUncheckedCreateNestedManyWithoutMember1Input = {
    create?: XOR<CoupleCreateWithoutMember1Input, CoupleUncheckedCreateWithoutMember1Input> | CoupleCreateWithoutMember1Input[] | CoupleUncheckedCreateWithoutMember1Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember1Input | CoupleCreateOrConnectWithoutMember1Input[]
    createMany?: CoupleCreateManyMember1InputEnvelope
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
  }

  export type CoupleUncheckedCreateNestedManyWithoutMember2Input = {
    create?: XOR<CoupleCreateWithoutMember2Input, CoupleUncheckedCreateWithoutMember2Input> | CoupleCreateWithoutMember2Input[] | CoupleUncheckedCreateWithoutMember2Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember2Input | CoupleCreateOrConnectWithoutMember2Input[]
    createMany?: CoupleCreateManyMember2InputEnvelope
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
  }

  export type CoupleUncheckedCreateNestedManyWithoutGodparent1Input = {
    create?: XOR<CoupleCreateWithoutGodparent1Input, CoupleUncheckedCreateWithoutGodparent1Input> | CoupleCreateWithoutGodparent1Input[] | CoupleUncheckedCreateWithoutGodparent1Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutGodparent1Input | CoupleCreateOrConnectWithoutGodparent1Input[]
    createMany?: CoupleCreateManyGodparent1InputEnvelope
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
  }

  export type CoupleUncheckedCreateNestedManyWithoutGodparent2Input = {
    create?: XOR<CoupleCreateWithoutGodparent2Input, CoupleUncheckedCreateWithoutGodparent2Input> | CoupleCreateWithoutGodparent2Input[] | CoupleUncheckedCreateWithoutGodparent2Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutGodparent2Input | CoupleCreateOrConnectWithoutGodparent2Input[]
    createMany?: CoupleCreateManyGodparent2InputEnvelope
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type UserUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type CoupleUpdateManyWithoutMember1NestedInput = {
    create?: XOR<CoupleCreateWithoutMember1Input, CoupleUncheckedCreateWithoutMember1Input> | CoupleCreateWithoutMember1Input[] | CoupleUncheckedCreateWithoutMember1Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember1Input | CoupleCreateOrConnectWithoutMember1Input[]
    upsert?: CoupleUpsertWithWhereUniqueWithoutMember1Input | CoupleUpsertWithWhereUniqueWithoutMember1Input[]
    createMany?: CoupleCreateManyMember1InputEnvelope
    set?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    disconnect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    delete?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    update?: CoupleUpdateWithWhereUniqueWithoutMember1Input | CoupleUpdateWithWhereUniqueWithoutMember1Input[]
    updateMany?: CoupleUpdateManyWithWhereWithoutMember1Input | CoupleUpdateManyWithWhereWithoutMember1Input[]
    deleteMany?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
  }

  export type CoupleUpdateManyWithoutMember2NestedInput = {
    create?: XOR<CoupleCreateWithoutMember2Input, CoupleUncheckedCreateWithoutMember2Input> | CoupleCreateWithoutMember2Input[] | CoupleUncheckedCreateWithoutMember2Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember2Input | CoupleCreateOrConnectWithoutMember2Input[]
    upsert?: CoupleUpsertWithWhereUniqueWithoutMember2Input | CoupleUpsertWithWhereUniqueWithoutMember2Input[]
    createMany?: CoupleCreateManyMember2InputEnvelope
    set?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    disconnect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    delete?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    update?: CoupleUpdateWithWhereUniqueWithoutMember2Input | CoupleUpdateWithWhereUniqueWithoutMember2Input[]
    updateMany?: CoupleUpdateManyWithWhereWithoutMember2Input | CoupleUpdateManyWithWhereWithoutMember2Input[]
    deleteMany?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
  }

  export type CoupleUpdateManyWithoutGodparent1NestedInput = {
    create?: XOR<CoupleCreateWithoutGodparent1Input, CoupleUncheckedCreateWithoutGodparent1Input> | CoupleCreateWithoutGodparent1Input[] | CoupleUncheckedCreateWithoutGodparent1Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutGodparent1Input | CoupleCreateOrConnectWithoutGodparent1Input[]
    upsert?: CoupleUpsertWithWhereUniqueWithoutGodparent1Input | CoupleUpsertWithWhereUniqueWithoutGodparent1Input[]
    createMany?: CoupleCreateManyGodparent1InputEnvelope
    set?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    disconnect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    delete?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    update?: CoupleUpdateWithWhereUniqueWithoutGodparent1Input | CoupleUpdateWithWhereUniqueWithoutGodparent1Input[]
    updateMany?: CoupleUpdateManyWithWhereWithoutGodparent1Input | CoupleUpdateManyWithWhereWithoutGodparent1Input[]
    deleteMany?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
  }

  export type CoupleUpdateManyWithoutGodparent2NestedInput = {
    create?: XOR<CoupleCreateWithoutGodparent2Input, CoupleUncheckedCreateWithoutGodparent2Input> | CoupleCreateWithoutGodparent2Input[] | CoupleUncheckedCreateWithoutGodparent2Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutGodparent2Input | CoupleCreateOrConnectWithoutGodparent2Input[]
    upsert?: CoupleUpsertWithWhereUniqueWithoutGodparent2Input | CoupleUpsertWithWhereUniqueWithoutGodparent2Input[]
    createMany?: CoupleCreateManyGodparent2InputEnvelope
    set?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    disconnect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    delete?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    update?: CoupleUpdateWithWhereUniqueWithoutGodparent2Input | CoupleUpdateWithWhereUniqueWithoutGodparent2Input[]
    updateMany?: CoupleUpdateManyWithWhereWithoutGodparent2Input | CoupleUpdateManyWithWhereWithoutGodparent2Input[]
    deleteMany?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type CoupleUncheckedUpdateManyWithoutMember1NestedInput = {
    create?: XOR<CoupleCreateWithoutMember1Input, CoupleUncheckedCreateWithoutMember1Input> | CoupleCreateWithoutMember1Input[] | CoupleUncheckedCreateWithoutMember1Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember1Input | CoupleCreateOrConnectWithoutMember1Input[]
    upsert?: CoupleUpsertWithWhereUniqueWithoutMember1Input | CoupleUpsertWithWhereUniqueWithoutMember1Input[]
    createMany?: CoupleCreateManyMember1InputEnvelope
    set?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    disconnect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    delete?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    update?: CoupleUpdateWithWhereUniqueWithoutMember1Input | CoupleUpdateWithWhereUniqueWithoutMember1Input[]
    updateMany?: CoupleUpdateManyWithWhereWithoutMember1Input | CoupleUpdateManyWithWhereWithoutMember1Input[]
    deleteMany?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
  }

  export type CoupleUncheckedUpdateManyWithoutMember2NestedInput = {
    create?: XOR<CoupleCreateWithoutMember2Input, CoupleUncheckedCreateWithoutMember2Input> | CoupleCreateWithoutMember2Input[] | CoupleUncheckedCreateWithoutMember2Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutMember2Input | CoupleCreateOrConnectWithoutMember2Input[]
    upsert?: CoupleUpsertWithWhereUniqueWithoutMember2Input | CoupleUpsertWithWhereUniqueWithoutMember2Input[]
    createMany?: CoupleCreateManyMember2InputEnvelope
    set?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    disconnect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    delete?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    update?: CoupleUpdateWithWhereUniqueWithoutMember2Input | CoupleUpdateWithWhereUniqueWithoutMember2Input[]
    updateMany?: CoupleUpdateManyWithWhereWithoutMember2Input | CoupleUpdateManyWithWhereWithoutMember2Input[]
    deleteMany?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
  }

  export type CoupleUncheckedUpdateManyWithoutGodparent1NestedInput = {
    create?: XOR<CoupleCreateWithoutGodparent1Input, CoupleUncheckedCreateWithoutGodparent1Input> | CoupleCreateWithoutGodparent1Input[] | CoupleUncheckedCreateWithoutGodparent1Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutGodparent1Input | CoupleCreateOrConnectWithoutGodparent1Input[]
    upsert?: CoupleUpsertWithWhereUniqueWithoutGodparent1Input | CoupleUpsertWithWhereUniqueWithoutGodparent1Input[]
    createMany?: CoupleCreateManyGodparent1InputEnvelope
    set?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    disconnect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    delete?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    update?: CoupleUpdateWithWhereUniqueWithoutGodparent1Input | CoupleUpdateWithWhereUniqueWithoutGodparent1Input[]
    updateMany?: CoupleUpdateManyWithWhereWithoutGodparent1Input | CoupleUpdateManyWithWhereWithoutGodparent1Input[]
    deleteMany?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
  }

  export type CoupleUncheckedUpdateManyWithoutGodparent2NestedInput = {
    create?: XOR<CoupleCreateWithoutGodparent2Input, CoupleUncheckedCreateWithoutGodparent2Input> | CoupleCreateWithoutGodparent2Input[] | CoupleUncheckedCreateWithoutGodparent2Input[]
    connectOrCreate?: CoupleCreateOrConnectWithoutGodparent2Input | CoupleCreateOrConnectWithoutGodparent2Input[]
    upsert?: CoupleUpsertWithWhereUniqueWithoutGodparent2Input | CoupleUpsertWithWhereUniqueWithoutGodparent2Input[]
    createMany?: CoupleCreateManyGodparent2InputEnvelope
    set?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    disconnect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    delete?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    connect?: CoupleWhereUniqueInput | CoupleWhereUniqueInput[]
    update?: CoupleUpdateWithWhereUniqueWithoutGodparent2Input | CoupleUpdateWithWhereUniqueWithoutGodparent2Input[]
    updateMany?: CoupleUpdateManyWithWhereWithoutGodparent2Input | CoupleUpdateManyWithWhereWithoutGodparent2Input[]
    deleteMany?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type PermissionCreateNestedManyWithoutUserInput = {
    create?: XOR<PermissionCreateWithoutUserInput, PermissionUncheckedCreateWithoutUserInput> | PermissionCreateWithoutUserInput[] | PermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUserInput | PermissionCreateOrConnectWithoutUserInput[]
    createMany?: PermissionCreateManyUserInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type DataAccessLogCreateNestedManyWithoutUserInput = {
    create?: XOR<DataAccessLogCreateWithoutUserInput, DataAccessLogUncheckedCreateWithoutUserInput> | DataAccessLogCreateWithoutUserInput[] | DataAccessLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataAccessLogCreateOrConnectWithoutUserInput | DataAccessLogCreateOrConnectWithoutUserInput[]
    createMany?: DataAccessLogCreateManyUserInputEnvelope
    connect?: DataAccessLogWhereUniqueInput | DataAccessLogWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PermissionCreateWithoutUserInput, PermissionUncheckedCreateWithoutUserInput> | PermissionCreateWithoutUserInput[] | PermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUserInput | PermissionCreateOrConnectWithoutUserInput[]
    createMany?: PermissionCreateManyUserInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type DataAccessLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DataAccessLogCreateWithoutUserInput, DataAccessLogUncheckedCreateWithoutUserInput> | DataAccessLogCreateWithoutUserInput[] | DataAccessLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataAccessLogCreateOrConnectWithoutUserInput | DataAccessLogCreateOrConnectWithoutUserInput[]
    createMany?: DataAccessLogCreateManyUserInputEnvelope
    connect?: DataAccessLogWhereUniqueInput | DataAccessLogWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProfileUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type PermissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PermissionCreateWithoutUserInput, PermissionUncheckedCreateWithoutUserInput> | PermissionCreateWithoutUserInput[] | PermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUserInput | PermissionCreateOrConnectWithoutUserInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutUserInput | PermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PermissionCreateManyUserInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutUserInput | PermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutUserInput | PermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type DataAccessLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<DataAccessLogCreateWithoutUserInput, DataAccessLogUncheckedCreateWithoutUserInput> | DataAccessLogCreateWithoutUserInput[] | DataAccessLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataAccessLogCreateOrConnectWithoutUserInput | DataAccessLogCreateOrConnectWithoutUserInput[]
    upsert?: DataAccessLogUpsertWithWhereUniqueWithoutUserInput | DataAccessLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DataAccessLogCreateManyUserInputEnvelope
    set?: DataAccessLogWhereUniqueInput | DataAccessLogWhereUniqueInput[]
    disconnect?: DataAccessLogWhereUniqueInput | DataAccessLogWhereUniqueInput[]
    delete?: DataAccessLogWhereUniqueInput | DataAccessLogWhereUniqueInput[]
    connect?: DataAccessLogWhereUniqueInput | DataAccessLogWhereUniqueInput[]
    update?: DataAccessLogUpdateWithWhereUniqueWithoutUserInput | DataAccessLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DataAccessLogUpdateManyWithWhereWithoutUserInput | DataAccessLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DataAccessLogScalarWhereInput | DataAccessLogScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PermissionCreateWithoutUserInput, PermissionUncheckedCreateWithoutUserInput> | PermissionCreateWithoutUserInput[] | PermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUserInput | PermissionCreateOrConnectWithoutUserInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutUserInput | PermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PermissionCreateManyUserInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutUserInput | PermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutUserInput | PermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type DataAccessLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DataAccessLogCreateWithoutUserInput, DataAccessLogUncheckedCreateWithoutUserInput> | DataAccessLogCreateWithoutUserInput[] | DataAccessLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataAccessLogCreateOrConnectWithoutUserInput | DataAccessLogCreateOrConnectWithoutUserInput[]
    upsert?: DataAccessLogUpsertWithWhereUniqueWithoutUserInput | DataAccessLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DataAccessLogCreateManyUserInputEnvelope
    set?: DataAccessLogWhereUniqueInput | DataAccessLogWhereUniqueInput[]
    disconnect?: DataAccessLogWhereUniqueInput | DataAccessLogWhereUniqueInput[]
    delete?: DataAccessLogWhereUniqueInput | DataAccessLogWhereUniqueInput[]
    connect?: DataAccessLogWhereUniqueInput | DataAccessLogWhereUniqueInput[]
    update?: DataAccessLogUpdateWithWhereUniqueWithoutUserInput | DataAccessLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DataAccessLogUpdateManyWithWhereWithoutUserInput | DataAccessLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DataAccessLogScalarWhereInput | DataAccessLogScalarWhereInput[]
  }

  export type CoupleCreateNestedOneWithoutRolesInput = {
    create?: XOR<CoupleCreateWithoutRolesInput, CoupleUncheckedCreateWithoutRolesInput>
    connectOrCreate?: CoupleCreateOrConnectWithoutRolesInput
    connect?: CoupleWhereUniqueInput
  }

  export type ArchdioceseCreateNestedOneWithoutRolesInput = {
    create?: XOR<ArchdioceseCreateWithoutRolesInput, ArchdioceseUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ArchdioceseCreateOrConnectWithoutRolesInput
    connect?: ArchdioceseWhereUniqueInput
  }

  export type ParishCreateNestedOneWithoutRolesInput = {
    create?: XOR<ParishCreateWithoutRolesInput, ParishUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ParishCreateOrConnectWithoutRolesInput
    connect?: ParishWhereUniqueInput
  }

  export type EnumCoupleRoleFieldUpdateOperationsInput = {
    set?: $Enums.CoupleRole
  }

  export type CoupleUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<CoupleCreateWithoutRolesInput, CoupleUncheckedCreateWithoutRolesInput>
    connectOrCreate?: CoupleCreateOrConnectWithoutRolesInput
    upsert?: CoupleUpsertWithoutRolesInput
    connect?: CoupleWhereUniqueInput
    update?: XOR<XOR<CoupleUpdateToOneWithWhereWithoutRolesInput, CoupleUpdateWithoutRolesInput>, CoupleUncheckedUpdateWithoutRolesInput>
  }

  export type ArchdioceseUpdateOneWithoutRolesNestedInput = {
    create?: XOR<ArchdioceseCreateWithoutRolesInput, ArchdioceseUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ArchdioceseCreateOrConnectWithoutRolesInput
    upsert?: ArchdioceseUpsertWithoutRolesInput
    disconnect?: boolean
    delete?: ArchdioceseWhereInput | boolean
    connect?: ArchdioceseWhereUniqueInput
    update?: XOR<XOR<ArchdioceseUpdateToOneWithWhereWithoutRolesInput, ArchdioceseUpdateWithoutRolesInput>, ArchdioceseUncheckedUpdateWithoutRolesInput>
  }

  export type ParishUpdateOneWithoutRolesNestedInput = {
    create?: XOR<ParishCreateWithoutRolesInput, ParishUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ParishCreateOrConnectWithoutRolesInput
    upsert?: ParishUpsertWithoutRolesInput
    disconnect?: boolean
    delete?: ParishWhereInput | boolean
    connect?: ParishWhereUniqueInput
    update?: XOR<XOR<ParishUpdateToOneWithWhereWithoutRolesInput, ParishUpdateWithoutRolesInput>, ParishUncheckedUpdateWithoutRolesInput>
  }

  export type UserCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput
    connect?: UserWhereUniqueInput
  }

  export type ArchdioceseCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<ArchdioceseCreateWithoutPermissionsInput, ArchdioceseUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: ArchdioceseCreateOrConnectWithoutPermissionsInput
    connect?: ArchdioceseWhereUniqueInput
  }

  export type ParishCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<ParishCreateWithoutPermissionsInput, ParishUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: ParishCreateOrConnectWithoutPermissionsInput
    connect?: ParishWhereUniqueInput
  }

  export type CoupleCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<CoupleCreateWithoutPermissionsInput, CoupleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: CoupleCreateOrConnectWithoutPermissionsInput
    connect?: CoupleWhereUniqueInput
  }

  export type EnumDataAccessEntityFieldUpdateOperationsInput = {
    set?: $Enums.DataAccessEntity
  }

  export type EnumDataAccessActionFieldUpdateOperationsInput = {
    set?: $Enums.DataAccessAction
  }

  export type UserUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput
    upsert?: UserUpsertWithoutPermissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPermissionsInput, UserUpdateWithoutPermissionsInput>, UserUncheckedUpdateWithoutPermissionsInput>
  }

  export type ArchdioceseUpdateOneWithoutPermissionsNestedInput = {
    create?: XOR<ArchdioceseCreateWithoutPermissionsInput, ArchdioceseUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: ArchdioceseCreateOrConnectWithoutPermissionsInput
    upsert?: ArchdioceseUpsertWithoutPermissionsInput
    disconnect?: boolean
    delete?: ArchdioceseWhereInput | boolean
    connect?: ArchdioceseWhereUniqueInput
    update?: XOR<XOR<ArchdioceseUpdateToOneWithWhereWithoutPermissionsInput, ArchdioceseUpdateWithoutPermissionsInput>, ArchdioceseUncheckedUpdateWithoutPermissionsInput>
  }

  export type ParishUpdateOneWithoutPermissionsNestedInput = {
    create?: XOR<ParishCreateWithoutPermissionsInput, ParishUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: ParishCreateOrConnectWithoutPermissionsInput
    upsert?: ParishUpsertWithoutPermissionsInput
    disconnect?: boolean
    delete?: ParishWhereInput | boolean
    connect?: ParishWhereUniqueInput
    update?: XOR<XOR<ParishUpdateToOneWithWhereWithoutPermissionsInput, ParishUpdateWithoutPermissionsInput>, ParishUncheckedUpdateWithoutPermissionsInput>
  }

  export type CoupleUpdateOneWithoutPermissionsNestedInput = {
    create?: XOR<CoupleCreateWithoutPermissionsInput, CoupleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: CoupleCreateOrConnectWithoutPermissionsInput
    upsert?: CoupleUpsertWithoutPermissionsInput
    disconnect?: boolean
    delete?: CoupleWhereInput | boolean
    connect?: CoupleWhereUniqueInput
    update?: XOR<XOR<CoupleUpdateToOneWithWhereWithoutPermissionsInput, CoupleUpdateWithoutPermissionsInput>, CoupleUncheckedUpdateWithoutPermissionsInput>
  }

  export type UserCreateNestedOneWithoutDataAccessLogsInput = {
    create?: XOR<UserCreateWithoutDataAccessLogsInput, UserUncheckedCreateWithoutDataAccessLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDataAccessLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutDataAccessLogsNestedInput = {
    create?: XOR<UserCreateWithoutDataAccessLogsInput, UserUncheckedCreateWithoutDataAccessLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDataAccessLogsInput
    upsert?: UserUpsertWithoutDataAccessLogsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDataAccessLogsInput, UserUpdateWithoutDataAccessLogsInput>, UserUncheckedUpdateWithoutDataAccessLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    postalCode?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    complement?: StringNullableFilter<"Address"> | string | null
    neighborhood?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCoupleRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CoupleRole | EnumCoupleRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CoupleRole[] | ListEnumCoupleRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoupleRole[] | ListEnumCoupleRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCoupleRoleFilter<$PrismaModel> | $Enums.CoupleRole
  }

  export type NestedEnumCoupleRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoupleRole | EnumCoupleRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CoupleRole[] | ListEnumCoupleRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoupleRole[] | ListEnumCoupleRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCoupleRoleWithAggregatesFilter<$PrismaModel> | $Enums.CoupleRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoupleRoleFilter<$PrismaModel>
    _max?: NestedEnumCoupleRoleFilter<$PrismaModel>
  }

  export type NestedEnumDataAccessEntityFilter<$PrismaModel = never> = {
    equals?: $Enums.DataAccessEntity | EnumDataAccessEntityFieldRefInput<$PrismaModel>
    in?: $Enums.DataAccessEntity[] | ListEnumDataAccessEntityFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataAccessEntity[] | ListEnumDataAccessEntityFieldRefInput<$PrismaModel>
    not?: NestedEnumDataAccessEntityFilter<$PrismaModel> | $Enums.DataAccessEntity
  }

  export type NestedEnumDataAccessActionFilter<$PrismaModel = never> = {
    equals?: $Enums.DataAccessAction | EnumDataAccessActionFieldRefInput<$PrismaModel>
    in?: $Enums.DataAccessAction[] | ListEnumDataAccessActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataAccessAction[] | ListEnumDataAccessActionFieldRefInput<$PrismaModel>
    not?: NestedEnumDataAccessActionFilter<$PrismaModel> | $Enums.DataAccessAction
  }

  export type NestedEnumDataAccessEntityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DataAccessEntity | EnumDataAccessEntityFieldRefInput<$PrismaModel>
    in?: $Enums.DataAccessEntity[] | ListEnumDataAccessEntityFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataAccessEntity[] | ListEnumDataAccessEntityFieldRefInput<$PrismaModel>
    not?: NestedEnumDataAccessEntityWithAggregatesFilter<$PrismaModel> | $Enums.DataAccessEntity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDataAccessEntityFilter<$PrismaModel>
    _max?: NestedEnumDataAccessEntityFilter<$PrismaModel>
  }

  export type NestedEnumDataAccessActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DataAccessAction | EnumDataAccessActionFieldRefInput<$PrismaModel>
    in?: $Enums.DataAccessAction[] | ListEnumDataAccessActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataAccessAction[] | ListEnumDataAccessActionFieldRefInput<$PrismaModel>
    not?: NestedEnumDataAccessActionWithAggregatesFilter<$PrismaModel> | $Enums.DataAccessAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDataAccessActionFilter<$PrismaModel>
    _max?: NestedEnumDataAccessActionFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type ParishCreateWithoutArchdioceseInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    createdAt?: Date | string
    updatedAt?: Date | string
    couples?: CoupleCreateNestedManyWithoutParishInput
    roles?: RoleAssignmentCreateNestedManyWithoutParishInput
    permissions?: PermissionCreateNestedManyWithoutParishInput
  }

  export type ParishUncheckedCreateWithoutArchdioceseInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    createdAt?: Date | string
    updatedAt?: Date | string
    couples?: CoupleUncheckedCreateNestedManyWithoutParishInput
    roles?: RoleAssignmentUncheckedCreateNestedManyWithoutParishInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutParishInput
  }

  export type ParishCreateOrConnectWithoutArchdioceseInput = {
    where: ParishWhereUniqueInput
    create: XOR<ParishCreateWithoutArchdioceseInput, ParishUncheckedCreateWithoutArchdioceseInput>
  }

  export type ParishCreateManyArchdioceseInputEnvelope = {
    data: ParishCreateManyArchdioceseInput | ParishCreateManyArchdioceseInput[]
  }

  export type RoleAssignmentCreateWithoutArchdioceseInput = {
    id?: string
    role: $Enums.CoupleRole
    createdAt?: Date | string
    updatedAt?: Date | string
    couple: CoupleCreateNestedOneWithoutRolesInput
    parish?: ParishCreateNestedOneWithoutRolesInput
  }

  export type RoleAssignmentUncheckedCreateWithoutArchdioceseInput = {
    id?: string
    role: $Enums.CoupleRole
    coupleId: string
    parishId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleAssignmentCreateOrConnectWithoutArchdioceseInput = {
    where: RoleAssignmentWhereUniqueInput
    create: XOR<RoleAssignmentCreateWithoutArchdioceseInput, RoleAssignmentUncheckedCreateWithoutArchdioceseInput>
  }

  export type RoleAssignmentCreateManyArchdioceseInputEnvelope = {
    data: RoleAssignmentCreateManyArchdioceseInput | RoleAssignmentCreateManyArchdioceseInput[]
  }

  export type PermissionCreateWithoutArchdioceseInput = {
    id?: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPermissionsInput
    parish?: ParishCreateNestedOneWithoutPermissionsInput
    couple?: CoupleCreateNestedOneWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateWithoutArchdioceseInput = {
    id?: string
    userId: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    parishId?: string | null
    coupleId?: string | null
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateOrConnectWithoutArchdioceseInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutArchdioceseInput, PermissionUncheckedCreateWithoutArchdioceseInput>
  }

  export type PermissionCreateManyArchdioceseInputEnvelope = {
    data: PermissionCreateManyArchdioceseInput | PermissionCreateManyArchdioceseInput[]
  }

  export type ParishUpsertWithWhereUniqueWithoutArchdioceseInput = {
    where: ParishWhereUniqueInput
    update: XOR<ParishUpdateWithoutArchdioceseInput, ParishUncheckedUpdateWithoutArchdioceseInput>
    create: XOR<ParishCreateWithoutArchdioceseInput, ParishUncheckedCreateWithoutArchdioceseInput>
  }

  export type ParishUpdateWithWhereUniqueWithoutArchdioceseInput = {
    where: ParishWhereUniqueInput
    data: XOR<ParishUpdateWithoutArchdioceseInput, ParishUncheckedUpdateWithoutArchdioceseInput>
  }

  export type ParishUpdateManyWithWhereWithoutArchdioceseInput = {
    where: ParishScalarWhereInput
    data: XOR<ParishUpdateManyMutationInput, ParishUncheckedUpdateManyWithoutArchdioceseInput>
  }

  export type ParishScalarWhereInput = {
    AND?: ParishScalarWhereInput | ParishScalarWhereInput[]
    OR?: ParishScalarWhereInput[]
    NOT?: ParishScalarWhereInput | ParishScalarWhereInput[]
    id?: StringFilter<"Parish"> | string
    name?: StringFilter<"Parish"> | string
    archdioceseId?: StringFilter<"Parish"> | string
    createdAt?: DateTimeFilter<"Parish"> | Date | string
    updatedAt?: DateTimeFilter<"Parish"> | Date | string
  }

  export type RoleAssignmentUpsertWithWhereUniqueWithoutArchdioceseInput = {
    where: RoleAssignmentWhereUniqueInput
    update: XOR<RoleAssignmentUpdateWithoutArchdioceseInput, RoleAssignmentUncheckedUpdateWithoutArchdioceseInput>
    create: XOR<RoleAssignmentCreateWithoutArchdioceseInput, RoleAssignmentUncheckedCreateWithoutArchdioceseInput>
  }

  export type RoleAssignmentUpdateWithWhereUniqueWithoutArchdioceseInput = {
    where: RoleAssignmentWhereUniqueInput
    data: XOR<RoleAssignmentUpdateWithoutArchdioceseInput, RoleAssignmentUncheckedUpdateWithoutArchdioceseInput>
  }

  export type RoleAssignmentUpdateManyWithWhereWithoutArchdioceseInput = {
    where: RoleAssignmentScalarWhereInput
    data: XOR<RoleAssignmentUpdateManyMutationInput, RoleAssignmentUncheckedUpdateManyWithoutArchdioceseInput>
  }

  export type RoleAssignmentScalarWhereInput = {
    AND?: RoleAssignmentScalarWhereInput | RoleAssignmentScalarWhereInput[]
    OR?: RoleAssignmentScalarWhereInput[]
    NOT?: RoleAssignmentScalarWhereInput | RoleAssignmentScalarWhereInput[]
    id?: StringFilter<"RoleAssignment"> | string
    role?: EnumCoupleRoleFilter<"RoleAssignment"> | $Enums.CoupleRole
    coupleId?: StringFilter<"RoleAssignment"> | string
    archdioceseId?: StringNullableFilter<"RoleAssignment"> | string | null
    parishId?: StringNullableFilter<"RoleAssignment"> | string | null
    createdAt?: DateTimeFilter<"RoleAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"RoleAssignment"> | Date | string
  }

  export type PermissionUpsertWithWhereUniqueWithoutArchdioceseInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutArchdioceseInput, PermissionUncheckedUpdateWithoutArchdioceseInput>
    create: XOR<PermissionCreateWithoutArchdioceseInput, PermissionUncheckedCreateWithoutArchdioceseInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutArchdioceseInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutArchdioceseInput, PermissionUncheckedUpdateWithoutArchdioceseInput>
  }

  export type PermissionUpdateManyWithWhereWithoutArchdioceseInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutArchdioceseInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    OR?: PermissionScalarWhereInput[]
    NOT?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    id?: StringFilter<"Permission"> | string
    userId?: StringFilter<"Permission"> | string
    entity?: EnumDataAccessEntityFilter<"Permission"> | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFilter<"Permission"> | $Enums.DataAccessAction
    archdioceseId?: StringNullableFilter<"Permission"> | string | null
    parishId?: StringNullableFilter<"Permission"> | string | null
    coupleId?: StringNullableFilter<"Permission"> | string | null
    resourceId?: StringNullableFilter<"Permission"> | string | null
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
  }

  export type ArchdioceseCreateWithoutParishesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleAssignmentCreateNestedManyWithoutArchdioceseInput
    permissions?: PermissionCreateNestedManyWithoutArchdioceseInput
  }

  export type ArchdioceseUncheckedCreateWithoutParishesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleAssignmentUncheckedCreateNestedManyWithoutArchdioceseInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutArchdioceseInput
  }

  export type ArchdioceseCreateOrConnectWithoutParishesInput = {
    where: ArchdioceseWhereUniqueInput
    create: XOR<ArchdioceseCreateWithoutParishesInput, ArchdioceseUncheckedCreateWithoutParishesInput>
  }

  export type CoupleCreateWithoutParishInput = {
    id?: string
    marriageDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    member1: ProfileCreateNestedOneWithoutCoupleAsMember1Input
    member2: ProfileCreateNestedOneWithoutCoupleAsMember2Input
    godparent1?: ProfileCreateNestedOneWithoutCoupleAsGodparent1Input
    godparent2?: ProfileCreateNestedOneWithoutCoupleAsGodparent2Input
    roles?: RoleAssignmentCreateNestedManyWithoutCoupleInput
    permissions?: PermissionCreateNestedManyWithoutCoupleInput
  }

  export type CoupleUncheckedCreateWithoutParishInput = {
    id?: string
    member1Id: string
    member2Id: string
    godparent1Id?: string | null
    godparent2Id?: string | null
    marriageDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleAssignmentUncheckedCreateNestedManyWithoutCoupleInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutCoupleInput
  }

  export type CoupleCreateOrConnectWithoutParishInput = {
    where: CoupleWhereUniqueInput
    create: XOR<CoupleCreateWithoutParishInput, CoupleUncheckedCreateWithoutParishInput>
  }

  export type CoupleCreateManyParishInputEnvelope = {
    data: CoupleCreateManyParishInput | CoupleCreateManyParishInput[]
  }

  export type RoleAssignmentCreateWithoutParishInput = {
    id?: string
    role: $Enums.CoupleRole
    createdAt?: Date | string
    updatedAt?: Date | string
    couple: CoupleCreateNestedOneWithoutRolesInput
    archdiocese?: ArchdioceseCreateNestedOneWithoutRolesInput
  }

  export type RoleAssignmentUncheckedCreateWithoutParishInput = {
    id?: string
    role: $Enums.CoupleRole
    coupleId: string
    archdioceseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleAssignmentCreateOrConnectWithoutParishInput = {
    where: RoleAssignmentWhereUniqueInput
    create: XOR<RoleAssignmentCreateWithoutParishInput, RoleAssignmentUncheckedCreateWithoutParishInput>
  }

  export type RoleAssignmentCreateManyParishInputEnvelope = {
    data: RoleAssignmentCreateManyParishInput | RoleAssignmentCreateManyParishInput[]
  }

  export type PermissionCreateWithoutParishInput = {
    id?: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPermissionsInput
    archdiocese?: ArchdioceseCreateNestedOneWithoutPermissionsInput
    couple?: CoupleCreateNestedOneWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateWithoutParishInput = {
    id?: string
    userId: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    archdioceseId?: string | null
    coupleId?: string | null
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateOrConnectWithoutParishInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutParishInput, PermissionUncheckedCreateWithoutParishInput>
  }

  export type PermissionCreateManyParishInputEnvelope = {
    data: PermissionCreateManyParishInput | PermissionCreateManyParishInput[]
  }

  export type AddressUpdateInput = {
    postalCode?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type ArchdioceseUpsertWithoutParishesInput = {
    update: XOR<ArchdioceseUpdateWithoutParishesInput, ArchdioceseUncheckedUpdateWithoutParishesInput>
    create: XOR<ArchdioceseCreateWithoutParishesInput, ArchdioceseUncheckedCreateWithoutParishesInput>
    where?: ArchdioceseWhereInput
  }

  export type ArchdioceseUpdateToOneWithWhereWithoutParishesInput = {
    where?: ArchdioceseWhereInput
    data: XOR<ArchdioceseUpdateWithoutParishesInput, ArchdioceseUncheckedUpdateWithoutParishesInput>
  }

  export type ArchdioceseUpdateWithoutParishesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleAssignmentUpdateManyWithoutArchdioceseNestedInput
    permissions?: PermissionUpdateManyWithoutArchdioceseNestedInput
  }

  export type ArchdioceseUncheckedUpdateWithoutParishesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleAssignmentUncheckedUpdateManyWithoutArchdioceseNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutArchdioceseNestedInput
  }

  export type CoupleUpsertWithWhereUniqueWithoutParishInput = {
    where: CoupleWhereUniqueInput
    update: XOR<CoupleUpdateWithoutParishInput, CoupleUncheckedUpdateWithoutParishInput>
    create: XOR<CoupleCreateWithoutParishInput, CoupleUncheckedCreateWithoutParishInput>
  }

  export type CoupleUpdateWithWhereUniqueWithoutParishInput = {
    where: CoupleWhereUniqueInput
    data: XOR<CoupleUpdateWithoutParishInput, CoupleUncheckedUpdateWithoutParishInput>
  }

  export type CoupleUpdateManyWithWhereWithoutParishInput = {
    where: CoupleScalarWhereInput
    data: XOR<CoupleUpdateManyMutationInput, CoupleUncheckedUpdateManyWithoutParishInput>
  }

  export type CoupleScalarWhereInput = {
    AND?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
    OR?: CoupleScalarWhereInput[]
    NOT?: CoupleScalarWhereInput | CoupleScalarWhereInput[]
    id?: StringFilter<"Couple"> | string
    member1Id?: StringFilter<"Couple"> | string
    member2Id?: StringFilter<"Couple"> | string
    godparent1Id?: StringNullableFilter<"Couple"> | string | null
    godparent2Id?: StringNullableFilter<"Couple"> | string | null
    marriageDate?: DateTimeFilter<"Couple"> | Date | string
    parishId?: StringFilter<"Couple"> | string
    createdAt?: DateTimeFilter<"Couple"> | Date | string
    updatedAt?: DateTimeFilter<"Couple"> | Date | string
  }

  export type RoleAssignmentUpsertWithWhereUniqueWithoutParishInput = {
    where: RoleAssignmentWhereUniqueInput
    update: XOR<RoleAssignmentUpdateWithoutParishInput, RoleAssignmentUncheckedUpdateWithoutParishInput>
    create: XOR<RoleAssignmentCreateWithoutParishInput, RoleAssignmentUncheckedCreateWithoutParishInput>
  }

  export type RoleAssignmentUpdateWithWhereUniqueWithoutParishInput = {
    where: RoleAssignmentWhereUniqueInput
    data: XOR<RoleAssignmentUpdateWithoutParishInput, RoleAssignmentUncheckedUpdateWithoutParishInput>
  }

  export type RoleAssignmentUpdateManyWithWhereWithoutParishInput = {
    where: RoleAssignmentScalarWhereInput
    data: XOR<RoleAssignmentUpdateManyMutationInput, RoleAssignmentUncheckedUpdateManyWithoutParishInput>
  }

  export type PermissionUpsertWithWhereUniqueWithoutParishInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutParishInput, PermissionUncheckedUpdateWithoutParishInput>
    create: XOR<PermissionCreateWithoutParishInput, PermissionUncheckedCreateWithoutParishInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutParishInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutParishInput, PermissionUncheckedUpdateWithoutParishInput>
  }

  export type PermissionUpdateManyWithWhereWithoutParishInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutParishInput>
  }

  export type ProfileCreateWithoutCoupleAsMember1Input = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    gender: $Enums.Gender
    birthDate: Date | string
    phone: string
    email: string
    photo?: string | null
    instagram?: string | null
    facebook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProfileInput
    coupleAsMember2?: CoupleCreateNestedManyWithoutMember2Input
    coupleAsGodparent1?: CoupleCreateNestedManyWithoutGodparent1Input
    coupleAsGodparent2?: CoupleCreateNestedManyWithoutGodparent2Input
  }

  export type ProfileUncheckedCreateWithoutCoupleAsMember1Input = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    gender: $Enums.Gender
    birthDate: Date | string
    phone: string
    email: string
    photo?: string | null
    instagram?: string | null
    facebook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutProfileInput
    coupleAsMember2?: CoupleUncheckedCreateNestedManyWithoutMember2Input
    coupleAsGodparent1?: CoupleUncheckedCreateNestedManyWithoutGodparent1Input
    coupleAsGodparent2?: CoupleUncheckedCreateNestedManyWithoutGodparent2Input
  }

  export type ProfileCreateOrConnectWithoutCoupleAsMember1Input = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutCoupleAsMember1Input, ProfileUncheckedCreateWithoutCoupleAsMember1Input>
  }

  export type ProfileCreateWithoutCoupleAsMember2Input = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    gender: $Enums.Gender
    birthDate: Date | string
    phone: string
    email: string
    photo?: string | null
    instagram?: string | null
    facebook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProfileInput
    coupleAsMember1?: CoupleCreateNestedManyWithoutMember1Input
    coupleAsGodparent1?: CoupleCreateNestedManyWithoutGodparent1Input
    coupleAsGodparent2?: CoupleCreateNestedManyWithoutGodparent2Input
  }

  export type ProfileUncheckedCreateWithoutCoupleAsMember2Input = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    gender: $Enums.Gender
    birthDate: Date | string
    phone: string
    email: string
    photo?: string | null
    instagram?: string | null
    facebook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutProfileInput
    coupleAsMember1?: CoupleUncheckedCreateNestedManyWithoutMember1Input
    coupleAsGodparent1?: CoupleUncheckedCreateNestedManyWithoutGodparent1Input
    coupleAsGodparent2?: CoupleUncheckedCreateNestedManyWithoutGodparent2Input
  }

  export type ProfileCreateOrConnectWithoutCoupleAsMember2Input = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutCoupleAsMember2Input, ProfileUncheckedCreateWithoutCoupleAsMember2Input>
  }

  export type ProfileCreateWithoutCoupleAsGodparent1Input = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    gender: $Enums.Gender
    birthDate: Date | string
    phone: string
    email: string
    photo?: string | null
    instagram?: string | null
    facebook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProfileInput
    coupleAsMember1?: CoupleCreateNestedManyWithoutMember1Input
    coupleAsMember2?: CoupleCreateNestedManyWithoutMember2Input
    coupleAsGodparent2?: CoupleCreateNestedManyWithoutGodparent2Input
  }

  export type ProfileUncheckedCreateWithoutCoupleAsGodparent1Input = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    gender: $Enums.Gender
    birthDate: Date | string
    phone: string
    email: string
    photo?: string | null
    instagram?: string | null
    facebook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutProfileInput
    coupleAsMember1?: CoupleUncheckedCreateNestedManyWithoutMember1Input
    coupleAsMember2?: CoupleUncheckedCreateNestedManyWithoutMember2Input
    coupleAsGodparent2?: CoupleUncheckedCreateNestedManyWithoutGodparent2Input
  }

  export type ProfileCreateOrConnectWithoutCoupleAsGodparent1Input = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutCoupleAsGodparent1Input, ProfileUncheckedCreateWithoutCoupleAsGodparent1Input>
  }

  export type ProfileCreateWithoutCoupleAsGodparent2Input = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    gender: $Enums.Gender
    birthDate: Date | string
    phone: string
    email: string
    photo?: string | null
    instagram?: string | null
    facebook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProfileInput
    coupleAsMember1?: CoupleCreateNestedManyWithoutMember1Input
    coupleAsMember2?: CoupleCreateNestedManyWithoutMember2Input
    coupleAsGodparent1?: CoupleCreateNestedManyWithoutGodparent1Input
  }

  export type ProfileUncheckedCreateWithoutCoupleAsGodparent2Input = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    gender: $Enums.Gender
    birthDate: Date | string
    phone: string
    email: string
    photo?: string | null
    instagram?: string | null
    facebook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutProfileInput
    coupleAsMember1?: CoupleUncheckedCreateNestedManyWithoutMember1Input
    coupleAsMember2?: CoupleUncheckedCreateNestedManyWithoutMember2Input
    coupleAsGodparent1?: CoupleUncheckedCreateNestedManyWithoutGodparent1Input
  }

  export type ProfileCreateOrConnectWithoutCoupleAsGodparent2Input = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutCoupleAsGodparent2Input, ProfileUncheckedCreateWithoutCoupleAsGodparent2Input>
  }

  export type ParishCreateWithoutCouplesInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    createdAt?: Date | string
    updatedAt?: Date | string
    archdiocese: ArchdioceseCreateNestedOneWithoutParishesInput
    roles?: RoleAssignmentCreateNestedManyWithoutParishInput
    permissions?: PermissionCreateNestedManyWithoutParishInput
  }

  export type ParishUncheckedCreateWithoutCouplesInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    archdioceseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleAssignmentUncheckedCreateNestedManyWithoutParishInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutParishInput
  }

  export type ParishCreateOrConnectWithoutCouplesInput = {
    where: ParishWhereUniqueInput
    create: XOR<ParishCreateWithoutCouplesInput, ParishUncheckedCreateWithoutCouplesInput>
  }

  export type RoleAssignmentCreateWithoutCoupleInput = {
    id?: string
    role: $Enums.CoupleRole
    createdAt?: Date | string
    updatedAt?: Date | string
    archdiocese?: ArchdioceseCreateNestedOneWithoutRolesInput
    parish?: ParishCreateNestedOneWithoutRolesInput
  }

  export type RoleAssignmentUncheckedCreateWithoutCoupleInput = {
    id?: string
    role: $Enums.CoupleRole
    archdioceseId?: string | null
    parishId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleAssignmentCreateOrConnectWithoutCoupleInput = {
    where: RoleAssignmentWhereUniqueInput
    create: XOR<RoleAssignmentCreateWithoutCoupleInput, RoleAssignmentUncheckedCreateWithoutCoupleInput>
  }

  export type RoleAssignmentCreateManyCoupleInputEnvelope = {
    data: RoleAssignmentCreateManyCoupleInput | RoleAssignmentCreateManyCoupleInput[]
  }

  export type PermissionCreateWithoutCoupleInput = {
    id?: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPermissionsInput
    archdiocese?: ArchdioceseCreateNestedOneWithoutPermissionsInput
    parish?: ParishCreateNestedOneWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateWithoutCoupleInput = {
    id?: string
    userId: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    archdioceseId?: string | null
    parishId?: string | null
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateOrConnectWithoutCoupleInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutCoupleInput, PermissionUncheckedCreateWithoutCoupleInput>
  }

  export type PermissionCreateManyCoupleInputEnvelope = {
    data: PermissionCreateManyCoupleInput | PermissionCreateManyCoupleInput[]
  }

  export type ProfileUpsertWithoutCoupleAsMember1Input = {
    update: XOR<ProfileUpdateWithoutCoupleAsMember1Input, ProfileUncheckedUpdateWithoutCoupleAsMember1Input>
    create: XOR<ProfileCreateWithoutCoupleAsMember1Input, ProfileUncheckedCreateWithoutCoupleAsMember1Input>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutCoupleAsMember1Input = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutCoupleAsMember1Input, ProfileUncheckedUpdateWithoutCoupleAsMember1Input>
  }

  export type ProfileUpdateWithoutCoupleAsMember1Input = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProfileNestedInput
    coupleAsMember2?: CoupleUpdateManyWithoutMember2NestedInput
    coupleAsGodparent1?: CoupleUpdateManyWithoutGodparent1NestedInput
    coupleAsGodparent2?: CoupleUpdateManyWithoutGodparent2NestedInput
  }

  export type ProfileUncheckedUpdateWithoutCoupleAsMember1Input = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutProfileNestedInput
    coupleAsMember2?: CoupleUncheckedUpdateManyWithoutMember2NestedInput
    coupleAsGodparent1?: CoupleUncheckedUpdateManyWithoutGodparent1NestedInput
    coupleAsGodparent2?: CoupleUncheckedUpdateManyWithoutGodparent2NestedInput
  }

  export type ProfileUpsertWithoutCoupleAsMember2Input = {
    update: XOR<ProfileUpdateWithoutCoupleAsMember2Input, ProfileUncheckedUpdateWithoutCoupleAsMember2Input>
    create: XOR<ProfileCreateWithoutCoupleAsMember2Input, ProfileUncheckedCreateWithoutCoupleAsMember2Input>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutCoupleAsMember2Input = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutCoupleAsMember2Input, ProfileUncheckedUpdateWithoutCoupleAsMember2Input>
  }

  export type ProfileUpdateWithoutCoupleAsMember2Input = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProfileNestedInput
    coupleAsMember1?: CoupleUpdateManyWithoutMember1NestedInput
    coupleAsGodparent1?: CoupleUpdateManyWithoutGodparent1NestedInput
    coupleAsGodparent2?: CoupleUpdateManyWithoutGodparent2NestedInput
  }

  export type ProfileUncheckedUpdateWithoutCoupleAsMember2Input = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutProfileNestedInput
    coupleAsMember1?: CoupleUncheckedUpdateManyWithoutMember1NestedInput
    coupleAsGodparent1?: CoupleUncheckedUpdateManyWithoutGodparent1NestedInput
    coupleAsGodparent2?: CoupleUncheckedUpdateManyWithoutGodparent2NestedInput
  }

  export type ProfileUpsertWithoutCoupleAsGodparent1Input = {
    update: XOR<ProfileUpdateWithoutCoupleAsGodparent1Input, ProfileUncheckedUpdateWithoutCoupleAsGodparent1Input>
    create: XOR<ProfileCreateWithoutCoupleAsGodparent1Input, ProfileUncheckedCreateWithoutCoupleAsGodparent1Input>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutCoupleAsGodparent1Input = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutCoupleAsGodparent1Input, ProfileUncheckedUpdateWithoutCoupleAsGodparent1Input>
  }

  export type ProfileUpdateWithoutCoupleAsGodparent1Input = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProfileNestedInput
    coupleAsMember1?: CoupleUpdateManyWithoutMember1NestedInput
    coupleAsMember2?: CoupleUpdateManyWithoutMember2NestedInput
    coupleAsGodparent2?: CoupleUpdateManyWithoutGodparent2NestedInput
  }

  export type ProfileUncheckedUpdateWithoutCoupleAsGodparent1Input = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutProfileNestedInput
    coupleAsMember1?: CoupleUncheckedUpdateManyWithoutMember1NestedInput
    coupleAsMember2?: CoupleUncheckedUpdateManyWithoutMember2NestedInput
    coupleAsGodparent2?: CoupleUncheckedUpdateManyWithoutGodparent2NestedInput
  }

  export type ProfileUpsertWithoutCoupleAsGodparent2Input = {
    update: XOR<ProfileUpdateWithoutCoupleAsGodparent2Input, ProfileUncheckedUpdateWithoutCoupleAsGodparent2Input>
    create: XOR<ProfileCreateWithoutCoupleAsGodparent2Input, ProfileUncheckedCreateWithoutCoupleAsGodparent2Input>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutCoupleAsGodparent2Input = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutCoupleAsGodparent2Input, ProfileUncheckedUpdateWithoutCoupleAsGodparent2Input>
  }

  export type ProfileUpdateWithoutCoupleAsGodparent2Input = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProfileNestedInput
    coupleAsMember1?: CoupleUpdateManyWithoutMember1NestedInput
    coupleAsMember2?: CoupleUpdateManyWithoutMember2NestedInput
    coupleAsGodparent1?: CoupleUpdateManyWithoutGodparent1NestedInput
  }

  export type ProfileUncheckedUpdateWithoutCoupleAsGodparent2Input = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutProfileNestedInput
    coupleAsMember1?: CoupleUncheckedUpdateManyWithoutMember1NestedInput
    coupleAsMember2?: CoupleUncheckedUpdateManyWithoutMember2NestedInput
    coupleAsGodparent1?: CoupleUncheckedUpdateManyWithoutGodparent1NestedInput
  }

  export type ParishUpsertWithoutCouplesInput = {
    update: XOR<ParishUpdateWithoutCouplesInput, ParishUncheckedUpdateWithoutCouplesInput>
    create: XOR<ParishCreateWithoutCouplesInput, ParishUncheckedCreateWithoutCouplesInput>
    where?: ParishWhereInput
  }

  export type ParishUpdateToOneWithWhereWithoutCouplesInput = {
    where?: ParishWhereInput
    data: XOR<ParishUpdateWithoutCouplesInput, ParishUncheckedUpdateWithoutCouplesInput>
  }

  export type ParishUpdateWithoutCouplesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archdiocese?: ArchdioceseUpdateOneRequiredWithoutParishesNestedInput
    roles?: RoleAssignmentUpdateManyWithoutParishNestedInput
    permissions?: PermissionUpdateManyWithoutParishNestedInput
  }

  export type ParishUncheckedUpdateWithoutCouplesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    archdioceseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleAssignmentUncheckedUpdateManyWithoutParishNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutParishNestedInput
  }

  export type RoleAssignmentUpsertWithWhereUniqueWithoutCoupleInput = {
    where: RoleAssignmentWhereUniqueInput
    update: XOR<RoleAssignmentUpdateWithoutCoupleInput, RoleAssignmentUncheckedUpdateWithoutCoupleInput>
    create: XOR<RoleAssignmentCreateWithoutCoupleInput, RoleAssignmentUncheckedCreateWithoutCoupleInput>
  }

  export type RoleAssignmentUpdateWithWhereUniqueWithoutCoupleInput = {
    where: RoleAssignmentWhereUniqueInput
    data: XOR<RoleAssignmentUpdateWithoutCoupleInput, RoleAssignmentUncheckedUpdateWithoutCoupleInput>
  }

  export type RoleAssignmentUpdateManyWithWhereWithoutCoupleInput = {
    where: RoleAssignmentScalarWhereInput
    data: XOR<RoleAssignmentUpdateManyMutationInput, RoleAssignmentUncheckedUpdateManyWithoutCoupleInput>
  }

  export type PermissionUpsertWithWhereUniqueWithoutCoupleInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutCoupleInput, PermissionUncheckedUpdateWithoutCoupleInput>
    create: XOR<PermissionCreateWithoutCoupleInput, PermissionUncheckedCreateWithoutCoupleInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutCoupleInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutCoupleInput, PermissionUncheckedUpdateWithoutCoupleInput>
  }

  export type PermissionUpdateManyWithWhereWithoutCoupleInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutCoupleInput>
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: PermissionCreateNestedManyWithoutUserInput
    dataAccessLogs?: DataAccessLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: PermissionUncheckedCreateNestedManyWithoutUserInput
    dataAccessLogs?: DataAccessLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type CoupleCreateWithoutMember1Input = {
    id?: string
    marriageDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    member2: ProfileCreateNestedOneWithoutCoupleAsMember2Input
    godparent1?: ProfileCreateNestedOneWithoutCoupleAsGodparent1Input
    godparent2?: ProfileCreateNestedOneWithoutCoupleAsGodparent2Input
    parish: ParishCreateNestedOneWithoutCouplesInput
    roles?: RoleAssignmentCreateNestedManyWithoutCoupleInput
    permissions?: PermissionCreateNestedManyWithoutCoupleInput
  }

  export type CoupleUncheckedCreateWithoutMember1Input = {
    id?: string
    member2Id: string
    godparent1Id?: string | null
    godparent2Id?: string | null
    marriageDate: Date | string
    parishId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleAssignmentUncheckedCreateNestedManyWithoutCoupleInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutCoupleInput
  }

  export type CoupleCreateOrConnectWithoutMember1Input = {
    where: CoupleWhereUniqueInput
    create: XOR<CoupleCreateWithoutMember1Input, CoupleUncheckedCreateWithoutMember1Input>
  }

  export type CoupleCreateManyMember1InputEnvelope = {
    data: CoupleCreateManyMember1Input | CoupleCreateManyMember1Input[]
  }

  export type CoupleCreateWithoutMember2Input = {
    id?: string
    marriageDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    member1: ProfileCreateNestedOneWithoutCoupleAsMember1Input
    godparent1?: ProfileCreateNestedOneWithoutCoupleAsGodparent1Input
    godparent2?: ProfileCreateNestedOneWithoutCoupleAsGodparent2Input
    parish: ParishCreateNestedOneWithoutCouplesInput
    roles?: RoleAssignmentCreateNestedManyWithoutCoupleInput
    permissions?: PermissionCreateNestedManyWithoutCoupleInput
  }

  export type CoupleUncheckedCreateWithoutMember2Input = {
    id?: string
    member1Id: string
    godparent1Id?: string | null
    godparent2Id?: string | null
    marriageDate: Date | string
    parishId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleAssignmentUncheckedCreateNestedManyWithoutCoupleInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutCoupleInput
  }

  export type CoupleCreateOrConnectWithoutMember2Input = {
    where: CoupleWhereUniqueInput
    create: XOR<CoupleCreateWithoutMember2Input, CoupleUncheckedCreateWithoutMember2Input>
  }

  export type CoupleCreateManyMember2InputEnvelope = {
    data: CoupleCreateManyMember2Input | CoupleCreateManyMember2Input[]
  }

  export type CoupleCreateWithoutGodparent1Input = {
    id?: string
    marriageDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    member1: ProfileCreateNestedOneWithoutCoupleAsMember1Input
    member2: ProfileCreateNestedOneWithoutCoupleAsMember2Input
    godparent2?: ProfileCreateNestedOneWithoutCoupleAsGodparent2Input
    parish: ParishCreateNestedOneWithoutCouplesInput
    roles?: RoleAssignmentCreateNestedManyWithoutCoupleInput
    permissions?: PermissionCreateNestedManyWithoutCoupleInput
  }

  export type CoupleUncheckedCreateWithoutGodparent1Input = {
    id?: string
    member1Id: string
    member2Id: string
    godparent2Id?: string | null
    marriageDate: Date | string
    parishId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleAssignmentUncheckedCreateNestedManyWithoutCoupleInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutCoupleInput
  }

  export type CoupleCreateOrConnectWithoutGodparent1Input = {
    where: CoupleWhereUniqueInput
    create: XOR<CoupleCreateWithoutGodparent1Input, CoupleUncheckedCreateWithoutGodparent1Input>
  }

  export type CoupleCreateManyGodparent1InputEnvelope = {
    data: CoupleCreateManyGodparent1Input | CoupleCreateManyGodparent1Input[]
  }

  export type CoupleCreateWithoutGodparent2Input = {
    id?: string
    marriageDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    member1: ProfileCreateNestedOneWithoutCoupleAsMember1Input
    member2: ProfileCreateNestedOneWithoutCoupleAsMember2Input
    godparent1?: ProfileCreateNestedOneWithoutCoupleAsGodparent1Input
    parish: ParishCreateNestedOneWithoutCouplesInput
    roles?: RoleAssignmentCreateNestedManyWithoutCoupleInput
    permissions?: PermissionCreateNestedManyWithoutCoupleInput
  }

  export type CoupleUncheckedCreateWithoutGodparent2Input = {
    id?: string
    member1Id: string
    member2Id: string
    godparent1Id?: string | null
    marriageDate: Date | string
    parishId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleAssignmentUncheckedCreateNestedManyWithoutCoupleInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutCoupleInput
  }

  export type CoupleCreateOrConnectWithoutGodparent2Input = {
    where: CoupleWhereUniqueInput
    create: XOR<CoupleCreateWithoutGodparent2Input, CoupleUncheckedCreateWithoutGodparent2Input>
  }

  export type CoupleCreateManyGodparent2InputEnvelope = {
    data: CoupleCreateManyGodparent2Input | CoupleCreateManyGodparent2Input[]
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUpdateManyWithoutUserNestedInput
    dataAccessLogs?: DataAccessLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUncheckedUpdateManyWithoutUserNestedInput
    dataAccessLogs?: DataAccessLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CoupleUpsertWithWhereUniqueWithoutMember1Input = {
    where: CoupleWhereUniqueInput
    update: XOR<CoupleUpdateWithoutMember1Input, CoupleUncheckedUpdateWithoutMember1Input>
    create: XOR<CoupleCreateWithoutMember1Input, CoupleUncheckedCreateWithoutMember1Input>
  }

  export type CoupleUpdateWithWhereUniqueWithoutMember1Input = {
    where: CoupleWhereUniqueInput
    data: XOR<CoupleUpdateWithoutMember1Input, CoupleUncheckedUpdateWithoutMember1Input>
  }

  export type CoupleUpdateManyWithWhereWithoutMember1Input = {
    where: CoupleScalarWhereInput
    data: XOR<CoupleUpdateManyMutationInput, CoupleUncheckedUpdateManyWithoutMember1Input>
  }

  export type CoupleUpsertWithWhereUniqueWithoutMember2Input = {
    where: CoupleWhereUniqueInput
    update: XOR<CoupleUpdateWithoutMember2Input, CoupleUncheckedUpdateWithoutMember2Input>
    create: XOR<CoupleCreateWithoutMember2Input, CoupleUncheckedCreateWithoutMember2Input>
  }

  export type CoupleUpdateWithWhereUniqueWithoutMember2Input = {
    where: CoupleWhereUniqueInput
    data: XOR<CoupleUpdateWithoutMember2Input, CoupleUncheckedUpdateWithoutMember2Input>
  }

  export type CoupleUpdateManyWithWhereWithoutMember2Input = {
    where: CoupleScalarWhereInput
    data: XOR<CoupleUpdateManyMutationInput, CoupleUncheckedUpdateManyWithoutMember2Input>
  }

  export type CoupleUpsertWithWhereUniqueWithoutGodparent1Input = {
    where: CoupleWhereUniqueInput
    update: XOR<CoupleUpdateWithoutGodparent1Input, CoupleUncheckedUpdateWithoutGodparent1Input>
    create: XOR<CoupleCreateWithoutGodparent1Input, CoupleUncheckedCreateWithoutGodparent1Input>
  }

  export type CoupleUpdateWithWhereUniqueWithoutGodparent1Input = {
    where: CoupleWhereUniqueInput
    data: XOR<CoupleUpdateWithoutGodparent1Input, CoupleUncheckedUpdateWithoutGodparent1Input>
  }

  export type CoupleUpdateManyWithWhereWithoutGodparent1Input = {
    where: CoupleScalarWhereInput
    data: XOR<CoupleUpdateManyMutationInput, CoupleUncheckedUpdateManyWithoutGodparent1Input>
  }

  export type CoupleUpsertWithWhereUniqueWithoutGodparent2Input = {
    where: CoupleWhereUniqueInput
    update: XOR<CoupleUpdateWithoutGodparent2Input, CoupleUncheckedUpdateWithoutGodparent2Input>
    create: XOR<CoupleCreateWithoutGodparent2Input, CoupleUncheckedCreateWithoutGodparent2Input>
  }

  export type CoupleUpdateWithWhereUniqueWithoutGodparent2Input = {
    where: CoupleWhereUniqueInput
    data: XOR<CoupleUpdateWithoutGodparent2Input, CoupleUncheckedUpdateWithoutGodparent2Input>
  }

  export type CoupleUpdateManyWithWhereWithoutGodparent2Input = {
    where: CoupleScalarWhereInput
    data: XOR<CoupleUpdateManyMutationInput, CoupleUncheckedUpdateManyWithoutGodparent2Input>
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    gender: $Enums.Gender
    birthDate: Date | string
    phone: string
    email: string
    photo?: string | null
    instagram?: string | null
    facebook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coupleAsMember1?: CoupleCreateNestedManyWithoutMember1Input
    coupleAsMember2?: CoupleCreateNestedManyWithoutMember2Input
    coupleAsGodparent1?: CoupleCreateNestedManyWithoutGodparent1Input
    coupleAsGodparent2?: CoupleCreateNestedManyWithoutGodparent2Input
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    gender: $Enums.Gender
    birthDate: Date | string
    phone: string
    email: string
    photo?: string | null
    instagram?: string | null
    facebook?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coupleAsMember1?: CoupleUncheckedCreateNestedManyWithoutMember1Input
    coupleAsMember2?: CoupleUncheckedCreateNestedManyWithoutMember2Input
    coupleAsGodparent1?: CoupleUncheckedCreateNestedManyWithoutGodparent1Input
    coupleAsGodparent2?: CoupleUncheckedCreateNestedManyWithoutGodparent2Input
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type PermissionCreateWithoutUserInput = {
    id?: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    archdiocese?: ArchdioceseCreateNestedOneWithoutPermissionsInput
    parish?: ParishCreateNestedOneWithoutPermissionsInput
    couple?: CoupleCreateNestedOneWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateWithoutUserInput = {
    id?: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    archdioceseId?: string | null
    parishId?: string | null
    coupleId?: string | null
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateOrConnectWithoutUserInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutUserInput, PermissionUncheckedCreateWithoutUserInput>
  }

  export type PermissionCreateManyUserInputEnvelope = {
    data: PermissionCreateManyUserInput | PermissionCreateManyUserInput[]
  }

  export type DataAccessLogCreateWithoutUserInput = {
    id?: string
    entity: $Enums.DataAccessEntity
    entityId: string
    action: $Enums.DataAccessAction
    ipAddress?: string | null
    userAgent?: string | null
    success?: boolean
    errorMessage?: string | null
    requestData?: InputJsonValue | null
    responseData?: InputJsonValue | null
    timestamp?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataAccessLogUncheckedCreateWithoutUserInput = {
    id?: string
    entity: $Enums.DataAccessEntity
    entityId: string
    action: $Enums.DataAccessAction
    ipAddress?: string | null
    userAgent?: string | null
    success?: boolean
    errorMessage?: string | null
    requestData?: InputJsonValue | null
    responseData?: InputJsonValue | null
    timestamp?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataAccessLogCreateOrConnectWithoutUserInput = {
    where: DataAccessLogWhereUniqueInput
    create: XOR<DataAccessLogCreateWithoutUserInput, DataAccessLogUncheckedCreateWithoutUserInput>
  }

  export type DataAccessLogCreateManyUserInputEnvelope = {
    data: DataAccessLogCreateManyUserInput | DataAccessLogCreateManyUserInput[]
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupleAsMember1?: CoupleUpdateManyWithoutMember1NestedInput
    coupleAsMember2?: CoupleUpdateManyWithoutMember2NestedInput
    coupleAsGodparent1?: CoupleUpdateManyWithoutGodparent1NestedInput
    coupleAsGodparent2?: CoupleUpdateManyWithoutGodparent2NestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupleAsMember1?: CoupleUncheckedUpdateManyWithoutMember1NestedInput
    coupleAsMember2?: CoupleUncheckedUpdateManyWithoutMember2NestedInput
    coupleAsGodparent1?: CoupleUncheckedUpdateManyWithoutGodparent1NestedInput
    coupleAsGodparent2?: CoupleUncheckedUpdateManyWithoutGodparent2NestedInput
  }

  export type PermissionUpsertWithWhereUniqueWithoutUserInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutUserInput, PermissionUncheckedUpdateWithoutUserInput>
    create: XOR<PermissionCreateWithoutUserInput, PermissionUncheckedCreateWithoutUserInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutUserInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutUserInput, PermissionUncheckedUpdateWithoutUserInput>
  }

  export type PermissionUpdateManyWithWhereWithoutUserInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutUserInput>
  }

  export type DataAccessLogUpsertWithWhereUniqueWithoutUserInput = {
    where: DataAccessLogWhereUniqueInput
    update: XOR<DataAccessLogUpdateWithoutUserInput, DataAccessLogUncheckedUpdateWithoutUserInput>
    create: XOR<DataAccessLogCreateWithoutUserInput, DataAccessLogUncheckedCreateWithoutUserInput>
  }

  export type DataAccessLogUpdateWithWhereUniqueWithoutUserInput = {
    where: DataAccessLogWhereUniqueInput
    data: XOR<DataAccessLogUpdateWithoutUserInput, DataAccessLogUncheckedUpdateWithoutUserInput>
  }

  export type DataAccessLogUpdateManyWithWhereWithoutUserInput = {
    where: DataAccessLogScalarWhereInput
    data: XOR<DataAccessLogUpdateManyMutationInput, DataAccessLogUncheckedUpdateManyWithoutUserInput>
  }

  export type DataAccessLogScalarWhereInput = {
    AND?: DataAccessLogScalarWhereInput | DataAccessLogScalarWhereInput[]
    OR?: DataAccessLogScalarWhereInput[]
    NOT?: DataAccessLogScalarWhereInput | DataAccessLogScalarWhereInput[]
    id?: StringFilter<"DataAccessLog"> | string
    entity?: EnumDataAccessEntityFilter<"DataAccessLog"> | $Enums.DataAccessEntity
    entityId?: StringFilter<"DataAccessLog"> | string
    action?: EnumDataAccessActionFilter<"DataAccessLog"> | $Enums.DataAccessAction
    userId?: StringNullableFilter<"DataAccessLog"> | string | null
    ipAddress?: StringNullableFilter<"DataAccessLog"> | string | null
    userAgent?: StringNullableFilter<"DataAccessLog"> | string | null
    success?: BoolFilter<"DataAccessLog"> | boolean
    errorMessage?: StringNullableFilter<"DataAccessLog"> | string | null
    requestData?: JsonNullableFilter<"DataAccessLog">
    responseData?: JsonNullableFilter<"DataAccessLog">
    timestamp?: DateTimeFilter<"DataAccessLog"> | Date | string
    createdAt?: DateTimeFilter<"DataAccessLog"> | Date | string
    updatedAt?: DateTimeFilter<"DataAccessLog"> | Date | string
  }

  export type CoupleCreateWithoutRolesInput = {
    id?: string
    marriageDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    member1: ProfileCreateNestedOneWithoutCoupleAsMember1Input
    member2: ProfileCreateNestedOneWithoutCoupleAsMember2Input
    godparent1?: ProfileCreateNestedOneWithoutCoupleAsGodparent1Input
    godparent2?: ProfileCreateNestedOneWithoutCoupleAsGodparent2Input
    parish: ParishCreateNestedOneWithoutCouplesInput
    permissions?: PermissionCreateNestedManyWithoutCoupleInput
  }

  export type CoupleUncheckedCreateWithoutRolesInput = {
    id?: string
    member1Id: string
    member2Id: string
    godparent1Id?: string | null
    godparent2Id?: string | null
    marriageDate: Date | string
    parishId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: PermissionUncheckedCreateNestedManyWithoutCoupleInput
  }

  export type CoupleCreateOrConnectWithoutRolesInput = {
    where: CoupleWhereUniqueInput
    create: XOR<CoupleCreateWithoutRolesInput, CoupleUncheckedCreateWithoutRolesInput>
  }

  export type ArchdioceseCreateWithoutRolesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parishes?: ParishCreateNestedManyWithoutArchdioceseInput
    permissions?: PermissionCreateNestedManyWithoutArchdioceseInput
  }

  export type ArchdioceseUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parishes?: ParishUncheckedCreateNestedManyWithoutArchdioceseInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutArchdioceseInput
  }

  export type ArchdioceseCreateOrConnectWithoutRolesInput = {
    where: ArchdioceseWhereUniqueInput
    create: XOR<ArchdioceseCreateWithoutRolesInput, ArchdioceseUncheckedCreateWithoutRolesInput>
  }

  export type ParishCreateWithoutRolesInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    createdAt?: Date | string
    updatedAt?: Date | string
    archdiocese: ArchdioceseCreateNestedOneWithoutParishesInput
    couples?: CoupleCreateNestedManyWithoutParishInput
    permissions?: PermissionCreateNestedManyWithoutParishInput
  }

  export type ParishUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    archdioceseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    couples?: CoupleUncheckedCreateNestedManyWithoutParishInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutParishInput
  }

  export type ParishCreateOrConnectWithoutRolesInput = {
    where: ParishWhereUniqueInput
    create: XOR<ParishCreateWithoutRolesInput, ParishUncheckedCreateWithoutRolesInput>
  }

  export type CoupleUpsertWithoutRolesInput = {
    update: XOR<CoupleUpdateWithoutRolesInput, CoupleUncheckedUpdateWithoutRolesInput>
    create: XOR<CoupleCreateWithoutRolesInput, CoupleUncheckedCreateWithoutRolesInput>
    where?: CoupleWhereInput
  }

  export type CoupleUpdateToOneWithWhereWithoutRolesInput = {
    where?: CoupleWhereInput
    data: XOR<CoupleUpdateWithoutRolesInput, CoupleUncheckedUpdateWithoutRolesInput>
  }

  export type CoupleUpdateWithoutRolesInput = {
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member1?: ProfileUpdateOneRequiredWithoutCoupleAsMember1NestedInput
    member2?: ProfileUpdateOneRequiredWithoutCoupleAsMember2NestedInput
    godparent1?: ProfileUpdateOneWithoutCoupleAsGodparent1NestedInput
    godparent2?: ProfileUpdateOneWithoutCoupleAsGodparent2NestedInput
    parish?: ParishUpdateOneRequiredWithoutCouplesNestedInput
    permissions?: PermissionUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleUncheckedUpdateWithoutRolesInput = {
    member1Id?: StringFieldUpdateOperationsInput | string
    member2Id?: StringFieldUpdateOperationsInput | string
    godparent1Id?: NullableStringFieldUpdateOperationsInput | string | null
    godparent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    parishId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUncheckedUpdateManyWithoutCoupleNestedInput
  }

  export type ArchdioceseUpsertWithoutRolesInput = {
    update: XOR<ArchdioceseUpdateWithoutRolesInput, ArchdioceseUncheckedUpdateWithoutRolesInput>
    create: XOR<ArchdioceseCreateWithoutRolesInput, ArchdioceseUncheckedCreateWithoutRolesInput>
    where?: ArchdioceseWhereInput
  }

  export type ArchdioceseUpdateToOneWithWhereWithoutRolesInput = {
    where?: ArchdioceseWhereInput
    data: XOR<ArchdioceseUpdateWithoutRolesInput, ArchdioceseUncheckedUpdateWithoutRolesInput>
  }

  export type ArchdioceseUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parishes?: ParishUpdateManyWithoutArchdioceseNestedInput
    permissions?: PermissionUpdateManyWithoutArchdioceseNestedInput
  }

  export type ArchdioceseUncheckedUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parishes?: ParishUncheckedUpdateManyWithoutArchdioceseNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutArchdioceseNestedInput
  }

  export type ParishUpsertWithoutRolesInput = {
    update: XOR<ParishUpdateWithoutRolesInput, ParishUncheckedUpdateWithoutRolesInput>
    create: XOR<ParishCreateWithoutRolesInput, ParishUncheckedCreateWithoutRolesInput>
    where?: ParishWhereInput
  }

  export type ParishUpdateToOneWithWhereWithoutRolesInput = {
    where?: ParishWhereInput
    data: XOR<ParishUpdateWithoutRolesInput, ParishUncheckedUpdateWithoutRolesInput>
  }

  export type ParishUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archdiocese?: ArchdioceseUpdateOneRequiredWithoutParishesNestedInput
    couples?: CoupleUpdateManyWithoutParishNestedInput
    permissions?: PermissionUpdateManyWithoutParishNestedInput
  }

  export type ParishUncheckedUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    archdioceseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couples?: CoupleUncheckedUpdateManyWithoutParishNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutParishNestedInput
  }

  export type UserCreateWithoutPermissionsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutUserInput
    dataAccessLogs?: DataAccessLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPermissionsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dataAccessLogs?: DataAccessLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPermissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
  }

  export type ArchdioceseCreateWithoutPermissionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parishes?: ParishCreateNestedManyWithoutArchdioceseInput
    roles?: RoleAssignmentCreateNestedManyWithoutArchdioceseInput
  }

  export type ArchdioceseUncheckedCreateWithoutPermissionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parishes?: ParishUncheckedCreateNestedManyWithoutArchdioceseInput
    roles?: RoleAssignmentUncheckedCreateNestedManyWithoutArchdioceseInput
  }

  export type ArchdioceseCreateOrConnectWithoutPermissionsInput = {
    where: ArchdioceseWhereUniqueInput
    create: XOR<ArchdioceseCreateWithoutPermissionsInput, ArchdioceseUncheckedCreateWithoutPermissionsInput>
  }

  export type ParishCreateWithoutPermissionsInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    createdAt?: Date | string
    updatedAt?: Date | string
    archdiocese: ArchdioceseCreateNestedOneWithoutParishesInput
    couples?: CoupleCreateNestedManyWithoutParishInput
    roles?: RoleAssignmentCreateNestedManyWithoutParishInput
  }

  export type ParishUncheckedCreateWithoutPermissionsInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    archdioceseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    couples?: CoupleUncheckedCreateNestedManyWithoutParishInput
    roles?: RoleAssignmentUncheckedCreateNestedManyWithoutParishInput
  }

  export type ParishCreateOrConnectWithoutPermissionsInput = {
    where: ParishWhereUniqueInput
    create: XOR<ParishCreateWithoutPermissionsInput, ParishUncheckedCreateWithoutPermissionsInput>
  }

  export type CoupleCreateWithoutPermissionsInput = {
    id?: string
    marriageDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    member1: ProfileCreateNestedOneWithoutCoupleAsMember1Input
    member2: ProfileCreateNestedOneWithoutCoupleAsMember2Input
    godparent1?: ProfileCreateNestedOneWithoutCoupleAsGodparent1Input
    godparent2?: ProfileCreateNestedOneWithoutCoupleAsGodparent2Input
    parish: ParishCreateNestedOneWithoutCouplesInput
    roles?: RoleAssignmentCreateNestedManyWithoutCoupleInput
  }

  export type CoupleUncheckedCreateWithoutPermissionsInput = {
    id?: string
    member1Id: string
    member2Id: string
    godparent1Id?: string | null
    godparent2Id?: string | null
    marriageDate: Date | string
    parishId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleAssignmentUncheckedCreateNestedManyWithoutCoupleInput
  }

  export type CoupleCreateOrConnectWithoutPermissionsInput = {
    where: CoupleWhereUniqueInput
    create: XOR<CoupleCreateWithoutPermissionsInput, CoupleUncheckedCreateWithoutPermissionsInput>
  }

  export type UserUpsertWithoutPermissionsInput = {
    update: XOR<UserUpdateWithoutPermissionsInput, UserUncheckedUpdateWithoutPermissionsInput>
    create: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPermissionsInput, UserUncheckedUpdateWithoutPermissionsInput>
  }

  export type UserUpdateWithoutPermissionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutUserNestedInput
    dataAccessLogs?: DataAccessLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPermissionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAccessLogs?: DataAccessLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArchdioceseUpsertWithoutPermissionsInput = {
    update: XOR<ArchdioceseUpdateWithoutPermissionsInput, ArchdioceseUncheckedUpdateWithoutPermissionsInput>
    create: XOR<ArchdioceseCreateWithoutPermissionsInput, ArchdioceseUncheckedCreateWithoutPermissionsInput>
    where?: ArchdioceseWhereInput
  }

  export type ArchdioceseUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: ArchdioceseWhereInput
    data: XOR<ArchdioceseUpdateWithoutPermissionsInput, ArchdioceseUncheckedUpdateWithoutPermissionsInput>
  }

  export type ArchdioceseUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parishes?: ParishUpdateManyWithoutArchdioceseNestedInput
    roles?: RoleAssignmentUpdateManyWithoutArchdioceseNestedInput
  }

  export type ArchdioceseUncheckedUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parishes?: ParishUncheckedUpdateManyWithoutArchdioceseNestedInput
    roles?: RoleAssignmentUncheckedUpdateManyWithoutArchdioceseNestedInput
  }

  export type ParishUpsertWithoutPermissionsInput = {
    update: XOR<ParishUpdateWithoutPermissionsInput, ParishUncheckedUpdateWithoutPermissionsInput>
    create: XOR<ParishCreateWithoutPermissionsInput, ParishUncheckedCreateWithoutPermissionsInput>
    where?: ParishWhereInput
  }

  export type ParishUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: ParishWhereInput
    data: XOR<ParishUpdateWithoutPermissionsInput, ParishUncheckedUpdateWithoutPermissionsInput>
  }

  export type ParishUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archdiocese?: ArchdioceseUpdateOneRequiredWithoutParishesNestedInput
    couples?: CoupleUpdateManyWithoutParishNestedInput
    roles?: RoleAssignmentUpdateManyWithoutParishNestedInput
  }

  export type ParishUncheckedUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    archdioceseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couples?: CoupleUncheckedUpdateManyWithoutParishNestedInput
    roles?: RoleAssignmentUncheckedUpdateManyWithoutParishNestedInput
  }

  export type CoupleUpsertWithoutPermissionsInput = {
    update: XOR<CoupleUpdateWithoutPermissionsInput, CoupleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<CoupleCreateWithoutPermissionsInput, CoupleUncheckedCreateWithoutPermissionsInput>
    where?: CoupleWhereInput
  }

  export type CoupleUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: CoupleWhereInput
    data: XOR<CoupleUpdateWithoutPermissionsInput, CoupleUncheckedUpdateWithoutPermissionsInput>
  }

  export type CoupleUpdateWithoutPermissionsInput = {
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member1?: ProfileUpdateOneRequiredWithoutCoupleAsMember1NestedInput
    member2?: ProfileUpdateOneRequiredWithoutCoupleAsMember2NestedInput
    godparent1?: ProfileUpdateOneWithoutCoupleAsGodparent1NestedInput
    godparent2?: ProfileUpdateOneWithoutCoupleAsGodparent2NestedInput
    parish?: ParishUpdateOneRequiredWithoutCouplesNestedInput
    roles?: RoleAssignmentUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleUncheckedUpdateWithoutPermissionsInput = {
    member1Id?: StringFieldUpdateOperationsInput | string
    member2Id?: StringFieldUpdateOperationsInput | string
    godparent1Id?: NullableStringFieldUpdateOperationsInput | string | null
    godparent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    parishId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleAssignmentUncheckedUpdateManyWithoutCoupleNestedInput
  }

  export type UserCreateWithoutDataAccessLogsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutUserInput
    permissions?: PermissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDataAccessLogsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: PermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDataAccessLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDataAccessLogsInput, UserUncheckedCreateWithoutDataAccessLogsInput>
  }

  export type UserUpsertWithoutDataAccessLogsInput = {
    update: XOR<UserUpdateWithoutDataAccessLogsInput, UserUncheckedUpdateWithoutDataAccessLogsInput>
    create: XOR<UserCreateWithoutDataAccessLogsInput, UserUncheckedCreateWithoutDataAccessLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDataAccessLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDataAccessLogsInput, UserUncheckedUpdateWithoutDataAccessLogsInput>
  }

  export type UserUpdateWithoutDataAccessLogsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutUserNestedInput
    permissions?: PermissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDataAccessLogsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParishCreateManyArchdioceseInput = {
    id?: string
    name: string
    address: XOR<AddressCreateEnvelopeInput, AddressCreateInput>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleAssignmentCreateManyArchdioceseInput = {
    id?: string
    role: $Enums.CoupleRole
    coupleId: string
    parishId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateManyArchdioceseInput = {
    id?: string
    userId: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    parishId?: string | null
    coupleId?: string | null
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParishUpdateWithoutArchdioceseInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couples?: CoupleUpdateManyWithoutParishNestedInput
    roles?: RoleAssignmentUpdateManyWithoutParishNestedInput
    permissions?: PermissionUpdateManyWithoutParishNestedInput
  }

  export type ParishUncheckedUpdateWithoutArchdioceseInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couples?: CoupleUncheckedUpdateManyWithoutParishNestedInput
    roles?: RoleAssignmentUncheckedUpdateManyWithoutParishNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutParishNestedInput
  }

  export type ParishUncheckedUpdateManyWithoutArchdioceseInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressUpdateEnvelopeInput, AddressCreateInput>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleAssignmentUpdateWithoutArchdioceseInput = {
    role?: EnumCoupleRoleFieldUpdateOperationsInput | $Enums.CoupleRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couple?: CoupleUpdateOneRequiredWithoutRolesNestedInput
    parish?: ParishUpdateOneWithoutRolesNestedInput
  }

  export type RoleAssignmentUncheckedUpdateWithoutArchdioceseInput = {
    role?: EnumCoupleRoleFieldUpdateOperationsInput | $Enums.CoupleRole
    coupleId?: StringFieldUpdateOperationsInput | string
    parishId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleAssignmentUncheckedUpdateManyWithoutArchdioceseInput = {
    role?: EnumCoupleRoleFieldUpdateOperationsInput | $Enums.CoupleRole
    coupleId?: StringFieldUpdateOperationsInput | string
    parishId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUpdateWithoutArchdioceseInput = {
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPermissionsNestedInput
    parish?: ParishUpdateOneWithoutPermissionsNestedInput
    couple?: CoupleUpdateOneWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateWithoutArchdioceseInput = {
    userId?: StringFieldUpdateOperationsInput | string
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    parishId?: NullableStringFieldUpdateOperationsInput | string | null
    coupleId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyWithoutArchdioceseInput = {
    userId?: StringFieldUpdateOperationsInput | string
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    parishId?: NullableStringFieldUpdateOperationsInput | string | null
    coupleId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupleCreateManyParishInput = {
    id?: string
    member1Id: string
    member2Id: string
    godparent1Id?: string | null
    godparent2Id?: string | null
    marriageDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleAssignmentCreateManyParishInput = {
    id?: string
    role: $Enums.CoupleRole
    coupleId: string
    archdioceseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateManyParishInput = {
    id?: string
    userId: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    archdioceseId?: string | null
    coupleId?: string | null
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoupleUpdateWithoutParishInput = {
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member1?: ProfileUpdateOneRequiredWithoutCoupleAsMember1NestedInput
    member2?: ProfileUpdateOneRequiredWithoutCoupleAsMember2NestedInput
    godparent1?: ProfileUpdateOneWithoutCoupleAsGodparent1NestedInput
    godparent2?: ProfileUpdateOneWithoutCoupleAsGodparent2NestedInput
    roles?: RoleAssignmentUpdateManyWithoutCoupleNestedInput
    permissions?: PermissionUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleUncheckedUpdateWithoutParishInput = {
    member1Id?: StringFieldUpdateOperationsInput | string
    member2Id?: StringFieldUpdateOperationsInput | string
    godparent1Id?: NullableStringFieldUpdateOperationsInput | string | null
    godparent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleAssignmentUncheckedUpdateManyWithoutCoupleNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleUncheckedUpdateManyWithoutParishInput = {
    member1Id?: StringFieldUpdateOperationsInput | string
    member2Id?: StringFieldUpdateOperationsInput | string
    godparent1Id?: NullableStringFieldUpdateOperationsInput | string | null
    godparent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleAssignmentUpdateWithoutParishInput = {
    role?: EnumCoupleRoleFieldUpdateOperationsInput | $Enums.CoupleRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couple?: CoupleUpdateOneRequiredWithoutRolesNestedInput
    archdiocese?: ArchdioceseUpdateOneWithoutRolesNestedInput
  }

  export type RoleAssignmentUncheckedUpdateWithoutParishInput = {
    role?: EnumCoupleRoleFieldUpdateOperationsInput | $Enums.CoupleRole
    coupleId?: StringFieldUpdateOperationsInput | string
    archdioceseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleAssignmentUncheckedUpdateManyWithoutParishInput = {
    role?: EnumCoupleRoleFieldUpdateOperationsInput | $Enums.CoupleRole
    coupleId?: StringFieldUpdateOperationsInput | string
    archdioceseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUpdateWithoutParishInput = {
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPermissionsNestedInput
    archdiocese?: ArchdioceseUpdateOneWithoutPermissionsNestedInput
    couple?: CoupleUpdateOneWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateWithoutParishInput = {
    userId?: StringFieldUpdateOperationsInput | string
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    archdioceseId?: NullableStringFieldUpdateOperationsInput | string | null
    coupleId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyWithoutParishInput = {
    userId?: StringFieldUpdateOperationsInput | string
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    archdioceseId?: NullableStringFieldUpdateOperationsInput | string | null
    coupleId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleAssignmentCreateManyCoupleInput = {
    id?: string
    role: $Enums.CoupleRole
    archdioceseId?: string | null
    parishId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateManyCoupleInput = {
    id?: string
    userId: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    archdioceseId?: string | null
    parishId?: string | null
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleAssignmentUpdateWithoutCoupleInput = {
    role?: EnumCoupleRoleFieldUpdateOperationsInput | $Enums.CoupleRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archdiocese?: ArchdioceseUpdateOneWithoutRolesNestedInput
    parish?: ParishUpdateOneWithoutRolesNestedInput
  }

  export type RoleAssignmentUncheckedUpdateWithoutCoupleInput = {
    role?: EnumCoupleRoleFieldUpdateOperationsInput | $Enums.CoupleRole
    archdioceseId?: NullableStringFieldUpdateOperationsInput | string | null
    parishId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleAssignmentUncheckedUpdateManyWithoutCoupleInput = {
    role?: EnumCoupleRoleFieldUpdateOperationsInput | $Enums.CoupleRole
    archdioceseId?: NullableStringFieldUpdateOperationsInput | string | null
    parishId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUpdateWithoutCoupleInput = {
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPermissionsNestedInput
    archdiocese?: ArchdioceseUpdateOneWithoutPermissionsNestedInput
    parish?: ParishUpdateOneWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateWithoutCoupleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    archdioceseId?: NullableStringFieldUpdateOperationsInput | string | null
    parishId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyWithoutCoupleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    archdioceseId?: NullableStringFieldUpdateOperationsInput | string | null
    parishId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupleCreateManyMember1Input = {
    id?: string
    member2Id: string
    godparent1Id?: string | null
    godparent2Id?: string | null
    marriageDate: Date | string
    parishId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoupleCreateManyMember2Input = {
    id?: string
    member1Id: string
    godparent1Id?: string | null
    godparent2Id?: string | null
    marriageDate: Date | string
    parishId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoupleCreateManyGodparent1Input = {
    id?: string
    member1Id: string
    member2Id: string
    godparent2Id?: string | null
    marriageDate: Date | string
    parishId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoupleCreateManyGodparent2Input = {
    id?: string
    member1Id: string
    member2Id: string
    godparent1Id?: string | null
    marriageDate: Date | string
    parishId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoupleUpdateWithoutMember1Input = {
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member2?: ProfileUpdateOneRequiredWithoutCoupleAsMember2NestedInput
    godparent1?: ProfileUpdateOneWithoutCoupleAsGodparent1NestedInput
    godparent2?: ProfileUpdateOneWithoutCoupleAsGodparent2NestedInput
    parish?: ParishUpdateOneRequiredWithoutCouplesNestedInput
    roles?: RoleAssignmentUpdateManyWithoutCoupleNestedInput
    permissions?: PermissionUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleUncheckedUpdateWithoutMember1Input = {
    member2Id?: StringFieldUpdateOperationsInput | string
    godparent1Id?: NullableStringFieldUpdateOperationsInput | string | null
    godparent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    parishId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleAssignmentUncheckedUpdateManyWithoutCoupleNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleUncheckedUpdateManyWithoutMember1Input = {
    member2Id?: StringFieldUpdateOperationsInput | string
    godparent1Id?: NullableStringFieldUpdateOperationsInput | string | null
    godparent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    parishId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupleUpdateWithoutMember2Input = {
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member1?: ProfileUpdateOneRequiredWithoutCoupleAsMember1NestedInput
    godparent1?: ProfileUpdateOneWithoutCoupleAsGodparent1NestedInput
    godparent2?: ProfileUpdateOneWithoutCoupleAsGodparent2NestedInput
    parish?: ParishUpdateOneRequiredWithoutCouplesNestedInput
    roles?: RoleAssignmentUpdateManyWithoutCoupleNestedInput
    permissions?: PermissionUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleUncheckedUpdateWithoutMember2Input = {
    member1Id?: StringFieldUpdateOperationsInput | string
    godparent1Id?: NullableStringFieldUpdateOperationsInput | string | null
    godparent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    parishId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleAssignmentUncheckedUpdateManyWithoutCoupleNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleUncheckedUpdateManyWithoutMember2Input = {
    member1Id?: StringFieldUpdateOperationsInput | string
    godparent1Id?: NullableStringFieldUpdateOperationsInput | string | null
    godparent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    parishId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupleUpdateWithoutGodparent1Input = {
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member1?: ProfileUpdateOneRequiredWithoutCoupleAsMember1NestedInput
    member2?: ProfileUpdateOneRequiredWithoutCoupleAsMember2NestedInput
    godparent2?: ProfileUpdateOneWithoutCoupleAsGodparent2NestedInput
    parish?: ParishUpdateOneRequiredWithoutCouplesNestedInput
    roles?: RoleAssignmentUpdateManyWithoutCoupleNestedInput
    permissions?: PermissionUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleUncheckedUpdateWithoutGodparent1Input = {
    member1Id?: StringFieldUpdateOperationsInput | string
    member2Id?: StringFieldUpdateOperationsInput | string
    godparent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    parishId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleAssignmentUncheckedUpdateManyWithoutCoupleNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleUncheckedUpdateManyWithoutGodparent1Input = {
    member1Id?: StringFieldUpdateOperationsInput | string
    member2Id?: StringFieldUpdateOperationsInput | string
    godparent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    parishId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupleUpdateWithoutGodparent2Input = {
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member1?: ProfileUpdateOneRequiredWithoutCoupleAsMember1NestedInput
    member2?: ProfileUpdateOneRequiredWithoutCoupleAsMember2NestedInput
    godparent1?: ProfileUpdateOneWithoutCoupleAsGodparent1NestedInput
    parish?: ParishUpdateOneRequiredWithoutCouplesNestedInput
    roles?: RoleAssignmentUpdateManyWithoutCoupleNestedInput
    permissions?: PermissionUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleUncheckedUpdateWithoutGodparent2Input = {
    member1Id?: StringFieldUpdateOperationsInput | string
    member2Id?: StringFieldUpdateOperationsInput | string
    godparent1Id?: NullableStringFieldUpdateOperationsInput | string | null
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    parishId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleAssignmentUncheckedUpdateManyWithoutCoupleNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutCoupleNestedInput
  }

  export type CoupleUncheckedUpdateManyWithoutGodparent2Input = {
    member1Id?: StringFieldUpdateOperationsInput | string
    member2Id?: StringFieldUpdateOperationsInput | string
    godparent1Id?: NullableStringFieldUpdateOperationsInput | string | null
    marriageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    parishId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateManyUserInput = {
    id?: string
    entity: $Enums.DataAccessEntity
    action: $Enums.DataAccessAction
    archdioceseId?: string | null
    parishId?: string | null
    coupleId?: string | null
    resourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataAccessLogCreateManyUserInput = {
    id?: string
    entity: $Enums.DataAccessEntity
    entityId: string
    action: $Enums.DataAccessAction
    ipAddress?: string | null
    userAgent?: string | null
    success?: boolean
    errorMessage?: string | null
    requestData?: InputJsonValue | null
    responseData?: InputJsonValue | null
    timestamp?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUpdateWithoutUserInput = {
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archdiocese?: ArchdioceseUpdateOneWithoutPermissionsNestedInput
    parish?: ParishUpdateOneWithoutPermissionsNestedInput
    couple?: CoupleUpdateOneWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateWithoutUserInput = {
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    archdioceseId?: NullableStringFieldUpdateOperationsInput | string | null
    parishId?: NullableStringFieldUpdateOperationsInput | string | null
    coupleId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyWithoutUserInput = {
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    archdioceseId?: NullableStringFieldUpdateOperationsInput | string | null
    parishId?: NullableStringFieldUpdateOperationsInput | string | null
    coupleId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataAccessLogUpdateWithoutUserInput = {
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    requestData?: InputJsonValue | InputJsonValue | null
    responseData?: InputJsonValue | InputJsonValue | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataAccessLogUncheckedUpdateWithoutUserInput = {
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    requestData?: InputJsonValue | InputJsonValue | null
    responseData?: InputJsonValue | InputJsonValue | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataAccessLogUncheckedUpdateManyWithoutUserInput = {
    entity?: EnumDataAccessEntityFieldUpdateOperationsInput | $Enums.DataAccessEntity
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumDataAccessActionFieldUpdateOperationsInput | $Enums.DataAccessAction
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    requestData?: InputJsonValue | InputJsonValue | null
    responseData?: InputJsonValue | InputJsonValue | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}