import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
    {
        firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    isAdmin: Boolean,
    verified: Boolean
    
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
