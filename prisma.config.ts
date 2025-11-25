import { defineConfig, env } from 'prisma/config';
import 'dotenv/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: env('DATABASE_URL'),
    // shadowDatabaseUrl: env('SHADOW_DATABASE_URL'),
  },
  migrations: {
    path: 'prisma/migrations',
    // seed script se você tiver
    // seed: 'ts-node prisma/seed.ts',
  },
});
