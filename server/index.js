// global.Promise = require('bluebird')
import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import bodyParser from 'body-parser'
import api from './api'
import middleware from './middleware'
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

const session = require('express-session')
app.use(bodyParser.json())
app.use(session({
  secret: 'CoolWallet',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.set('port', port)

// Import API Routes
app.use('/', middleware)
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
