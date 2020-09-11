import { Item } from "../entities/item";
import { Resolver, Query, Ctx, Arg, Int } from "type-graphql";
import { MyContext } from "../types";

@Resolver()
export class ItemResolver {
  @Query(() => [Item!])
  items(@Ctx() { em }: MyContext): Promise<Item[]> {
    return em.find(Item, {});
  }

  @Query(() => Item, { nullable: true }) //Graphql Type
  item(@Arg("id", () => Int) id: number, @Ctx() { em }: MyContext): Promise<Item | null> {
    return em.findOne(Item, { id });
  }
}
