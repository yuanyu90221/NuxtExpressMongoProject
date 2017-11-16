import { Router } from 'express'
const {UserDao} = require('../../dao/user')
const router = Router()
const {User} = require('../../model/user')
const moment = require('moment-timezone')
const {genContent} = require('../../util/genContent')
const {MailSender} = require('../modules/mail-sender')

// Add Post /login
router.post('/login', (req, res, next) => {
  console.log(req.body)
  UserDao.queryOnebyCriteria(req.body, (err, result) => {
    if (result !== {} && result != null && result.validateStage === 'activated') {
      req.session.authUser = {username: result.username}
      return res.json({username: result.username})
    }
    if (err) {
      return res.status(200).json({err: err.message})
    }
    res.status(401).json({message: 'Bad credentials'})
  })
})
// Add Post /logout
router.post('/logout', (req, res, next) => {
  delete req.session.authUser
  res.json({ok: true})
})
// Add register /register
router.post('/register', (req, res, next) => {
  const {email, username, passwd} = req.body
  let expiredDate = moment().tz('Asia/Taipei').add({hour: 1})
  let registeredUser = new User({username, email, passwd, registerDate: new Date(), expiredDate: expiredDate})
  UserDao.queryOnebyCriteria({username: registeredUser.username}, (err, result) => {
    if (err) { res.json({err: err.message}) } else {
      if (result !== {} && result !== null) {
        res.json({err: `${result.username} has been taken`})
      } else {
        UserDao.addUser(registeredUser, (err, result1) => {
          if (err) { return res.json({err: err.message}) }
          const activatedContent = genContent(username, expiredDate, `http://localhost:3000/api/activate?username=${username}`)
          MailSender.sendMail(email, 'Verify your CoolBitX email address', activatedContent, (err, result2) => {
            if (err) {
              res.json({err: err.message})
            } else {
              let currentExpiredDate = moment(expiredDate).format('YYYY-MM-DD HH:mm:sss')
              res.json({result: `Activated Mail has been sended for ${username} about expiredDate ${currentExpiredDate}`})
            }
          })
        })
      }
    }
  })
})

router.get('/activate', (req, res, next) => {
  const {username} = req.query
  let currentTime = moment()
  UserDao.queryOnebyCriteria({username: username}, (err, result) => {
    if (err) { return res.json({err: err.message}) }
    let {expiredDate} = result
    if (currentTime.isBefore(moment(expiredDate))) {
      UserDao.updateUser({username}, {validateStage: 'activated'}, (error, result1) => {
        if (error) { res.json({err: 'activated email error'}) } else {
          res.redirect('/')
        }
      })
    } else {
      res.json({err: 'activated Time out'})
    }
  })
})
export default router
