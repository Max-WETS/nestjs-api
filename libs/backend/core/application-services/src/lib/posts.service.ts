import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Post } from '@nestjs-api/shared/domain';
import { PostRepositoryAdapter } from '@nestjs-api/backend/infrastructure';
import { IPostDomainRepository } from '@nestjs-api/backend/core/domain-services';

@Injectable()
export class PostsService {
  private lastPostId = 0;
  private posts: Post[] = [];

  constructor(private readonly postsRepository: IPostDomainRepository) {}

  async getAllPosts() {
    return await this.postsRepository.find();
  }

  async getPostById(id: number) {
    const post = await this.postsRepository.findOne(id);
    if (post) {
      return post;
    }
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }

  async replacePost(id: number, post: Post) {
    await this.postsRepository.update(id, post);
    const updatedPost = await this.postsRepository.findOne(id);
    if (updatedPost) {
      return updatedPost;
    }
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }

  async createPost(post: Post) {
    const newPost = await this.postsRepository.create(post);
    await this.postsRepository.save(newPost);
    return newPost;
  }

  async deletePost(id: number) {
    const deleteResponse = await this.postsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }
}
