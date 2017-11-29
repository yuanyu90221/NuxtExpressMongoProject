import { Router } from 'express'

import users from './users'
import auth from './auth'
import sendEmail from './send-mail'
// const jwt = require('jsonwebtoken')
// const {SECRET} = require('../../config/constants.json')
const router = Router()

router.use(auth)
// Add USERS Routes
// router.use(function (req, res, next) {
//   let token = req.body.token || req.query.token || req.headers['x-access-token']
//   if (token) {
//     jwt.verify(token, SECRET, function (err, decoded) {
//       if (err) {
//         res.json({err: 'fail to authentication'})
//       } else {
//         req.decoded = decoded
//         console.log(`decoded:`)
//         console.log(decoded)
//         next()
//       }
//     })
//   } else {
//     res.status(403).json({
//       err: 'token not provided'
//     })
//   }
// })
router.use(users)
router.use(sendEmail)

export default router
