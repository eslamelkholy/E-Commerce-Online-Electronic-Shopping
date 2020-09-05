import { MikroORM } from "@mikro-orm/core";
import { Item } from "./entities/item";
import mikroConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  const ItemTest = orm.em.create(Item, { price: 1000, description: "Hello Iphone", title: "Simple Test Iphone" });
  await orm.em.persistAndFlush(ItemTest);
  await orm.em.nativeInsert(Item, { title: "iphone2" });
};

main();
