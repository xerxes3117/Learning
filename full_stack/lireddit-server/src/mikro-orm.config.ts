import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import {MikroORM} from "@mikro-orm/core";
import path from "path";

//Setup export variable containing config for connection to database through mikroORM
export default {
    dbName: 'lireddit',
    password: 'combination',
    port: 5433,
    type: 'postgresql',
    debug: !__prod__,
    entities: [Post],
    migrations: {
        path: path.join(__dirname, './migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    }
} as Parameters<typeof MikroORM.init>[0]; //Casting the type of export to type of the first parameter in MikroORM.init function 