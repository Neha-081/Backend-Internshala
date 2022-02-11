const mongoose= require("mongoose");


const homepageSchema = new mongoose.Schema({
    first_name:{type:String,reqired:true},
    last_name:{type:String,reqired:true},
    email:{type:String,reqired:true},
    password:{type:String,reqired:true}
},{
    versionKey:false, 
    timestamps:true ,

})

const Homepage=mongoose.model("homepage",homepageSchema) 

module.exports=Homepage;