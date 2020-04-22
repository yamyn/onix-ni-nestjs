import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import IBook from './interfaces/book.interface';
import CreateBookDto from './dto/create-book.dto';

@Injectable()
export class BookService {
    constructor(
        @InjectModel('Book') private readonly bookModel: Model<IBook>,
    ) {}

    async findAll(): Promise<IBook[]> {
        return this.bookModel.find().exec();
    }

    async create(CreateBookDto: CreateBookDto): Promise<IBook> {
        const createdBook = new this.bookModel(CreateBookDto);
        return createdBook.save();
    }
}
