'use strict';

const bodyParser = require('body-parser'),
      cors = require('cors')

module.exports = app => {
    app.set('port', 3000)
    app.use(cors({
        origin : ['*'],
        methods : ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders : ['Content-Type', 'Authorization']
    }))
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended : true}))
}