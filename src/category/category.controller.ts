import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Post()
  create() {
    return this.categoryService.create();
  }

  @Put()
  update() {
    return this.categoryService.update();
  }

  @Delete()
  delete() {
    return this.categoryService.delete();
  }
}
