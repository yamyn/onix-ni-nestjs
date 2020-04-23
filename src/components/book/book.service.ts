import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import CreateBookDto from './dto/create-book.dto';
import { Book } from './book.entity';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>,
    ) {}

    async findAll(): Promise<Book[]> {
        return this.bookRepository.find();
    }

    async create(CreateBookDto: CreateBookDto): Promise<Book> {
        return this.bookRepository.save(CreateBookDto);
    }
}
