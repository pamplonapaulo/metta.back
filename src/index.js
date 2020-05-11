const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()


app.use(cors())
/* Later under production:

app.use(cors({
  origin: 'https://mantrapp.com'
})) */

app.use(express.json())
app.use(routes)

app.listen(3000)
