import express from "express"

import { body } from "express-validator"
import { getRestaurants, infoSend } from "../controllers/restaurants-controller"

const router = express.Router()

router.get('/get-restaurants', getRestaurants)

router.post('/send-contact', infoSend)


export default router