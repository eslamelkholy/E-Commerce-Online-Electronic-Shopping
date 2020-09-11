import { Item } from "../entities/item";
import { Resolver, Query, Ctx } from "type-graphql";
import { MyContext } from "../types";

@Resolver()
export class ItemResolver {
  @Query(() => [Item!])
  items(@Ctx() { em }: MyContext): Promise<Item[]> {
    return em.find(Item, {});
  }
}
