var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');
const bookshelf = require('bookshelf')(knex);

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


// Bookshelf relationship between tables
var Cars = bookshelf.Model.extend({
  tableName: 'cars',
  images: function() {
    return this.hasMany(Images);
  },
  features: function() {
    return this.hasMany(Features);
  },
});

var Images = bookshelf.Model.extend({
  tableName: 'images',
  cars: function(){
    return this.belongsTo(Cars);
  }
})

var Features = bookshelf.Model.extend({
  tableName: 'features',
  cars: function(){
    return this.belongsTo(Cars);
  }
})

// Frontend Starts Here

app.get('/', function(req, res) {
  res.render('index', { title: 'Routes' });
})



//------- Display All Cars --------- //
app.get('/cars', function(req, res) {
  knex.raw(`SELECT DISTINCT ON (cars.id)
    cars.id, cars.year, cars.make, cars.model, cars.trim, cars.engine, cars.drive_type, cars.body_type, cars.ext_color, cars.int_color, cars.transmission, cars.price, cars.sale, cars.status, cars.vin, images.link, features.elect_stab, features.wireless, features.seat, features.keyless, features.trip_comp, features.tire_pressure, features.wiper, features.headlight FROM cars
    RIGHT JOIN images ON cars.id = images.car_id
    RIGHT JOIN features ON cars.id = features.car_id;`)
  .then(data => {
    res.json(data.rows);
  })
  .catch(error => {
    console.log('error', error)
  })
})

// Using bookshelf joining images and features with cars table
//------- Display One Car --------- //
app.get('/cars/:id', function(req, res) {
  Cars.where({id: req.params.id})
    .fetch({withRelated: ['images','features']})
    .then(car => res.send({car: car}))
    .catch(error=>{
      console.log('error', error);
    })
})

//------- Add One Car --------- //
app.post('/car', function(req, res){
  new Cars().save({
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    trim: req.body.trim,
    engine: req.body.engine,
    drive_type: req.body.drive_type,
    body_type: req.body.body_type,
    ext_color: req.body.ext_color,
    int_color: req.body.int_color,
    transmission: req.body.transmission,
    price: req.body.price,
    sale: req.body.sale,
    status: req.body.status,
    vin: req.body.vin,
  })
  .then(function(car){
    new Images().save({
      car_id: car.get('id'),
      link: req.body.link
    }),
    new Features().save({
      car_id: car.get('id'),
      elect_stab: req.body.elect_stab,
      wireless: req.body.wireless,
      seat: req.body.seat,
      keyless: req.body.keyless,
      trip_comp: req.body.trip_comp,
      tire_pressure: req.body.tire_pressure,
      wiper: req.body.wiper,
      headlight: req.body.headlight
    })
    .then(res.sendStatus(200));
  });
})

//------- Edit Car --------- //
app.patch('/car/:id', function(req, res) {
  console.log('PARAM ID', req.params.id);
  console.log('BODY', req.body);
  knex('cars')
    .where('id', req.params.id)
    .update(req.body.car)
    .then(() => {
      knex('images')
        .where('car_id', req.params.id)
        .update({link:req.body.image})
        .then(()=>{
          knex('features')
          .where('car_id', req.params.id)
          .update(req.body.features)
          .then(() => {
            knex('cars')
            .select()
            .then(data => res.send(data))
          })
        })
    })
    .catch(error => {
      console.log('error', error);
    })
})


//------- Delete Car --------- //
app.delete('/car/:id', function(req, res) {
  knex('cars')
    .where('id', req.params.id)
    .del()
    .then(() => {
      knex('cars')
      .select()
      .then(data => res.send(data))
  })
})


//------- Backend Starts Here --------- //
//------- Display All Messages ------- //
app.get('/messages', function(req, res) {
  knex('user')
    .orderBy('id')
    .then(userList => {
      res.send(userList)
    })
    .catch(error => {
      console.log('error', error);
    })

})

//------- Display One Message --------- //
app.get('/messages/:id', function(req, res) {
  knex('user')
    .where('id', req.params.id)
    .then(oneMessage => {
      res.send(oneMessage)
    })
    .catch(error => {
      console.log('error', error);
    })

})

//------- Post One Message --------- //
app.post('/messages/', function(req, res) {
  knex('user')
    .insert({
      uname: req.body.uname,
      uemail: req.body.uemail,
      uphone: req.body.uphone,
      uinterest: req.body.uinterest,
      umessage: req.body.umessage,
      followup: req.body.followup,
      read: req.body.read
    })
    .then(res.sendStatus(200))
    .catch(error => {
      console.log('error', error);
    })
})

//------- Edit One Message --------- //
app.patch('/messages/:id', function(req, res) {
  knex('user')
    .where('id', req.params.id)
    .update({
      followup: req.body.followup,
      read: req.body.read
    })
    .then(res.sendStatus(200))
    .catch(error => {
      console.log('error', error);
    })
})

//------- Delete One Message --------- //
app.delete('/messages/:id', function(req, res) {
  knex('user')
    .where('id', req.params.id)
    .del()
    .then(() => {
      knex('user')
      .select()
      .then(data => res.send(data))
  })
})

//

// app.post('/todos', function(req, res) {
//   res.send('add-one route')
// })
//
// app.put('/todos/:id', function(req, res) {
//   res.send('change/update-one route')
// })
//
// app.delete('/todos/:id', function(req, res) {
//   res.send('delete/remove-one route')
// })



app.listen(port, function() {
console.log("Howdy! Port:", port);
})
