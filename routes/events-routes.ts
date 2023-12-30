import express from "express"
import { getEvents } from "../controllers/events-controller"
const router = express.Router()

router.get('/get-events', getEvents)


// router.post('/car-rent', rentCar)



export default router