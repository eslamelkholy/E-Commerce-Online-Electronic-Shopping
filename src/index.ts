import { MikroORM } from "@mikro-orm/core";
import mikroConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { ItemResolver } from "./resolvers/item";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ItemResolver],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(3000, () => console.log("Connected On localhost:3000"));
};

main().catch((err) => console.log(err));
