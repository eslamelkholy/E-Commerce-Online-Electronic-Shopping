import { BeforeCreate, BeforeUpdate, Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import aragon2 from "argon2";

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ type: "text", unique: true })
  username!: string;

  @Property({ type: "text" })
  password!: string;

  @Field()
  @Property({ type: "text", unique: true })
  email!: string;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @BeforeUpdate()
  @BeforeCreate()
  async hashPassword(): Promise<void> {
    this.password = await aragon2.hash(this.password);
  }
}
