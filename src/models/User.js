import mongoose, {Schema} from 'mongoose';

const User = new Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    unsuscribed: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('User', User);