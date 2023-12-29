import express, { Request, Response } from "express"
import path from "path"

import mongoose from "mongoose"


import eventsRouter from './routes/events-routes'
import restaurantsRouter from './routes/restaurant-routes'

const app = express()

const db = 'mongodb+srv://nersesyanvach80:iloveyoulikeiloveme@cluster0.d9kwurl.mongodb.net/eventsdb?retryWrites=true&w=majority'

mongoose
    .connect(db)
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error))



app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static('./frontend/build'))



app.use(eventsRouter)
app.use(restaurantsRouter)




app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build', 'index.html'));
});


app.use((req: Request, res: Response) => {
    res.send('Sorry Something goes wrong')
})



app.listen(process.env.PORT || 3000)