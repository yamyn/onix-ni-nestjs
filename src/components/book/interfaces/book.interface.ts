import { Document } from 'mongoose';

import IPublisher from './publisher.interface';
// blogpost: Number,
// title: {
//     type: String,
//     trim: true,
//     unique: true,
//     index: true,
//     required: true,
// },
// author: {
//     type: String,
//     trim: true,
// },
// published: [
//     {
//         publisher: String,
//         year: { type: Number, default: 2020 },
//     },
// ],

export default interface IBook extends Document {
    readonly blogpost: number;
    readonly title: string;
    readonly author: string;
    readonly published: IPublisher[];
}
