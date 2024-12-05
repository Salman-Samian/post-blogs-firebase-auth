import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post } from './post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])], // Import the Post entity here
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService], // Optional: Export the service if needed elsewhere
})
export class PostsModule {}
