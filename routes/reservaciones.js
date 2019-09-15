var express = require('express');
var router = express.Router();


function connect(callback) {
  var MongoClient = require("mongodb").MongoClient;

  var url = "mongodb://localhost:27017"

  var client = new MongoClient(url);

  client.connect(function(err){
    if (err!==null) throw err;

    var db = client.db("lockers-app");
    var reservaciones = db.collection("Reservacion");
    console.log("Database connected");

    callback(reservaciones, client);
  });
}

function getReservaciones(callback) {
  connect(function(reservaciones, client){
    reservaciones.find({})
    .limit(100)
    .toArray(function(err2, docs){
      if(err2!==null) throw err2;

      console.log("got " + docs.length + " reservaciones");
      callback(docs);
      client.close();
    });
  });
}

function createReservacion(c) {
  connect(function(reservaciones, client) {
    reservaciones.insertOne(c, function(err){
      if(err!==null) throw err;

      console.log("Inserted");
    });
  });
}

/* GET home page. */
router.post('/createReservacion', function(req, res) {
  createReservacion({
    cedulaUsuario: req.body.cedulaUsuario,
    numeroLocker: req.body.numeroLocker,
    fecha: req.body.fecha
  })
  res.redirect("/");
});

router.get('/getReservaciones', function(req, res) {
  getReservaciones(function(docs){
    res.send(docs);
  });
});


module.exports = router;
