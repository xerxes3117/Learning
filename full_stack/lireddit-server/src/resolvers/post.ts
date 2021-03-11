import { Post } from '../entities/post';
import {Arg, Ctx, Int, Mutation, Query, Resolver} from 'type-graphql';
import {MyContext} from '../types';

@Resolver()
export class PostResolver {
    @Query(() => [Post])
    posts(
        @Ctx() {em}: MyContext
    ): Promise<Post[]> {
        return em.find(Post, {});
    }

    @Query(() => Post, {nullable: true})
    post(
        @Arg('id') id: number,
        @Ctx() {em}: MyContext
    ): Promise<Post | null> {
        return em.findOne(Post, {_id: id});
    }

    @Mutation(() => Post)
    async createPost(
        @Arg('title') title: string,
        @Ctx() {em}: MyContext
    ): Promise<Post> {
        const post = em.create(Post, {title});
        await em.persistAndFlush(post);
        return post;
    }

    @Mutation(() => Post)
    async updatePost(
        @Arg('id') id: number,
        @Arg('title') title: string,
        @Ctx() {em}: MyContext
    ): Promise<Post | null> {
        const post = await em.findOne(Post, {_id: id});
        if(!post) {
            return null
        }
        if(typeof title !== 'undefined') {
            post.title = title;
            await em.persistAndFlush(post);
        }
        return post;
    }

    @Mutation(() => Boolean)
    async deletePost(
        @Arg('id') id: number,
        @Ctx() {em}: MyContext
    ): Promise<Boolean> {
        await em.nativeDelete(Post, {_id: id});
        return true;
    }
}