
const express = require('express')
const router = express.Router()
const Student = require('../models/student')

// const getStudents = studentCollection.map(student => new Student({
//     name: student.name, 
//     favoriteBands: student.favoriteBands,
//     favoriteFoods: student.favoriteFoods,
//     pets: student.pets,
//     location: student.location,
//     image: student.image
// }))

// Getting all
router.get('/', async (req, res) => {
    try {
        const students = await Student.find()
        res.json(students)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
// router.get('/', (req, res) => {
//     res.send('Hello World')
// })
// Getting one
router.get('/:id', getStudent, async(req, res) => {
    res.json(res.student)
})
// Creating one
router.post('/', async (req, res) => {
    const student = new Student({
        name: req.body.name,
        favoriteBands: req.body.favoriteBands,
        favoriteFoods: req.body.favoriteFoods,
        location: req.body.location,
        pets: req.body.pets,
        image: req.body.image
    })
    try {
        const newStudent = await student.save()
        res.status(201).json(newStudent)
        // right now we're able to send back a 201 but the student object is not actually being saved
        // need to seed the studentCollection above
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
//Updating one
router.patch('/:id', getStudent, async(req, res) => {
    if(req.body.id != null) {
        res.student.id = req.body.id
    }
    if(req.body.name != null) {
        res.student.name = req.body.name
    }
    if(req.body.favoriteBands != null) {
        res.student.favoriteBands = req.body.favoriteBands
    }
    if(req.body.favoriteFoods != null) {
        res.student.favoriteFoods = req.body.favoriteFoods
    }
    if(req.body.pets != null) {
        res.student.pets = req.body.pets
    }
    if(req.body.location != null) {
        res.student.location = req.body.location
    }
    if(req.body.image != null) {
        res.student.image = req.body.image
    }
    try {
        const updatedStudent = await res.student.save()
        res.json(updatedStudent)
    } catch (err){
        res.status(400).json({ message: err.message })
    }
})
// Deleting one
router.delete('/:id', getStudent, async(req, res) => {
    try {
        await res.student.remove()
        res.json({ message: 'Student Deleted'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getStudent(req, res, next) {
    let student 
    try {
        student = await Student.findById(req.params.id)
        if(!student) {
            return res.status(404).json({ message: 'Cannot find student' })
        } 
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
    res.student = student 
    next()
    //next allows us to move on to the next piece of middleware or the next student themself
}

module.exports = router