import mongoose from "mongoose";
import config from '../../config/default';
import bcrypt from 'bcrypt';

export interface userDocument extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

userSchema.pre('save', async function (next) {
    const user = this as userDocument;
    if (!user.isModified('password')) {
        return next();
    }
    // const saltWorkFactor = config.saltWorkFactor;
    const salt = await bcrypt.genSalt(config.saltWorkFactor);
    const hashPassword = await bcrypt.hash(user.password, salt);
    
});

const userModel = mongoose.model('User', userSchema);

export default userModel;