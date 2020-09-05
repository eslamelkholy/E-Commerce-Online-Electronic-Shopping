import { MikroORM } from "@mikro-orm/core";
import dotenv from "dotenv";
import { __PROD__ } from "./constants";
dotenv.config();

console.log(process.env["DB_NAME"]);
const main = async () => {
  const orm = await MikroORM.init({
    entities: [],
    dbName: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    type: "postgresql",
    debug: !__PROD__,
  });
};

main();
