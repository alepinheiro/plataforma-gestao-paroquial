// auth.d.ts

import type { Prisma } from '~~/shared/types/generated/prisma';

declare module '#auth-utils' {
  interface User
    extends Prisma.UserGetPayload<{
      include: {
        profile: true;
      };
    }> {

    couple: Prisma.CoupleGetPayload;
    id: string;
  }

  interface UserSession {
    user: Prisma.UserGetPayload<{
      include: {
        profile: true;
      };
    }>;
    couple: Prisma.CoupleGetPayload;
  }

  // interface SecureSessionData
  //   extends Prisma.UserGetPayload<{
  //     include: {
  //       profile: true;
  //     };
  //   }> {}
}

export { };
