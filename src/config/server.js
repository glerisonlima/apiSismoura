const port = 3003


const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(queryParser())

server.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`)
})

module.exports = server