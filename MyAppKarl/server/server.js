const express = require('express');
const bodyParser = require('body-parser')
const http = require('http')
const app = express();

const route = require('./routes/router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use('/', route)

const port = process.env.PORT || '8080'
app.set('port', port)
const server = http.createServer(app)

server.listen(port, () => console.log('Listenning on: ' + port));