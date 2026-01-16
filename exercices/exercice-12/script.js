let ID = document.getElementById("zone-interactive");

ID.addEventListener("mousedown", (event)=>{
   ID.style.backgroundColor = "orange";
});

ID.addEventListener("mouseup", (event)=>{
   ID.style.backgroundColor = "lightgrey";
});