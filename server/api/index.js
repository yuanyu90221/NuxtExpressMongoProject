import { Router } from 'express'

import users from './users'
import auth from './auth'
import sendEmail from './send-mail'
const router = Router()

// Add USERS Routes
router.use(users)
router.use(auth)
router.use(sendEmail)
export default router
