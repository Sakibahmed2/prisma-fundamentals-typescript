# Prisma Fundamentals Starter (TypeScript + PostgreSQL)

A minimal, step-by-step tutorial repo to bootstrap Prisma with TypeScript and PostgreSQL. Includes Prisma schema, migration, scripts, and helpful commands to remember later.

## Repo name and description

- Suggested repo name: `prisma-fundamentals-typescript-starter`
- Description: "Minimal Prisma + TypeScript + PostgreSQL starter with step-by-step setup, migrations, and scripts."

## What’s inside

- TypeScript app entry: `src/index.ts`
- Prisma schema: `prisma/schema.prisma`
- Initial migration: `prisma/migrations/*`
- NPM scripts for dev, Prisma generate/migrate, and Prisma Studio

## Prerequisites

- Node.js 18+
- PostgreSQL database (local or hosted)
- Windows PowerShell (commands below are PowerShell-friendly)

## 1) Install dependencies

```powershell
npm install
```

## 2) Configure environment variables

Create a `.env` file in the project root with your database connection string:

```
# .env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB_NAME?schema=public"
```

Examples:

- Local Postgres default: `postgresql://postgres:postgres@localhost:5432/prisma_fundamentals?schema=public`
- Render/Supabase/Railway: copy the connection string from the provider dashboard.

## 3) Generate Prisma Client

```powershell
npm run prisma:generate
```

This reads `prisma/schema.prisma` and generates the client into `node_modules/@prisma/client`.

## 4) Run migrations (create tables)

If this is your first time on a fresh DB, apply the initial migration:

```powershell
npm run prisma:migrate
```

- This will create the database schema (table `posts`) from the model defined in `schema.prisma`.
- If you need a new migration after editing the schema, run:

```powershell
# Replace <name> with your change description (e.g., add_author)
npx prisma migrate dev --name <name>
```

## 5) Start the dev server (TypeScript)

```powershell
npm run dev
```

- Uses `tsx` to run `src/index.ts` in watch mode.
- Current `src/index.ts` just prints "Hello world" and initializes Prisma Client—extend as you like.

## 6) Open Prisma Studio (optional GUI)

```powershell
npm run prisma:studio
```

This opens a browser to inspect and edit data.

## 7) Suggested workflow for editing the schema

1. Edit `prisma/schema.prisma` (e.g., modify the `Post` model).
2. Create and apply a new migration:
   ```powershell
   npx prisma migrate dev --name describe_change
   ```
3. Regenerate the client (often automatic during migrate, but safe to do):
   ```powershell
   npm run prisma:generate
   ```
4. Use the updated types and client in your code:
   ```ts
   import { PrismaClient } from "@prisma/client";
   const prisma = new PrismaClient();
   // await prisma.post.findMany();
   ```

## Troubleshooting

- "P1001: Can't reach database": confirm your `DATABASE_URL`, that the DB server is running, and that firewalls allow access.
- Migration errors:
  - If this is dev only and you want to reset quickly: `npx prisma migrate reset --force`
  - Never run reset on production databases.
- TypeErrors when running `npm run dev`:
  - Ensure Node 18+, `npm install` completed, and `@prisma/client` is installed.
- Prisma Client not generated:
  - Run `npm run prisma:generate` after installing or after changing the schema.

## License

MIT — use freely for learning or as a starter.
