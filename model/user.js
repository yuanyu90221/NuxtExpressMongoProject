const mongoose = require('mongoose')
const {Schema} = mongoose
const {getConnection} = require('../dbUtil/index').dbUtil
const schema = new Schema({
  username: {
    type: String,
    require: true
  },
  passwd: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  registerDate: {
    type: Date,
    required: true
  },
  validateStage: {
    type: String,
    required: true,
    default: 'register'
  },
  expiredDate: {
    type: Date,
    required: false
  }
}, {
  toObject: {
    transform: (doc, ret) => {
      // 移除掉 object._id
      delete ret._id
    }
  },
  toJSON: {
    transform: (doc, ret) => {
      delete ret._id
    }
  }
})
let conn = getConnection()

module.exports.User = conn.model('User', schema)
