import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IPostDomainRepository } from '@nestjs-api/backend/core/domain-services';
import { PostEntity } from '../entities';

export class PostRepositoryAdapter implements IPostDomainRepository {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postEntityRepository: Repository<PostEntity>
  ) {}

  async find(): Promise<PostEntity[]> {
    return await this.postEntityRepository.find({ relations: ['author'] });
  }

  async findOneOrFail(postId: number): Promise<PostEntity> {
    return await this.postEntityRepository.findOneOrFail({
      where: {
        id: postId,
      },
    });
  }

  async findOne(postId: number): Promise<PostEntity | null> {
    return await this.postEntityRepository.findOne({
      where: {
        id: postId,
      },
      relations: ['author'],
    });
  }

  async create(newPost: PostEntity): Promise<PostEntity> {
    return await this.postEntityRepository.create(newPost);
  }

  async save(createdPost: PostEntity): Promise<PostEntity> {
    return await this.postEntityRepository.save(createdPost);
  }

  async update(
    postId: number,
    updatedPost: Partial<PostEntity>
  ): Promise<UpdateResult> {
    return await this.postEntityRepository.update({ id: postId }, updatedPost);
  }

  async delete(postId: number): Promise<DeleteResult> {
    return await this.postEntityRepository.delete({ id: postId });
  }
}
