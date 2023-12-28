// import express from "express"
// import { contactSend } from "../controllers/contact-controller"

// import { body } from "express-validator"

// const router = express.Router()



// router.post(
//     '/send-contact',
//     [
//         body('info.name').trim().exists().isLength({ min: 2, max: 20 }).withMessage('Password must be at least 2 to 20 characters'),
//         body('info.email').trim().exists().isEmail().normalizeEmail().withMessage('Your Email is wrong'),
//         body('info.message').trim().exists().isLength({ min: 2, max: 70 }).withMessage('Password must be at least 20 to 70 characters'),
//     ],
//     contactSend
// )

// export default router