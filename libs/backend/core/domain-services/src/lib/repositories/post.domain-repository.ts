import { Post } from '@nestjs-api/shared/domain';
import { UpdateResult } from 'typeorm';

export abstract class IPostDomainRepository {
  abstract find(): Promise<Post[]>;

  abstract findOneOrFail(userId: number): Promise<Post>;

  abstract findOne(userId: number): Promise<Post | null>;

  abstract create(newPost: Post): Promise<Post>;

  abstract save(createdPost: Post): Promise<Post>;

  abstract update(postId: number, update: Partial<Post>): Promise<any>;

  abstract delete(postId: number): Promise<any>;
}
