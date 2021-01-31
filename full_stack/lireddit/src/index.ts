import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from './mikro-orm.config';

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    orm.getMigrator().up(); //Run migration automatically (can also be done in cli)

    // const post = orm.em.create(Post, {title: 'my first post'});
    // await orm.em.persistAndFlush(post); //add post to Post table
    // const posts = await orm.em.find(Post, {});
    // console.log(posts);
}

main().catch(err => console.log(err));