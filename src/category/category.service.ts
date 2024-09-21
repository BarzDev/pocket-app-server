import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  create() {
    return { data: 'create category' };
  }

  findAll() {
    return { data: 'find all category' };
  }

  update() {
    return { data: 'update category' };
  }

  delete() {
    return { data: 'delete category' };
  }
}
