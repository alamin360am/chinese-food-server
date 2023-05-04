const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const data = require('./data/data.json')
const recipe = require('./data/recipe.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
    res.send(data)
  })

app.get('/recipe', (req, res) => {
    res.send(recipe)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})