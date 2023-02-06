require('dotenv').config()
const cors = require('cors');

const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(`${error.message}`))
db.once('open', () => console.log('Connected to Database'))

app.use(cors());
app.use(express.json())

app.locals.title = 'Flashcards Mongo';

const studentsRouter = require('./routes/students')

app.use('/api/v1/students', studentsRouter)

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*")

    next()
})
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log(`Connection Made`))

