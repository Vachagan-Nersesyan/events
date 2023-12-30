import { Request, Response } from "express"
import LoginItem from "../models/login"
import bcrypt from 'bcrypt'
import passport from "passport"
import passportLocal from "passport-local"


export const sendRItems = async (req: Request, res: Response) => {

    const hashedPwd = await bcrypt.hash(req.body.password, 10)
    req.body.password = hashedPwd

    const infoItem = new LoginItem({ ...req.body })

    console.log(req.body, 'req.bodyreq.bodyreq.bodyreq.body')


    infoItem
        .save()
        .then((data) => {
            res.redirect('/login')
        })
        .catch((error) => {
            res.redirect('/')
        })

}

export const sendLItems = (req: Request, res: Response) => {
    console.log(req.body, 'req.bodybbb')
    LoginItem
        .find()
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((error) => {
            console.log(error)
        })

}
