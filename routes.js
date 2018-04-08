const express = require('express')
const router = express.Router()
const server = require('./server')

var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var db = require('knex')(config)


router.get('/', function (req, res) {
    console.log('berhasil');
    res.send('Matur Nuwun')
})


module.exports = router