require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path');


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

// Running Server
app.listen(process.env.PORT, () => {
    console.log('listening on port: ' + process.env.PORT)
})