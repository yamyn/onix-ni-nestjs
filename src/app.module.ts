import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

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
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/',
            useUnifiedTopology: true,
            useNewUrlParser: true,
            database: process.env.MONGO_DATABASE || 'books_db',
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: true,
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
