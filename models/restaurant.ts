import mongoose from "mongoose"

const Schema = mongoose.Schema


const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    bigPc: {
        type: String,
        required: true
    },
    types: {
        type: Array,
        required: true
    }
})



const RestaurantItem = mongoose.model('restaurants', restaurantSchema)


export default RestaurantItem



