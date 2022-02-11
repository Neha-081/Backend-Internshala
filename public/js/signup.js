function savedata(){
              email=document.getElementById('email').value,
              password= document.getElementById('pass').value,
              first = document.getElementById('first').value,
              last = document.getElementById('last').value
              if(first=="" || last=="" ||  email=="" || password==""){
                  alert("Please Fill All Required Field")
              }else{
                  alert("Credentials Submitted, Kindly Login!")
                 
              }
           
         
              
      }