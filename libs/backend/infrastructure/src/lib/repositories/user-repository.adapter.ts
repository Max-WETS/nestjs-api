import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserDomainRepository } from '@nestjs-api/backend/core/domain-services';
import { UserEntity } from '../entities';
import { User } from '@nestjs-api/shared/domain';

export class UserRepositoryAdapter implements IUserDomainRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntityRepository: Repository<UserEntity>
  ) {}

  async findOne(criterion: Partial<User>): Promise<UserEntity | null> {
    return await this.userEntityRepository.findOne({
      where: {
        ...criterion,
      },
    });
  }

  async create(newPost: UserEntity): Promise<UserEntity> {
    return await this.userEntityRepository.create(newPost);
  }

  async save(createdPost: UserEntity): Promise<UserEntity> {
    return await this.userEntityRepository.save(createdPost);
  }
}
