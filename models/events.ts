import mongoose from "mongoose"

const Schema = mongoose.Schema


const eventsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    events: {
        type: Array,
        required: true
    }
})



const EventItem = mongoose.model('events', eventsSchema)


export default EventItem



