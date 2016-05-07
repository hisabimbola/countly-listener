var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/listener', function(req, res, next) {
  console.log('abimbola', req.body)
  res.end();
});

module.exports = router;
