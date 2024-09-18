import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    dialect: 'sqlite',
    schema: "./database/schema.ts",
    out: './database/drizzle',
    dbCredentials: {
        url: './data-store/db.sqlite'
    },
});