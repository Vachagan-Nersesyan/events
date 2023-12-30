import mongoose from "mongoose"

const Schema = mongoose.Schema


const sendInfoschema = new Schema({
    restaurant: {
        type: Object,
        required: true
    },
    guests: {
        type: String,
        required: true
    },
    dance: {
        type: Boolean,
        required: true
    },
})



const SendInfoItem = mongoose.model('rentedweddings', sendInfoschema)


export default SendInfoItem





