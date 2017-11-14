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
    }
    // ,
    // email: {
    //     type: String,
    //     require: true
    // },
    // registerDate: {
    //     type: Date,
    //     required: true
    // },
    // validateStage: {
    //     type: String,
    //     required: true
    // }    
})
let conn = getConnection()

module.exports.User = conn.model('User', schema)