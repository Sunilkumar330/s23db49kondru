const mongoose = require("mongoose")
const teacherSchema = mongoose.Schema({
   address:{
    type:String,
    required:true
   },
   subject:{
    type:String,
    required:true
   },
   hours:{
    type:Number,
    required:true
   }

});
module.exports = mongoose.model("teacher",teacherSchema)