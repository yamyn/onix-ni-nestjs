import { Document } from 'mongoose';

export default interface IUser extends Document {
    readonly firstName: string;
    readonly lastName: number;
    readonly email: string;
    readonly phone: number;
    readonly isAdmin: boolean;
    readonly verified: boolean;
}
