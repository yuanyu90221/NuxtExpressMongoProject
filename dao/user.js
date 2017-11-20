const User = require('../model/user').User
const UserDao = {
  queryAllbyCriteria: (criteria, callback) => {
    User.find(criteria, (err, result) => {
      try {
        callback(err, result)
      } catch (err) {
        throw new Error(err.message)
      }
    })
  },
  queryOnebyCriteria: (criteria, callback) => {
    User.findOne(criteria, (err, result) => {
      try {
        callback(err, result)
      } catch (err) {
        throw new Error(err.message)
      }
    })
  },
  addUser: (userInfo, callback) => {
    let insertData = new User(userInfo)
    insertData.save(callback)
  },
  updateUser: (criteria, updateInfo, callback) => {
    User.update(criteria, updateInfo, (err, result) => {
      try {
        callback(err, result)
      } catch (err) {
        throw new Error(err.message)
      }
    })
  }
}

module.exports.UserDao = UserDao
