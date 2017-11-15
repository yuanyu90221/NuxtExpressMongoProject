let { domainName, port, user, passwd, dbname} = require('../config/mongoConfig.json')
domainName = domainName || process.env.domaineName 
port = port || process.env.port
user = user || process.env.user
passwd = passwd || process.env.passwd
dbname = dbname || process.env.dbname
const mongoose = require('mongoose')
// mongoose.Promise = Promise
const Promise = require('bluebird')
Promise.promisifyAll(mongoose)
// Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname
const dbUtil = {
    getConnection: ()=>{
        console.log(`domainName: ${domainName}, port: ${port}, user: ${user}, passwd: ${passwd}
                    dbname: ${dbname}`)
        console.log(`connection string mongodb://${user}:${passwd}@${domainName}:${port}/${dbname}`)
       return mongoose.createConnection(`mongodb://${user}:${passwd}@${domainName}:${port}/${dbname}`)
    }
}
module.exports.dbUtil = dbUtil