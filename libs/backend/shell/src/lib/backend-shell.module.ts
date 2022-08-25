import { Global, Module, Provider } from '@nestjs/common';
import { PostsService } from '@nestjs-api/backend/core/application-services';
import {
  PostRepositoryAdapter,
  UserRepositoryAdapter,
} from '@nestjs-api/backend/infrastructure';
import { DbModule } from './db.module';
import {
  IPostDomainRepository,
  IUserDomainRepository,
} from '@nestjs-api/backend/core/domain-services';
import { AuthModule } from './auth.module';
import { UsersService } from '@nestjs-api/backend/core/application-services';

const providers: Provider[] = [
  PostsService,
  {
    provide: IPostDomainRepository,
    useClass: PostRepositoryAdapter,
  },
  {
    provide: IUserDomainRepository,
    useClass: UserRepositoryAdapter,
  },
];

@Global()
@Module({
  imports: [DbModule, AuthModule],
  providers: [...providers],
  exports: [DbModule, AuthModule, ...providers],
})
export class BackendShellModule {}
