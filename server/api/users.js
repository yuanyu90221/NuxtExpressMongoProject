import { Router } from 'express'
// import { create } from 'domain';
// const dbUtil = require('../../dbUtil/index').dbUtil
const {UserDao} = require('../../dao/user')
const router = Router()

/* GET users listing. */
router.get('/users', function (req, res, next) {
  UserDao.queryAllbyCriteria({}, (err, result) => {
    if (!err) { res.json({users: result}) } else { res.status(200).json({err: err.message}) }
  })
})

/* GET user by ID. */

/* GET user by name */
router.get('/user/:username', (req, res, next) => {
  console.log(req.params)
  const { username } = req.params
  UserDao.queryOnebyCriteria({username}, (err, result) => {
    if (!err) { res.json({err: result}) } else { res.status(200).json({err: err.message}) }
  })
})

export default router
