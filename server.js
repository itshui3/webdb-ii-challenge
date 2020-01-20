//dependencies
const express = require('express');
//build
const server = express();
//config
server.use(express.json());

const cors = require('cors');
server.use(cors());

const helmet = require('helmet');
server.use(helmet());
//api
const apiRouter = require('./api/apiRouter')
//root fetch & response
const rootRes = `
  <h1>WebDB-II</h1>
    <div>
      <h2>Cars Routes: /api/cars</h2>
      <ul>
        <li>GET /api/cars - fetches all car records</li>
        <li>GET /api/cars/:id - fetches car record by id</li>
        <li>POST /api/cars - adds new car record</li>
        <li>PUT /api/cars/:id - updates car record by id & payload</li>
        <li>DELETE /api/cars - **deletes all car records</li>
        <li>DELETE /api/cars/:id - deletes car record by id</li>
      </ul>
    </div>
`
server.get('/', (req, res) => {
  res.status(200).send(rootRes);
})
//api
server.use('/api', apiRouter);
//fallback404
server.use((req, res) => {
  res.status(404).json({ message: `status 404: resource not found` })
})
module.exports = server;