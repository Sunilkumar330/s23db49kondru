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

/* GET detail teacher page */
router.get('/detail', teacher_controllers.teacher_view_one_Page);

/* GET create costume page */
router.get('/create', teacher_controllers.teacher_create_Page);

/* GET create update page */
router.get('/update', teacher_controllers.teacher_update_Page);

/* GET delete costume page */
router.get('/delete', teacher_controllers.teacher_delete_Page);

module.exports = router;