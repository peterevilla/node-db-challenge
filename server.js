const express = require('express');

const server = express();
const ProjectRouter = require('./projects/project-routes')
const db = require('./data/db-config')
server.use(express.json());
server.use('/api/projects', ProjectRouter)

server.get("/", (req, res) => {
    res.send("<h1>API</h1>")
})

module.exports = server;