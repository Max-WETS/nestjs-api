import { User } from '@nestjs-api/shared/domain';

export abstract class IUserDomainRepository {
  abstract findOne(criterion: Partial<User>): Promise<User | null>;

  abstract create(newUser: User): Promise<User>;

  abstract save(createdUser: User): Promise<User>;
}
