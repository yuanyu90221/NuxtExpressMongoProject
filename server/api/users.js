import { Router } from 'express'
import { create } from 'domain';
// const dbUtil = require('../../dbUtil/index').dbUtil
const {User} = require('../../dao/user')
const router = Router()

/* GET users listing. */
router.get('/users', function (req, res, next) {
  
  User.queryAllbyCriteria({}, (err, result)=>{
    if(!err)
      res.json({users: result})
    else 
      res.status(200).json({err: err.message})
  })
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
