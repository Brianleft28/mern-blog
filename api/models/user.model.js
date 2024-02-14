import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        require: true        
    },
    password: {
        type: String,
        required: true
    }, 
    }, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;

