import { __PROD__ } from "./constants";
import { Item } from "./entities/item";
import { MikroORM } from "@mikro-orm/core";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
export default {
  entities: [Item],
  dbName: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  type: "postgresql",
  debug: !__PROD__,
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
} as Parameters<typeof MikroORM.init>[0];
