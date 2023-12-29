import { Request, Response } from "express"

import EventItem from '../models/events'
// import RentCarItem from "../models/addCar"


export const getEvents = (req: Request, res: Response) => {
    EventItem
        .find()
        .then((events) => {
            res.send(events)
        })
        .catch((error) => {
            console.log(error)
        })
}

// export const getCurrentCar = (req: Request, res: Response) => {

//     CarItem
//         .find({ uniqId: req.params.id })
//         .then((car) => {
//             res.send(car)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }

// export const rentCar = (req: Request, res: Response) => {

//     const carItem = new RentCarItem({ ...req.body.info })
//     carItem.peaopleC = req.body.info.peopleC

//     carItem
//         .save()
//         .then((data) => res.send(data))
//         .catch((error) => {
//             console.log(error)
//             res.redirect('/')
//         })


// }

