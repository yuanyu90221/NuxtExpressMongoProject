const User = require('../model/user').User

const UserDao = {
    queryAllbyCriteria: (criteria, callback) => {
        User.find(criteria, (err, result)=>{
            callback(err, result)
        })
    },
    queryOnebyCriteria: (criteria, callback) => {
        User.findOne(criteria, (err, result)=> {
            callback(err, result)
        })
    }
}

module.exports.User = UserDao