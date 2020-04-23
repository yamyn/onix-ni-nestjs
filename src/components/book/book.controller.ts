import { Controller, Get, Post, Body } from '@nestjs/common';

import { BookService } from './book.service';
import CreateBookDto from './dto/create-book.dto';
import { Book } from './book.entity';

@Controller()
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get('books')
    async findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Post('api/books')
    async create(@Body() CreateBookDto: CreateBookDto) {
        return this.bookService.create(CreateBookDto);
    }
}
