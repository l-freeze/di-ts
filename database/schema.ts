import { text ,sqliteTable } from 'drizzle-orm/sqlite-core';

export const product = sqliteTable("product", {
    name: text("name"),
    description: text("description"),
//    createdAt: text("created_at").notNull().default("CURRENT_TIMESTAMP"),
//    updatedAt: text("updated_at").notNull().default("CURRENT_TIMESTAMP"),
});
