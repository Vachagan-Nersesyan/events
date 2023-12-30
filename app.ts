import express, { Request, Response } from "express"
import path from "path"
import session from 'express-session'
import mongoose from "mongoose"
import passport from "passport"
import passportLocal from "passport-local"
import bcrypt from 'bcrypt'


import eventsRouter from './routes/events-routes'
import restaurantsRouter from './routes/restaurant-routes'
import loginRouter from './routes/login-routes'
import { SessionType } from "./appTs.interface"
import LoginItem from "./models/login"


const app = express()

const db = 'mongodb+srv://nersesyanvach80:iloveyoulikeiloveme@cluster0.d9kwurl.mongodb.net/eventsdb?retryWrites=true&w=majority'

mongoose
    .connect(db)
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error))



app.use(express.json())

app.use(express.urlencoded({ extended: true }))


app.use(express.static('./frontend/build'))

app.use(session({
    secret: process.env.SESSION_CODE,
    resave: false,
    saveUninitialized: false
} as SessionType))

app.use(passport.initialize())
app.use(passport.session())


// passport.use(new passportLocal.Strategy({
//     usernameField: "email"

// }, async (email: string, password: string, done: any) => {
//     console.log('ttttttttt')
    

// }))


app.use(eventsRouter)
app.use(restaurantsRouter)
app.use(loginRouter)


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build', 'index.html'));
});


app.use((req: Request, res: Response) => {
    res.send('Sorry Something goes wrong')
})



app.listen(process.env.PORT || 3000)


