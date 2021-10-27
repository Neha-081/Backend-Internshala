function searchh(){
    var search = document.getElementById("in").value;
    if(search!=""){
        window.location.href="/users/homepage"
    }else if(search==""){
        alert("Enter Something")
    }
}

function logout(){
    alert("Are you sure want to logout?")
  }

  function searchlast(){
      var input = document.getElementById("searchlast").value
      if(input=="sales" ||input=="marketing" ||input=="architecture" ||input=="web development" ||input=="finance"){
          window.location.href="/users/sorting"
      }else{
        alert("Enter Valid Search")
      }
  }

  function oninputt(){
      var input = document.getElementById("oninp").value;
      var input2 = document.getElementById("oninp2").value;
      var input3 = document.getElementById("oninp3").value;
      var input4= document.getElementById("location").value;
      if(input=="1k"|| input=="2k"|| input=="3k"|| input=="5k"){
          window.open("/users/sorting")
      }else if(input2=="2 months"|| input2=="3 months"|| input2=="4 months"|| input2=="5 month"){
        window.open("/users/sorting")
      }else if(input3=="2"|| input3=="3"|| input3=="4"|| input3=="5"){
        window.open("/users/sorting")
      }else if(input4=="pune"|| input4=="delhi"|| input4=="banagalore"|| input4=="gurgaon"){
        window.open("/users/sorting")
      }
      
  }








