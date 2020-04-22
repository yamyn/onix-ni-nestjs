import { Controller, Get, Post, Body } from '@nestjs/common';

import { BookService } from './book.service';
import IBook from './interfaces/book.interface';
import CreateBookDto from './dto/create-book.dto';

@Controller()
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get('books')
    async findAll(): Promise<IBook[]> {
        return this.bookService.findAll();
    }

    @Post('api/books')
    async create(@Body() CreateBookDto: CreateBookDto) {
        return this.bookService.create(CreateBookDto);
    }
}
