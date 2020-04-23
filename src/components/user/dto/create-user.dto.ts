import {
    IsString,
    IsEmail,
    IsMobilePhone,
    IsBooleanString,
    IsNotEmpty,
} from 'class-validator';

export default class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsMobilePhone()
    phone: number;

    @IsBooleanString()
    isAdmin: boolean;

    @IsBooleanString()
    verified: boolean;
}
