const express = require('express')
const Tasks = require('./task-model.js')
const router = express.Router()


router.get('/', (req, res) => {
    Tasks.find()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    Tasks.findById(id)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})

router.post('/', (req, res) => {
    Tasks.add(req.body)
    .then(tasks => {
        res.status(201).json({message: 'Task Added'})
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})

router.delete('/:id', (req, res) => {
    Tasks.remove(req.params.id)
    .then(task => {
        res.status(201).json({message: 'Task was deleted'})
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})


router.put('/:id', (req, res) => {
    Tasks.update(req.params.id, req.body)
    .where(task => {
        res.status(201).json({message: 'Project was updated'})
    })
    .catch(error => {
        res.status(500).json({message: 'error'})
    })
})






module.exports = router;