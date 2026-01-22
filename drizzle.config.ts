import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './backend/database/migrations',
  schema: './backend/database/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
