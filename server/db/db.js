const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const db = require('knex')(config)

