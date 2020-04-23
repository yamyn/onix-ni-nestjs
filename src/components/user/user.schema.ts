import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            index: true,
            required: true,
        },
        phone: Number,
        isAdmin: {
            type: Boolean,
            default: false,
        },
        verified: {
            type: Boolean,
            default: false,
        },
    },
    {
        versionKey: false,
    },
);
