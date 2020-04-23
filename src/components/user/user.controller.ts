import { Controller, Post, Get, Body } from '@nestjs/common';

import { UserService } from './user.service';
import CreateUserDto from './dto/create-user.dto';
import { User } from './user.entity';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('users')
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post('api/users')
    async create(@Body() CreateUserDto: CreateUserDto) {
        return this.userService.create(CreateUserDto);
    }
}
