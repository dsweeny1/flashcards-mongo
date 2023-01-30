const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    favoriteBands: {
        type: String,
        required: true
    },
    favoriteFoods: {
        type: String,
        required: true
    },
    pets: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model('Student', studentSchema)
// this model allows us to interact directly with the database we're creating with mongoDB