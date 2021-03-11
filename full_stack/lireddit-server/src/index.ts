import {MikroORM} from "@mikro-orm/core";
import {__prod__} from './constants';
import mikroConfig from './mikro-orm.config';
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {buildSchema} from 'type-graphql';
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";

const main = async () => {
    //Connecting to datbase using mikroorm
    const orm = await MikroORM.init(mikroConfig);
    //Run all migrations
    orm.getMigrator().up();

    //Setup express app
    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver],
            validate : false
        }),
        context: () => ({em : orm.em})    //properties returned in context callback are accessible in all resolvers
    });

    apolloServer.applyMiddleware({app})

    app.listen(4000, () => {
        console.log('server started on ', 4000);
    })
}

main().catch(error => console.log(error));