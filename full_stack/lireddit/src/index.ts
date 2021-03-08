import "reflect-metadata";
import { __prod__ } from "./constants";

import { MikroORM } from "@mikro-orm/core";
import microConfig from './mikro-orm.config';

import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {buildSchema} from 'type-graphql';
import {HelloResolver} from './resolvers/hello'
import { PostResolver } from "./resolvers/post";

const main = async () => {
    //Database connection
    const orm = await MikroORM.init(microConfig);
    orm.getMigrator().up(); //Run migration automatically (can also be done in cli)

    //Express web server setup
    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver],
            validate: false
        }),
        context: () => ({em : orm.em}) //This makes orm.em object accesible to all graphQL resolvers
    })

    apolloServer.applyMiddleware({app})

    app.listen(4000, () => {
        console.log("Server started at port: ", 4000);
    })
}

main().catch(err => console.log(err));