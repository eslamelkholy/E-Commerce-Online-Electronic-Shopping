import { Resolver, Query } from "type-graphql";

@Resolver()
export class ItemResolver {
  @Query(() => String)
  listItems() {
    return "Item List";
  }
}
