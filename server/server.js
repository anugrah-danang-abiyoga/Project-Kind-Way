const express = require('express')
const hbs = require('express-handlebars') //this will be replaced with React
const bodyParser = require('body-parser')
const routes = require('./routes')
const fs = require('fs')
const path = require('path')

const server = express()

//Middleware 

server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))

//hbs will be replaced by react I guess
server.set('view engine', 'hbs')
server.use(express.static(path.join(__dirname, '../public')))
server.use(bodyParser.urlencoded({ extended: false }))


//Routes
// server.use('/', routes)

module.exports = server