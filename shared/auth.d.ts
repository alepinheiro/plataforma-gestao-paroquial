// auth.d.ts

import type { Couple } from '~~/shared/schemas/models/couple.schema';
import type { Profile } from '~~/shared/schemas/models/profile.schema';
import type { User as UserType } from '~~/shared/schemas/models/user.schema';

declare module '#auth-utils' {
  interface User extends UserType {
    profile: Profile;
    couple: Couple;
  }

  interface UserSession {
    user: User;
    couple: Couple;
  }
}

export { };
