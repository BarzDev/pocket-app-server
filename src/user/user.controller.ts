import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register() {
    return this.userService.createUser();
  }

  @Post('login')
  loginUser() {
    return this.userService.login();
  }
}
