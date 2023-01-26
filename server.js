require('dotenv').config()
const cors = require('cors');

const express = require('express')
const app = express()
const mongoose = require('mongoose')
// process.env.DATABASE_URL
// mongoose.set('strictQuery',true);
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(`${error.message}`))
db.once('open', () => console.log('Connected to Database'))

app.use(cors());
app.use(express.json())
// app.set('port', process.env.PORT || 3001);

app.locals.title = 'Flashcards Mongo';

const studentsRouter = require('./routes/students')

app.use('/api/v1/students', studentsRouter)
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log(`Connection Made`))

app.locals.students = [
    {
        id: 1,
        name: 'Anthony Shellman',
        favoriteBands: 'Rubber',
        favoriteFoods: 'Pizza',
        pets: 'None (yet)',
        location: 'Denver, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03499VGM8F-2584f1b7097d-512'
    },
    {
        id: 2,
        name: 'Beth Wilson',
        favoriteBands: 'Country Music',
        favoriteFoods: 'Thai',
        pets: 'Jimmy Dog',
        location: 'Colorado',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03EQ0E5S5S-01480fa89527-512'
    },
    {
        id: 3,
        name: 'Dinne Kopelevich',
        favoriteBands: 'Bat For Lashes',
        favoriteFoods: 'Dumplings',
        pets: 'None (yet)',
        location: 'Denver, CO (for now)',
        image: 'https://ca.slack-edge.com/T029P2S9M-U037D8A3JAF-9c447e33ba89-512'
    },
    {
        id: 4,
        name: 'Matt Press',
        favoriteBands: 'Domi and JD Beck',
        favoriteFoods: 'Artichokes',
        pets: 'Bird',
        location: 'Denver, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03A7H0J03A-7ae1427ca3e4-512'
    },
    {
        id: 5,
        name: 'Tori Fields',
        favoriteBands: '...all the music',
        favoriteFoods: 'Pesto Pasta',
        pets: 'Lacey the pupperflake',
        location: 'Albuquerque, NM',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03BZPMJYDP-26b70f8eff16-512'
    },
    {
        id: 6,
        name: 'Dana Chapman',
        favoriteBands: 'The Amazing Devil, Evanescence, Florence + the Machine',
        favoriteFoods: 'Sushi, Poke Bowls, Bibimbop',
        pets: 'Loki (Doge)',
        location: 'Panama City, FL',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03EMK7B0R0-ff044b6f562d-512'
    },
    {
        id: 7,
        name: 'Marianne Barton',
        favoriteBands: 'Country Music',
        favoriteFoods: 'Italian, Thai, Cuban',
        pets: 'Penny the chocolate lab, Chloe the yellow lab',
        location: 'Boulder, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U034VA6EPNH-d02196003250-512'
    },
    {
        id: 8,
        name: 'Andrew Knapick',
        favoriteBands: 'Slipknot, Bob Marley, Natalia Lafourcade',
        favoriteFoods: 'Mexican, Indian, Thai, Japanese',
        pets: 'None (yet)',
        location: 'Mexico City, MX',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03BPFLPQTE-fb5ef6d7fb19-512'
    },
    {
        id: 9,
        name: 'Colby Pearce',
        favoriteBands: 'Grateful Dead, Kevin Morby, Freddie Gibbs',
        favoriteFoods: 'Ramen',
        pets: 'Pepita the dog',
        location: 'Littleton, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U0352FVFLCR-f39d787ee4b9-512'
    },
    {
        id: 10,
        name: 'Piper Jarrett',
        favoriteBands: 'The Beatles',
        favoriteFoods: 'Spaghetti',
        pets: 'Thai the cat',
        location: 'Denver, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03BEFSF614-10ce5886b716-512'
    },
    {
        id: 11,
        name: 'Catalyst ForChange',
        favoriteBands: 'The Weekend, Daft Punk, Com Truise',
        favoriteFoods: 'Sushi, Pad Thai, Korma',
        pets: 'Maurice the cat, Ginger the chihuahua',
        location: 'Denver, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03BPFLME04-482a1bbb1fb1-512'
    },
    {
        id: 12,
        name: 'Will Hobson',
        favoriteBands: 'Barenaked Ladies, Postmodern Jukebox',
        favoriteFoods: 'Burgers, Breakfast Foods',
        pets: 'Stone the cat',
        location: 'Knoxville, TN',
        image: 'https://ca.slack-edge.com/T029P2S9M-U0319FB0P2B-48bb81f1f730-512'
    },
    {
        id: 13,
        name: 'Lee Young',
        favoriteBands: 'Anderson .Paak, LaRue, The Kount, A Tribe Called Quest',
        favoriteFoods: 'Sweet Potato Pie, Mango Flavored Anything',
        pets: 'Mamba the boxer',
        location: 'Denver, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03HLLGFTRA-18b04c3ed26e-512'
    },
    {
        id: 14,
        name: 'Carissa Gross',
        favoriteBands: 'Odeza, Sylvan Esso, Tourist',
        favoriteFoods: 'Vegetables, Apples & Peanut Butter',
        pets: 'Olive the dog',
        location: 'Golden, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U037D8H1VBL-d0247594e21a-512'
    },
    {
        id: 15,
        name: 'Scott Gaines',
        favoriteBands: 'Florence + the Machine',
        favoriteFoods: 'TexMex',
        pets: 'Oscar the golden, Walter the mutt',
        location: 'Denver, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03BZPMRGJD-6e30e7ac2f81-512'
    },
    {
        id: 16,
        name: "Dani Lopez-Cruz",
        favoriteBands: "The Cure, Sad Lovers and Giants, Caifanes, Double Virgo, Jaguares, Robert Glasper,  Black Jazz Consortium, Depeche Mode, N.E.R.D.",
        favoriteFoods: "Enhiladas, Rice Bowls, Mediterranean Food, Pozole, Ceviche",
        pets: 'None',
        location: "Denver, Co",
        image: 'https://ca.slack-edge.com/T029P2S9M-U039K1JSR18-19f04a8b069f-512'
    },
    {
        id: 17,
        name: 'Alycia Canavan',
        favoriteBands: 'The original Broadway cast of any musical',
        favoriteFoods: 'Champagne Mangos, Bibimbap, Sourdough Toast',
        pets: 'Che the tuxedo cat',
        location: 'Eugene, OR',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03FB9L3VPA-27294bf2a885-512'
    },
    {
        id: 18,
        name: 'Morgan Berry',
        favoriteBands: 'Trevor Hall, Twiddle',
        favoriteFoods: 'All things Mediterranean, Tabouli, Hummus and Pita, Dolmas',
        pets: 'Morgan the dog',
        location: 'Boulder, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U037D8GHTSN-dcc12a6f2294-512'
    },
    {
        id: 19,
        name: 'Cole Anthony',
        favoriteBands: 'LCD Soundsystem',
        favoriteFoods: 'Carbs',
        pets: 'Bean the dog',
        location: 'Denver, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03BM5H6VPU-9f32d4bb43da-512'
    },
    {
        id: 20,
        name: 'Nicole Forseth',
        favoriteBands: 'Glass Animals',
        favoriteFoods: 'Sushi, Tacos, Cheesecake',
        pets: 'Katara the cat',
        location: 'Broomfield, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U034M0V066R-f86af59eb197-512'
    },
    {
        id: 21,
        name: 'Stephanie Guzman',
        favoriteBands: 'Goth Babe, Blood Cultures, DRAMA, Bomba Estereo, The Cure, Tourist',
        favoriteFoods: 'Hamburgers, Chicken Flautas, Key Lime Pie',
        pets: 'Oscar the dog',
        location: 'East Texas',
        image: 'https://ca.slack-edge.com/T029P2S9M-U035DL45JGG-703e746e2f25-512'
    },
    {
        id: 22,
        name: 'Hazel Pablo',
        favoriteBands: 'Point North, They, Foster the People, Paramore, Chainsmokers, Emotional Oranges',
        favoriteFoods: 'DESSERT, Sushi, Pizza',
        pets: 'Rogue, Apollo',
        location: 'Denver, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03E71X6TQF-91470b624f1c-512'
    },
    {
        id: 23,
        name: 'Ali Nix',
        favoriteBands: 'Nirvana, Kasbo, Glass Animals',
        favoriteFoods: 'Mac n Cheese, Indian, Mexican',
        pets: 'Mika the dog',
        location: 'Denver, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U02V1USH6LT-f322bf55244b-512'
    },
    {
        id: 24,
        name: 'Jedeo Manirikumwenatwe',
        favoriteBands: 'Coldplay',
        favoriteFoods: 'Sushi',
        pets: 'Luna, Layla',
        location: 'Wellington, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03EQ0DUU84-9c2db51d0e1c-512'
    },
    {
        id: 25,
        name: 'Emily Miles',
        favoriteBands: 'I love all music but am selective about my country, rap, metal, and electronic music',
        favoriteFoods: 'The edible kind',
        pets: 'Nova the Diva Queen, Nebula the Adorable Dumpster Gremlin',
        location: 'Planet Earth',
        image: 'https://ca.slack-edge.com/T029P2S9M-U038Y3NG138-cc12de157477-512'
    },
    {
        id: 26,
        name: 'Michael Martinelli',
        favoriteBands: 'Paradise Lost, Cradle of Filth',
        favoriteFoods: 'Mexican, Italian',
        pets: 'Loki, Sophie, Lazarus',
        location: 'Littleton, CO',
        image: ''
    },
    {
        id: 27,
        name: 'Hunter Monroe',
        favoriteBands: 'STS9, Daft Punk',
        favoriteFoods: 'Pizza, Tacos',
        pets: 'Rex the cat, Leo the cat',
        location: 'Denver, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U0394NQJXUK-326e149b631d-512'
    },
    {
        id: 28,
        name: 'Hannah Celemen',
        favoriteBands: 'Paramore, Charlie Puth',
        favoriteFoods: 'Thai Curry, Mechado, Tacos',
        pets: 'Lyra, Ouni',
        location: 'Denver, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03FB9Q13UG-f38d8127e32f-512'
    },
    {
        id: 29,
        name: 'Derek Cooper',
        favoriteBands: 'Metallica, Armin van Burren',
        favoriteFoods: 'Pad Kra Pow, Etouffee',
        pets: 'Holly the cat',
        location: 'Denver, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U03F08HDNBT-4e2551b27c7e-512'
    },
    {
        id: 30,
        name: 'Danielle Sweeny',
        favoriteBands: 'Robyn, Nelly, Modest Mouse, Dan Deacon',
        favoriteFoods: 'Poke Bowls, Mac n Cheese, Street Tacos',
        pets: 'None, yet',
        location: 'Denver, CO',
        image: 'https://ca.slack-edge.com/T029P2S9M-U034M0V3S9K-f5c8184f2d3e-512'
    }
]