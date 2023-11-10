const mongoose = require("mongoose")
const teacherSchema = mongoose.Schema({
   Teacher_address:{
    type:String,
    required:true
   },
   Teacher_subject:{
    type:String,
    required:true
   },
   Teacher_hours:{
    type:Number,
    required:true
   }

});
module.exports = mongoose.model("teacher",teacherSchema)