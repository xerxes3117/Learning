import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post {
  @Field()  
  @PrimaryKey()
  _id!: number;

  @Field(() => String)  
  @Property()
  createdAt: Date = new Date();

  @Field(() => String)
  @Property({onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field()
  @Property({type: 'text'})
  title!: string;
}