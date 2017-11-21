const User = require('../model/user').User
const UserDao = {
  queryAllbyCriteria: (criteria, callback) => {
    return User.find(criteria, (err, result) => {
      callback(err, result)
    })
  },
  queryOnebyCriteria: (criteria, callback) => {
    return User.findOne(criteria, (err, result) => {
      callback(err, result)
    })
  },
  addUser: (userInfo, callback) => {
    let insertData = new User(userInfo)
    // insertData.save(callback)
    return User.insertMany(insertData, callback)
  },
  updateUser: (criteria, updateInfo, callback) => {
    return User.update(criteria, updateInfo, (err, result) => {
      callback(err, result)
    })
  }
}

module.exports.UserDao = UserDao
