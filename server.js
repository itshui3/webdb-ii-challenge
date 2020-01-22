//build
const express = require('express')
const server = express();
//dependencies
server.use(express.json());

const cors = require('cors');
server.use(cors());

const helmet = require('helmet');
server.use(helmet());

//api
const apiRouter = require('./api/api-router.js');

server.get('/', (req, res) => {
  res.status(200).send(`root get, send fetches to /api/:route`)
})

server.use('/api', apiRouter);

// 404 fallback
server.use((req, res) => {
  res.status(404).json({ message: `status 404: resource not found` })
})

module.exports = server;