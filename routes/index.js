var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.send("홈페이지");
});

module.exports = router;
