const mongoose= require("mongoose");

module.exports =()=>{
    return mongoose.connect("mongodb+srv://vishal:internshala_4@cluster0.rgzha.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    })
}




