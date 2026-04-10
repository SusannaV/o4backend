const express = require('express')
const app = express()

let products = [
    {
      "id": 1,
      "nimi": "Acer Nitro XV2",
      "hinta": 599.00,
      "ominaisuudet": ["Huipputarkka", "Teräväpiirto", "Hyvä"],
      "koko": "19\"",
      "merkki": "Acer",
      "lisayspvm": "2024-02-15",
      "arviot": 3.8,
      "suosio": 5,
      "kategoria": "Näytöt"
    },
    {
      "id": 2,
      "nimi": "Lenovo IdeaPad Slim",
      "hinta": 699.00,
      "ominaisuudet": ["Kevyt", "Nopea", "Hyvä"],
      "koko": "17\"",
      "merkki": "Lenovo",
      "lisayspvm": "2024-05-20",
      "arviot": 4.0,
      "suosio": 4,
      "kategoria": "Läppärit"
    }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello Werkkokauppa!</h1>')
})

app.get('/api/products', (request, response) => {
  response.json(products)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})