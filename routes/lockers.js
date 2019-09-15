var express = require('express');
var router = express.Router();


function connect(callback) {
  var MongoClient = require("mongodb").MongoClient;

  var url = "mongodb://localhost:27017"

  var client = new MongoClient(url);

  client.connect(function(err){
    if (err!==null) throw err;

    var db = client.db("lockers-app");
    var lockers = db.collection("Lockers");
    console.log("Database connected");
    console.log('Hay ' + lockers.count()+ 'en la coleccion de lockers');

    callback(lockers, client);
  });
}

function getLockers(callback) {
  connect(function(lockers, client){
    lockers.find({})
    .limit(100)
    .toArray(function(err2, docs){
      if(err2!==null) throw err2;

      console.log("got " + docs.length + " lockers");
      callback(docs);
      client.close();
    });
  });
}

function createLocker(c) {
  connect(function(lockers, client) {
    lockers.insertOne(c, function(err){
      if(err!==null) throw err;

      console.log("Inserted");
      client.close();
    });
  });
}

/* GET home page. */
router.post('/createLocker', function(req, res) {
  createLocker({
    edificio: req.body.edificio,
    numero: req.body.numero,
  });
  res.redirect("/");
});

router.get('/getLockers', function(req, res) {
  getLockers(function(docs){
    res.send(docs);
  });
});



module.exports = router;
