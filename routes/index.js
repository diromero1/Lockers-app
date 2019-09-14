var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/createMessage', function(req, res) {
  console.log("get");
  res.send("hola");
});

router.get('/getMessages', function(req, res) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
