const express = require('express')
const Projects = require('./project-model.js')
const router = express.Router()


router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    Projects.findById(id)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})

router.post('/', (req, res) => {
    Projects.add(req.body)
    .then(projects => {
        res.status(201).json({message: 'Project Added'})
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
    .then(project => {
        res.status(201).json({message: 'Project was deleted'})
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})


// router.put('/:id', (req, res) => {
//     db.update(req.params.id, req.body)
//     .where(car => {
//         res.status(201).json({message: 'car was updated'})
//     })
//     .catch(error => {
//         res.status(500).json({message: 'error'})
//     })
// })






module.exports = router;