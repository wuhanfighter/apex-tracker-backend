// module imports
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const helmet = require('helmet')

// enviroment variable
require('dotenv').config({ path: './.env'})

// handler and router imports
const middleware = require('./middlewares/middlewares')
const indexRouter = require('./routes/index')
const profileRouter = require('./routes/api/profile')

// new express instance
const app = express()

// utilize module imports
app.use(express.static('client'))
app.use(helmet())
app.use(logger('dev'))
app.use(cors({ origin: process.env.CORS_ORIGIN }))
app.use(express.json())

// application routes
app.use('/', indexRouter);
app.use('/api/v1/profile', profileRouter)

// utilize middlewares
app.use(middleware.notFound)
app.use(middleware.errorHandler)

// module export
module.exports = app
