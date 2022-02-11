

function cancel(){
    alert("This will cancel your Purchase!")
}
  function enputt(){
    var val = document.getElementById('in1').value;
    var mat = document.getElementById('mat').value;

 if(val.length<16){
        alert("Enter Full Card Number")
    }else if(mat.length<3){
        alert("Enter Full CVV Numberr")
    }
    else{
        window.location.href="/users/otp";
    }
}
function submit(){
    var val = document.getElementById('btn').value;
    if(val==""){
        alert("Enter OTP")
    }else{
        window.location.href="success.html";
    }
}
function searchh(){
    var search = document.getElementById("in").value;
    if(search!=""){
        window.location.href=".//Homepage/homepage1.html"
    }else if(search==""){
        alert("Enter Something")
    }
}
function mob(){
    var mob = document.getElementById('email').value;
    if(mob.length<9){
        alert("Kindly Enter Full Mobile Number")
    }else if(mob==""){
alert("Kindly Fill all details")
    }
    else{
        window.location.href="/users/pay";
    }
}