import { boolean, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";


export const todos = pgTable('todos-new', {
    id: uuid().primaryKey().defaultRandom(),
    title: varchar({length: 5000}).notNull(),
    description: varchar({length: 1000}),
    completed: boolean().default(false),
    createdAt: timestamp({withTimezone: true}).notNull().defaultNow(),
    updatedAt: timestamp({withTimezone: true}).notNull().defaultNow(),
});