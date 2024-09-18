```bash
npm install -g pnpm
pnpm add typescript
pnpm add @types/node
pnpm tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom  --module commonjs
pnpm add ts-node
pnpm add tsyringe
pnpm add reflect-metadata
pnpm add drizzle-orm better-sqlite3
pnpm add -D @types/better-sqlite3
pnpm add -D drizzle-kit
pnpm run start
```