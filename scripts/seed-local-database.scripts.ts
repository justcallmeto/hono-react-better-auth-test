import { db, pool } from "../backend/database/database";
import * as schema from "../backend/database/schema";
import { seed } from "drizzle-seed";

const seedDatabase = async () => {
  await seed(db, schema).refine((funcs) => ({
    todos: {
      columns: {
        title: funcs.valuesFromArray({
          values: ['Buy car', "read a book", "call you"]
        }),
        description: funcs.valuesFromArray({
          values: ['at 12am', "daily", "carefully", undefined],
        })
      },
    }
  }));
};

seedDatabase()
  .then(() => {
    console.log("Database seeded");
    return pool.end();
  })
  .catch((err) => {
    console.error("Error seeding database", err);
    return pool.end();
  });
