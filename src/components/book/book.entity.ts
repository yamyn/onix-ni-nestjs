import { Entity, Column, ObjectIdColumn, ObjectID, Index } from 'typeorm';
import { PublisherDto } from './dto/create-book.dto';

@Entity({ name: 'books' })
export class Book {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({ unique: true })
    blogpost: number;

    @Index({ unique: true })
    @Column()
    title: string;

    @Column()
    author: string;

    @Column({ default: 2020 })
    published: PublisherDto[];
}
