import { Request, Response } from "express"
import RestaurantItem from "../models/restaurant"

// import MessagesItem from '../models/contact'


// export const contactSend = (req: Request, res: Response) => {

//     const carItem = new MessagesItem({ ...req.body.info })

//     carItem
//         .save()
//         .then((data) => res.redirect('/message-send'))
//         .catch((error) => {
//             res.redirect('/')
//         })

// }


export const getRestaurants = (req: Request, res: Response) => {
    RestaurantItem
        .find()
        .then((restaurant) => {
            res.send(restaurant)
        })
        .catch((error) => {
            console.log(error)
        })
}