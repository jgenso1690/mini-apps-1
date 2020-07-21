const express = require ('express')
const app = express()
const port = 3000;

app.use(express.static('./public'))

app.get('/', function( req, res) {
  res.send()
})

app.listen(port, ()=> console.log('listening port 3000'))

