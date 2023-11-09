var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var teacher_controller = require('../controllers/teacher');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/teacher', teacher_controller.teacher_create_post);
// DELETE request to delete Costume.
router.delete('/teacher/:id', teacher_controller.teacher_delete);
// PUT request to update Costume.
router.put('/teacher/:id', teacher_controller.teacher_update_put);
// GET request for one Costume.
router.get('/teacher/:id', teacher_controller.teacher_detail);
// GET request for list of all Costume items.
router.get('/teacher', teacher_controller.teacher_list);
module.exports = router;