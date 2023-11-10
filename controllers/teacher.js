var teacher = require('../models/teacher');
// List of all Costumes
exports.teacher_list = function(req, res) {
 res.send('NOT IMPLEMENTED: teacher list');
};
//for a specific Costume.
exports.teacher_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await teacher.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle teacher create on POST.
exports.teacher_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: teacher create POST');
};
// Handle teacher delete form on DELETE.
exports.teacher_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: teacher delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.teacher_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await teacher.findById( req.params.id)
// Do updates of properties
if(req.body.teacher_type)
toUpdate.teacher_type = req.body.teacher_type;
if(req.body.Teacher_address) toUpdate.Teacher_address = req.body.Teacher_address;
if(req.body.Teacher_subject) toUpdate.Teacher_subject = req.body.Teacher_subject;
if(req.body.Teacher_hours) toUpdate.Teacher_hours = req.body.Teacher_hours;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// List of all teacher
exports.teacher_list = async function(req, res) {
    try{
    theteacher = await teacher.find();
    res.send(theteacher);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.teacher_view_all_Page = async function(req, res) {
    try{
    theteacher = await teacher.find();
    res.render('teacher', { title: 'teacher Search Results', results: theteacher });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   // Handle Costume create on POST.
   exports.teacher_create_post = async function(req, res) {
    console.log(req.body)
    let document = new teacher();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Teacher_address = req.body.Teacher_address;
    document.Teacher_subject = req.body.Teacher_subject;
    document.Teacher_hours = req.body.Teacher_hours;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };



