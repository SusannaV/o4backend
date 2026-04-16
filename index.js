const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const tietokoneet = require('./tietokoneet.json')
const oheislaitteet = require('./oheislaitteet.json')
const tarjoukset = require('./tarjoukset.json')


app.get('/', (request, response) => {
  response.send('<h1>Hello Werkkokauppa!</h1>')
})


app.get('/api/tietokoneet', (request, response) => {
  response.json(tietokoneet)
})
app.get('/api/oheislaitteet', (request, response) => {
  response.json(oheislaitteet)
})
app.get('/api/tarjoukset', (request, response) => {
  response.json(tarjoukset)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})