import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema(
    {
        blogpost: Number,
        title: {
            type: String,
            trim: true,
            unique: true,
            index: true,
            required: true,
        },
        author: {
            type: String,
            trim: true,
        },
        published: [
            {
                publisher: String,
                year: { type: Number, default: 2020 },
            },
        ],
    },
    {
        versionKey: false,
    },
);
