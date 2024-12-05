import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private postRepo: Repository<Post>) {}

  findAll() {
    return this.postRepo.find();
  }

  findOne(id: string) {
    return this.postRepo.findOneBy({ id });
  }

  create(data: CreatePostDto) {
    return this.postRepo.save(data);
  }

  update(id: string, data: UpdatePostDto) {
    return this.postRepo.update(id, data);
  }

  delete(id: string) {
    return this.postRepo.delete(id);
  }
}
