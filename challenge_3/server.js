var express = require('express')
const app = express()
const port = 3000;
const db = require('./db');
var bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(express.static('public'))


app.get('/summary', function(req,res) { 
    console.log("HEREEEE", req.body);
/*    var user = 
    var query = `SELECT * FROM users where name=${user}`
    db.query(query, (err, result) => {
        if (err) {
            res.send('400');
            console.log("ERROR");
        } else {
            result
            res.end();
        }
    });;*/
res.send("hHOLAA");})


app.post('/checkout', function(req,res) {
    
    var user = req.body.user
    var mail = req.body.email
    var pass = req.body.pass
    var query = `INSERT INTO users (name, email, password) VALUES ('${user}', '${mail}', '${pass}')`
    db.query(query, (err, result) => {
        if (err) {
            res.send('400');
            console.log("ERROR");
        } else {
            result
            res.end();
        }
    });
})

app.post('/f2', function(req,res) {
    var data = req.body.f2;
    var userid = req.body.user;
    var line1 = data.line1
    var line2 = data.line2
    var city = data.city
    var state = data.state
    var zipcode = data.zipcode
    var phonenum = data.phonenumber
    var query = `UPDATE users SET line1 = '${line1}',line2 = '${line2}',city = '${city}',state = '${state}', zipcode = '${zipcode}', phonenumber = '${phonenum}' where name = '${userid}'`
    
    db.query(query, (err, result) => {
        if (err) {
            res.send('400');
            console.log("ERROR");
        } else {
            result
            console.log('data ssaved!')
            res.end();
        }
    });
})

app.post('/f3', function(req,res) {
    var data = req.body.f3;
    var userid = req.body.user;
    var card = data.card
    var expdate = data.expdate
    var cvv = data.cvv
    var billing = data.billing
   
    var query = `UPDATE users SET creditcard = '${card}',expiredate = '${expdate}',cvv = '${cvv}',billingzipcode = '${billing}' where name = '${userid}'`
    
    db.query(query, (err, result) => {
        if (err) {
            res.send('400');
            console.log("ERROR");
        } else {
            result
            console.log('data ssaved!')
            res.end();
        }
    });
})
       
       




app.listen(port, ()=> console.log(`Listening at http://localhost:${port}...`))

