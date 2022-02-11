const mongoose= require("mongoose");



const coursesSchema = new mongoose.Schema({
    id:{type:String,required:true},
    image:{type:String,required:true},
    course_name:{type:String,required:true},
    description:{type:String,required:true},
    moreinfo:{type:String,required:true},
 Duration:{type:String,required:true}
},{
    versionKey:false, 
    timestamps:true ,

})

const Courses=mongoose.model("courses",coursesSchema) 

module.exports=Courses;