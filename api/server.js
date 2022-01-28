const express = require('express')
const thingsRouter = require('./things/things-router')

const server = express();

server.use(express.json());
server.use('/api/things', thingsRouter)

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = server