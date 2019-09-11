var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/createMessage', function(req, res, next) {
  res.send("hola");
});

router.get('/getMessages', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
