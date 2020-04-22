import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

const environment = process.env.NODE_ENV || 'development';

import { UserModule } from './components/user/user.module';
import { BookModule } from './components/book/book.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
    imports: [
        UserModule,
        BookModule,
        ConfigModule.forRoot({
            envFilePath: `.env.${environment}`,
            isGlobal: true,
        }),

        MongooseModule.forRoot(process.env.MONGO_CONNECT_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }),
    ],
    providers: [
        {
            provide: APP_PIPE,
            useClass: ValidationPipe,
        },
    ],
})
export class AppModule {}
