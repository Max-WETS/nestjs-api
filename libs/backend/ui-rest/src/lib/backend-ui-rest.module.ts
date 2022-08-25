import { Module } from '@nestjs/common';
import { BackendShellModule } from '@nestjs-api/backend/shell';
import { PostsController } from './controllers/posts.controller';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [BackendShellModule],
  controllers: [PostsController, AuthController],
  providers: [],
  exports: [],
})
export class BackendUiRestModule {}
