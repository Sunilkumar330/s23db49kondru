var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('teacher', { title: 'Search Result' });
});

module.exports = router;

var express = require('express');
const teacher_controlers= require('../controllers/teacher');
var router = express.Router();
/* GET teacher */
router.get('/', teacher_controlers.teacher_view_all_Page );
module.exports = router;