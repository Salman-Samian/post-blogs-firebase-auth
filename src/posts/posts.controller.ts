import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UnauthorizedException,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import * as admin from 'firebase-admin';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.delete(id);
  }

  @Post('set-role')
  async setRole(@Body() { uid, role }: { uid: string; role: string }) {
    try {
      if (!role || !uid) {
        throw new UnauthorizedException('UID and role are required');
      }

      await admin.auth().setCustomUserClaims(uid, { role });
      return { message: `Role '${role}' assigned to user '${uid}'` };
    } catch (error: any) {
      throw new UnauthorizedException(`Failed to set role: ${error.message}`);
    }
  }
}
