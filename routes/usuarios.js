var express = require('express');
var router = express.Router();


function connect(callback) {
  var MongoClient = require("mongodb").MongoClient;

  var url = "mongodb://localhost:27017"

  var client = new MongoClient(url);

  client.connect(function(err){
    if (err!==null) throw err;

    var db = client.db("lockers-app");
    var usuarios = db.collection("Usuario");
    console.log("Database connected");

    callback(usuarios, client);
  });
}

function getUsuarios(callback) {
  connect(function(usuarios, client){
    usuarios.find({})
    .limit(100)
    .toArray(function(err2, docs){
      if(err2!==null) throw err2;

      console.log("got " + docs.length + " usuarios");
      callback(docs);
      client.close();
    });
  });
}

function createUsuario(c) {
  connect(function(usuarios, client) {
    usuarios.insertOne(c, function(err){
      if(err!==null) throw err;

      console.log("Inserted");
    });
  });
}

/* GET home page. */
router.post('/createUsuario', function(req, res) {
  createUsuario({
    cedula: req.body.cedula,
    codigo: req.body.codigo,
    nombre: req.body.nombre
  })
  res.redirect("/");
});

router.get('/getUsuarios', function(req, res) {
  getUsuarios(function(docs){
    res.send(docs);
  });
});


module.exports = router;
