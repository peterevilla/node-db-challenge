const express = require('express');

const server = express();
const ProjectRouter = require('./projects/project-routes')
const TasksRouter = require('./tasks/task-routes')
const ResourcesRouter = require('./resources/resource-routes')
const db = require('./datas/db-config')
server.use(express.json());
server.use('/api/projects', ProjectRouter)
server.use('/api/tasks', TasksRouter)
server.use('/api/resources', ResourcesRouter)


server.get("/", (req, res) => {
    res.send("<h1>API</h1>")
})

module.exports = server;