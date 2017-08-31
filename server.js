'use strict';

const express = require('express'),
      consign = require('consign')

let app = express()

app.use(express.static('web'))
consign()
    .include('config/components/server.js')
    .then('config/routes.js')
    .into(app)

module.exports = app