const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/players0/', db.getPlayers0)
app.get('/players1/:fullname', db.getPlayers1)
app.get('/players2/:collegename', db.getPlayers2)
app.get('/players3/:seasonyear', db.getPlayers3)
app.get('/players12/:playername/:collegename', db.getPlayers12)
app.get('/players13/:playername/:seasonyear', db.getPlayers13)
app.get('/players23/:collegename/:seasonyear', db.getPlayers23)
app.get('/players123/:collegename/:seasonyear/:fullname', db.getPlayers123)


app.get('/teams', db.getTeams)
app.get('/teams/:teamname', db.getTeamPlayersByTeamName)
app.get('/teams/season/:seasonnum', db.getTeamPlayersBySeason)
app.get('/teams/:teamname/:seasonnum', db.getTeamPlayersByTeamNameAndSeason)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})