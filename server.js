require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(`${error.message}`))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

app.locals.title = 'Flashcards Mongo';

const studentsRouter = require('./routes/students')

app.use('/api/v1/students', studentsRouter)
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log(`Connection Made`))

