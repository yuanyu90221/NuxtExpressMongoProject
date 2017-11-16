import { Router } from 'express'
// const {User} = require('../../dao/user')
const {MailSender} = require('../modules/mail-sender')
const router = Router()
const {genContent} = require('../../util/genContent')
router.post('/sendActivateMail', (req, res, next) => {
  let {email, username, expiredDate} = req.body
  console.log('send Activated letter')
  const activatedContent = genContent(username, expiredDate, `http://localhost:3000/activate?username=${username}`)
  MailSender.sendMail(email, 'Verify your CoolBitX email address', activatedContent, (err, result) => {
    if (err) {
      console.log(err)
      res.json({err: err.message})
    } else {
      console.log(result)
      res.json({result: `Activated Mail has been sended for ${username} about expiredDate ${expiredDate}`})
    }
  })
})
// sendMail Util
export default router
