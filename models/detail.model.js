const mongoose= require("mongoose");




const detailSchema = new mongoose.Schema({
id:{type:Number,required:false},
certified:{type:String,required:true},
title:{type:String,required:true},
syllabus:{type:String,required:true},
Ratings:{type:String,required:true},
Duration:{type:String,required:true},
students:{type:String,required:true},
Duration:{type:String,required:true},
Placement:{type:String,required:true},

},{
    versionKey:false, 
    timestamps:true ,

})

const Detail=mongoose.model("detail",detailSchema) 

module.exports=Detail;