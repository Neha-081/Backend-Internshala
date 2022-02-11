const mongoose= require("mongoose");




const popularSchema = new mongoose.Schema({


},{
    versionKey:false, 
    timestamps:true ,

})

const Popular=mongoose.model("popular",popularSchema) 

module.exports=Popular;