import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUser() {
    return 'create user';
  }

  login() {
    return { data: 'login user' };
  }
}
