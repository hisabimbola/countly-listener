var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/platform/ios', function(req, res, next) {
  console.log('abimbola', req.body)
  res.end();
});
router.post('/session/count', function(req, res, next) {
  console.log('session', req.body)
  res.end();
});

module.exports = router;
