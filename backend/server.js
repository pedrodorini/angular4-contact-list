const express = require('express')
const bodyParser = require('body-parser')
const config = require('./app/config')
const app = express()
const cors = require('cors')

const { Pool, Client } = require('pg')
const pool = new Pool({
    user: config.database.user,
    host: config.database.host,
    database: config.database.db,
    password: config.database.password,
    port: config.database.port
})

pool.on('error', (err, client) => {
    console.log('Erro inesperado, cliente inativo.', err)
    process.exit(-1)
})
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

require('./app/routes')(app, pool)

app.listen(config.server.port, () => {
    console.log('Servidor funcionando em localhost:', config.server.port)
})
