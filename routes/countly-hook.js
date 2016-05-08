var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/platform/ios', function(req, res, next) {
  console.log(req.body);
  res.end();
});
router.post('/session/count', function(req, res, next) {
  console.log(req.body);
  res.end();
});

router.post('/event-segmentation', function(req, res) {
  console.log(req.body);
});
module.exports = router;
