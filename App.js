require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path');


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

// Running Server
app.listen(process.env.DEFAULT_PORT || 3001, () => {
    console.log('listening on port: ' + process.env.DEFAULT_PORT || 3001)
})