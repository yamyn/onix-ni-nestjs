import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Book } from './book.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Book]),
        // MongooseModule.forFeature([
        //     { name: 'Book', schema: BookSchema, collection: 'books' },
        // ]),
    ],
    providers: [BookService],
    controllers: [BookController],
    exports: [TypeOrmModule],
})
export class BookModule {}
