const mongoose= require("mongoose");


const storeSchema = new mongoose.Schema({
special:{type:String,required:true}

},{
    versionKey:false, 
    timestamps:false ,

})

const Store=mongoose.model("store",storeSchema) 

module.exports=Store;