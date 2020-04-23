import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import IUser from './interfaces/user.interface';
import CreateUserDto from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<IUser>,
    ) {}

    async findAll(): Promise<IUser[]> {
        return this.userModel.find().exec();
    }

    async create(CreateUserDto: CreateUserDto): Promise<IUser> {
        const createdUser = new this.userModel(CreateUserDto);
        return createdUser.save();
    }
}
