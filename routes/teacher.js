var express = require('express');
const teacher_controllers= require('../controllers/teacher');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('teacher', { title: 'Search Result' });
});

/* GET teacher */
router.get('/', teacher_controllers.teacher_view_all_Page );
router.get('/teacher/:id', teacher_controllers.teacher_detail);
module.exports = router;