import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        // MongooseModule.forFeature([
        //     { name: 'User', schema: UserSchema, collection: 'users' },
        // ]),
    ],
    providers: [UserService],
    controllers: [UserController],
    exports: [TypeOrmModule],
})
export class UserModule {}
