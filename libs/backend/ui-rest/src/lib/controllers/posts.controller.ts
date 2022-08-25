import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from '@nestjs-api/backend/core/application-services';
import { Post as PostI, RequestWithUser } from '@nestjs-api/shared/domain';
import { JwtAuthenticationGuard } from '@nestjs-api/shared/utils';
import { FindOneParams } from '@nestjs-api/shared/utils';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param() { id }: FindOneParams) {
    return this.postsService.getPostById(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createPost(@Body() post: PostI, @Req() request: RequestWithUser) {
    return this.postsService.createPost(post, request.user);
  }

  @Put(':id')
  async replacePost(@Param('id') id: string, @Body() post: PostI) {
    return this.postsService.replacePost(Number(id), post);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    this.postsService.deletePost(Number(id));
  }
}
