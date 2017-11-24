import { Router } from 'express'
const router = Router()

router.get('/profile', (req, res, next) => {
  if (!req.session.authUser) {
    res.redirect('/')
  } else {
    next()
  }
})
export default router
