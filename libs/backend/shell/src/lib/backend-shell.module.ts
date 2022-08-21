import { Module } from '@nestjs/common';
import { PostsService } from '@nestjs-api/backend/core/application-services';

@Module({
  controllers: [],
  providers: [PostsService],
  exports: [PostsService],
})
export class BackendShellModule {}
