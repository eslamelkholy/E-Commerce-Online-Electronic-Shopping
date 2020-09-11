import { Item } from "../entities/item";
import { Resolver, Query, Ctx, Arg, Mutation } from "type-graphql";
import { MyContext } from "../types";

@Resolver()
export class ItemResolver {
  @Query(() => [Item!])
  items(@Ctx() { em }: MyContext): Promise<Item[]> {
    return em.find(Item, {});
  }

  @Query(() => Item, { nullable: true }) //Graphql Type
  item(@Arg("id") id: number, @Ctx() { em }: MyContext): Promise<Item | null> {
    return em.findOne(Item, { id });
  }

  @Mutation(() => Item)
  async addItem(
    @Arg("title") title: string,
    @Arg("description") description: string,
    @Arg("price") price: number,
    @Ctx() { em }: MyContext
  ): Promise<Item> {
    const newItem = em.create(Item, { title, description, price });
    await em.persistAndFlush(newItem);
    return newItem;
  }

  @Mutation(() => Boolean)
  async deleteItem(@Arg("id") id: number, @Ctx() { em }: MyContext): Promise<boolean> {
    const item = await em.findOne(Item, { id });
    if (!item) return false;
    await em.nativeDelete(Item, item);
    return true;
  }

  @Mutation(() => Item, { nullable: true })
  async updateItem(
    @Arg("id") id: number,
    @Arg("title", () => String, { nullable: true }) title: string,
    @Arg("description", () => String, { nullable: true }) description: string,
    @Arg("price", () => Number, { nullable: true }) price: number,
    @Ctx() { em }: MyContext
  ): Promise<Item | null> {
    const item = await em.findOne(Item, { id });
    if (!item) return null;
    item.title = title;
    item.price = price;
    item.description = description;
    await em.persistAndFlush(item);
    return item;
  }
}
