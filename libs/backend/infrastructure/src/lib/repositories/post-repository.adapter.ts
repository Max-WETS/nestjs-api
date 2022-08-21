import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IPostDomainRepository } from '@nestjs-api/backend/core/domain-services';
import { PostEntity } from '../entities';

export class PostRepositoryAdapter implements IPostDomainRepository {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postEntityRepos: Repository<PostEntity>
  ) {}
}
