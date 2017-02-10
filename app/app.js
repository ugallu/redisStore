var express = require('express')
  , app = express()

var db = require('./db')

app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

db.connect()
app.listen(3000, function() {
  console.log('Listening on port 3000...')
})
