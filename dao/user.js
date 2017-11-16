const User = require('../model/user').User
const UserDao = {
  queryAllbyCriteria: (criteria, callback) => {
    User.find(criteria, (err, result) => {
      callback(err, result)
    })
  },
  queryOnebyCriteria: (criteria, callback) => {
    User.findOne(criteria, (err, result) => {
      callback(err, result)
    })
  },
  addUser: (userInfo, callback) => {
    let insertData = new User(userInfo)
    insertData.save(callback)
  },
  updateUser: (criteria, updateInfo, callback) => {
    User.update(criteria, updateInfo, (err, result) => {
      callback(err, result)
    })
  }
}

module.exports.UserDao = UserDao
