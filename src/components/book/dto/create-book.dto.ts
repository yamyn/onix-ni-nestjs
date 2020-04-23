import { IsInt, IsString, IsArray, IsNotEmpty } from 'class-validator';

class PublisherDto {
    @IsNotEmpty()
    @IsString()
    publisher: string;

    @IsInt()
    year: number;
}

export default class CreatebookDto {
    @IsNotEmpty()
    @IsInt()
    blogpost: number;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsArray()
    published: PublisherDto[];
}
