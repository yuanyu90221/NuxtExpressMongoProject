import { Router } from 'express'
// import { MailSender } from '../modules/mail-sender';
const {UserDao} = require('../../dao/user')
const router = Router()
const {User} = require('../../model/user')
const moment = require('moment')
// Add Post /login
router.post('/login', (req, res, next)=> {
    console.log(req.body)
    UserDao.queryOnebyCriteria(req.body, (err, result)=>{
       if(result!={}&& result!=null){
           req.session.authUser = {username: result.username}
           return res.json({username: result.username})
       }
       if(err){
           return res.status(200).json({err: err.message})
       }
       res.status(401).json({message: 'Bad credentials'})
    })
})
// Add Post /logout
router.post('/logout', (req, res, next)=>{
    delete req.session.authUser
    res.json({ok: true})
})

// Add register /register
router.post('/register', (req, res, next)=>{
    const {email, username, passwd} = req.body
    let expiredDate = moment().add({hour:1})
    let registeredUser = new User({username,email, passwd, registerDate: new Date(), expiredDate: expiredDate})
    UserDao.addUser(registeredUser, (err, result)=>{
        if(err)
            return res.json({err: err.message})   
        res.post('/sendActivateMail',{email, username, expiredDate})
        res.json({message: 'Activate Mail have been sended!'})    
    })
})

router.get('/activate', (req, res, next)=> {
    const {username} = req.query
    let currentTime = moment()
    UserDao.find({username}, (err, result)=>{
        if(err)
            return res.json({err: err.message})
        let {expiredDate} = result
        if (currentTime.isBefore(momnent(expiredDate))){
            UserDao.updateUser({username, validateStage:'activated'}, (error, result)=>{
                if(error) 
                    res.json({err: 'activated email error'})
                else {
                    res.redirect('/')
                }
            })
        }
        else {
            res.json({err: 'activated Time out'})
        }
    })
})
export default router