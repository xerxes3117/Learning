import {MikroORM} from "@mikro-orm/core";
import {__prod__} from './constants';
import { Post } from "./entities/Post";

//Connecting to datbase using mikroorm
const main = async () => {
    const orm = await MikroORM.init({
        dbName: 'lireddit',
        type: 'postgresql',
        debug: !__prod__,
        entities: [Post],
    })

    //Create an instance of the post
    const post = orm.em.create(Post, {title: 'my first post'});
    await orm.em.persistAndFlush(post);
}

main().catch(error => console.log(error));