import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Item {
  @PrimaryKey()
  id!: number;

  @Property({ type: "date" })
  createdAt = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  title!: string;

  @Property({ type: "text" })
  description!: string;

  @Property()
  price!: number;
}
