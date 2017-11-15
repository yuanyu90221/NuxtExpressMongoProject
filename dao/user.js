const User = require('../model/user').User
const UserDao = {
  queryAllbyCriteria: (criteria, callback) => {
    User.find(criteria, (err, result) => {
      callback(err, result)
    })
    // User.findAsync()
    // .then((result) => {
    //     callback(null, result)
    // })
    // .catch((err)=>{
    //     // console.log(err.message)
    //     callback(err,null)
    // })
    // .error((err)=>{
    //     callback(err, null)
    // })
  },
  queryOnebyCriteria: (criteria, callback) => {
    User.findOne(criteria, (err, result) => {
      callback(err, result)
    })
  },
  addUser: (userInfo, callback) => {
    User.insert(userInfo, (err, result) => {
      callback(err, result)
    })
  },
  updateUser: (criteria, updateInfo, callback) => {
    User.update(criteria, updateInfo, (err, result) => {
      callback(err, result)
    })
  }
}

module.exports.UserDao = UserDao
