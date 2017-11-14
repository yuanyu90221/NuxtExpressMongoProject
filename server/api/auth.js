import { Router } from 'express'
const {User} = require('../../dao/user')
const router = Router()

// Add Post /login
router.post('/login', (req, res, next)=> {
    console.log(req.body)
    User.queryOnebyCriteria(req.body, (err, result)=>{
       if(result!={}&& result!=null){
           req.session.authUser = {username: result.username}
           return res.json({username: 'demo'})
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

export default router