const path = require ("path")
const express = require ("express");

const connect = require("./configs/db")

const userController = require("./controller/user.controller");
const exp = require("constants");


const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/static",express.static(path.join(__dirname,"public")));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')
app.use("/users",userController)

app.listen(3000,async function(){
    await connect();
    console.log("listening on port 3000");
})



