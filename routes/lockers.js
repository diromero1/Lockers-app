let express = require('express');
let router = express.Router();


function connect(callback) {
  let MongoClient = require("mongodb").MongoClient;

  let url = "mongodb+srv://dfnino10:<password>@cluster0-xlopf.mongodb.net/test?retryWrites=true&w=majority"


  let client = new MongoClient(url);

  client.connect(function(err){
    if (err!==null) throw err;

    let db = client.db("lockers-app");
    let lockers = db.collection("Lockers");
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
