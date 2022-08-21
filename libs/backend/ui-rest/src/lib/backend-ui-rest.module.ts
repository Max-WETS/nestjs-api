import { Module } from '@nestjs/common';
import { BackendShellModule } from '@nestjs-api/backend/shell';
import { PostsController } from './controllers/posts.controller';

@Module({
  imports: [BackendShellModule],
  controllers: [PostsController],
  providers: [],
  exports: [],
})
export class BackendUiRestModule {}
