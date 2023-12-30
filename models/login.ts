import mongoose from "mongoose"

const Schema = mongoose.Schema


const loginSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})



const LoginItem = mongoose.model('loginsdata', loginSchema)


export default LoginItem



