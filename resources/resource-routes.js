const express = require('express')
const Resources = require('./resource-model.js')
const router = express.Router()


router.get('/', (req, res) => {
    Resources.find()
    .then(resources => {
        res.json(resources)
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    console.log(id)
    Resources.findById(id)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})

router.post('/', (req, res) => {
    console.log(req)
    Resources.add(req.body)
    .then(resources => {
        res.status(201).json(resources)
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})

router.delete('/:id', (req, res) => {
    Resources.remove(req.params.id)
    .then(resource => {
        res.status(201).json({message: 'resource was deleted'})
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})


router.put('/:id', (req, res) => {
    Resources.update(req.params.id, req.body)
    .where(resource => {
        res.status(201).json({message: 'resource was updated'})
    })
    .catch(error => {
        res.status(500).json({message: 'error'})
    })
})






module.exports = router;