import { Request, Response } from "express"
import RestaurantItem from "../models/restaurant"
import SendInfoItem from "../models/infoModel"



export const infoSend = (req: Request, res: Response) => {

    const infoItem = new SendInfoItem({ ...req.body.info })

    infoItem
        .save()
        .then((data) => res.redirect('/message-send'))
        .catch((error) => {
            res.redirect('/')
        })

}


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