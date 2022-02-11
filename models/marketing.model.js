const mongoose= require("mongoose");


const marketingSchema = new mongoose.Schema({
    id:{type:Number,required:false}, 
    job_title:{type:Number,required:false},
    companyname:{type:Number,required:false},
    location:{type:Number,required:false},
    duration:{type:Number,required:false}, 
    Domain:{type:Number,required:false}
    

},{
    versionKey:false, 
    timestamps:true ,

})

const Marketing=mongoose.model("marketing",marketingSchema) 

module.exports=Marketing;