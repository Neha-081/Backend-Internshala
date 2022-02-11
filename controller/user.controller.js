const express = require ("express");
const router = express.Router()
const User= require("../models/user.model")
const Courses= require("../models/courses.model")
const Popular= require("../models/popular.model");
const Detail= require("../models/detail.model");
const Marketing= require("../models/marketing.model");
const Store= require("../models/store.model");




//tej
router.get("/tej",async function(req,res){
  const user = await Courses.find().lean().exec()
 res.render("homepage/tej",{
   user:user
 })
})
//popular
router.get("/indexx",async function(req,res){
  const user = await Popular.find().lean().exec()
 res.render("users/index",{
   user:user
 })
})


router.get("/popu",async function(req,res){
  const user = await Popular.find().lean().exec()

})



//more details
router.get('/knowmore/:id', async function(req,res){
  const user1 = await Detail.find({id:req.params.id}).lean().exec()
  res.render("homepage/knowmore",{
    user1:user1
  })
})



router.get("",async function(req,res){
  const user = await User.find().lean().exec()
 return res.send(user)
})


router.get("/create",async function(req,res){
  // const user = await User.find().lean().exec()
  // return res.send(user)

  res.render("users/adduser")
})
//signup
router.get("/signup",async function(req,res){

  res.render("users/signup")
})
//login
router.get("/login",async function(req,res){

  res.render("users/login")
})
//home
router.get("/homepage",async function(req,res){

  res.render("homepage/home")
})
//homereal
router.get("/homereal",async function(req,res){

  res.render("homepage/homereal")
})

//applynow
router.get("/applynow",async function(req,res){

  res.render("homepage/applynow")
})
//applynow2
router.get("/applynow2",async function(req,res){

  res.render("homepage/applynow2")
})
//viewdetails
router.get("/viewdetails",async function(req,res){

  res.render("homepage/viewdetails")
})
//pay
router.get("/pay",async function(req,res){

  res.render("payment/pay")
})
//card
router.get("/card",async function(req,res){

  res.render("payment/card")
})
//otp
router.get("/otp",async function(req,res){

  res.render("payment/otp")
})
//success
router.get("/success",async function(req,res){

  res.render("payment/success")
})
//sorting
router.get("/sorting",async function(req,res){
  const user = await Marketing.find().lean().exec();
  res.render("users/sorting",{
    user:user
  })
})

//store
// router.post("/store",async function (req,res){
//     const user = await Store.create(req.body)
//   return res.send(user)
// });

//sales
// router.get("/sales",async function(req,res){
//   const user = await Store.find().sort({_id:-1}).limit(1).lean().exec()
//   const x = user[0].special;
//   console.log(x);
//   const user1 = await Marketing.find().lean().exec()
//   const final = user1.map(el=>{el.Domain===x})
// console.log(final);
// return res.send(final)

// })

// router.get("/market",async function(req,res){
//   const user = await Marketing.find().lean().exec();
//   return res.send(user)
// })


// index file
// router.get("/index",async function(req,res){

//   res.render("users/index")
// })
//employer
router.get("/employer",async function(req,res){

  res.render("users/employer")
})
//student
router.post("/signup",async  (req,res)=>{
  const user = await User.create(req.body)
  try{
    const email = req.body.email;
    const password = req.body.password;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const useremail = await User.findOne({email:email});
    if(email==="" || password ==="" || first_name==="" || last_name===""){
      res.render("users/signup");
    }else{

      res.render("users/login");
    }
  }catch(error){
    res.status(400).send("Invalid Login Details Kindly Go Back")
  }
});
//sample
router.post("/add",async function (req,res){
  console.log("request here",req.body);
    const user = await User.create(req.body)
  return res.send(user)
});

//employer
router.post("/employer",async  (req,res)=>{
  const user = await User.create(req.body)
  try{
    const email = req.body.email;
    const password = req.body.password;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const useremail = await User.findOne({email:email});
    if(email==="" || password ==="" || first_name==="" || last_name===""){
      res.render("homepage/homereal");
    }else{

      res.render("users/login");
    }
  }catch(error){
    res.status(400).send("Invalid Login Details Kindly Go Back")
  }
});

//login check
router.post("/login",async(req,res)=>{
try{
  const email = req.body.email;
  const name = req.body.first_name;
  const password = req.body.password;
  const useremail = await User.findOne({email:email});
  if(useremail.password===password){
    
      res.render("homepage/homereal")
  }else{
    res.send("Invalid Login Details Kindly Go Back");
  }
}catch(error){
  res.status(400).send("error")
}

});

router.post("/add",async function (req,res){
  console.log("request here",req.body);
    const user = await User.create(req.body)
  return res.send(user)
});
router.get("",async function(req,res){
    const users=await User.find().lean().exec() //db.users.find,exec will convert half promise(thennable)to full promise
    const pageTitle = "Welcome to Users Page"

    return res.render("users/Allusers",{
      users:users,
      pageTitle,
    })
})

// router.patch("/:id",crudController.updateOne(User))
// router.delete("/:id",crudController.deleteOne(User))
// router.get("/:id",crudController.getOne(User))


module.exports=router;
