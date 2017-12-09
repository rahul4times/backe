var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('index', { title: 'DBConfig' });
})

app.get('/cars', function(req, res) {
  knex('cars')
    .select()
    .orderBy('id')
    .then((carsList)=>{
      res.json(carsList)
    })

})

app.get('/cars/:id', function(req, res) {
  knex('cars')
    .select()
    .where('id', req.params.id)
    .then((car)=>{
      res.json(car)
    })
    .catch((error)=>{
      console.log(error);
    })
})

app.post('/todos', function(req, res) {
  res.send('add-one route')
})

app.put('/todos/:id', function(req, res) {
  res.send('change/update-one route')
})

app.delete('/todos/:id', function(req, res) {
  res.send('delete/remove-one route')
})



app.listen(port, function() {
console.log("listening on port: ", port);
})
