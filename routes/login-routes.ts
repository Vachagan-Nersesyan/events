import express from "express"
import { sendLItems, sendRItems } from "../controllers/login-controller"
const router = express.Router()

router.post('/register', sendRItems)
router.get('/getlogin', sendLItems)



export default router