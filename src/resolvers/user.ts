import { User } from "../entities/User";
import { MyContext } from "src/types";
import { Resolver, Mutation, Arg, InputType, Field, Ctx } from "type-graphql";

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  email: string;
  @Field()
  password: string;
}

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async Register(@Arg("options") options: UsernamePasswordInput, @Ctx() { em }: MyContext): Promise<User> {
    const user = em.create(User, options);
    await em.persistAndFlush(user);
    return user;
  }
}
