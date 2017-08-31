'use strict';

const http = require('http'),
      dir = __dirname.replace('config','web')

module.exports = app => {
    app.route('/')
    .get((req, res) => {
        res.sendFile(dir+'/index.html')
    })
    
    app.listen(app.get('port'),() => {
        console.log(`Running on ${app.get('port')}`)
    })
}
