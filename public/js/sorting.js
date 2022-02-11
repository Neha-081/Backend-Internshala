var category = document.getElementById("category");

category.addEventListener("keyup", function(event) {
   var value= document.getElementById("category").value;
    if ((event.keyCode === 13 && value=="sales") ||(event.keyCode === 13 && value=="marketing") || (event.keyCode === 13 && value=="architecture") || (event.keyCode === 13 && value=="web development"))  {
      
        document.getElementById("category").click();
        window.location.href="/users/sorting"
        event.preventDefault();
    }
});

















