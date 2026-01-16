let carre = document.getElementById("carre");


carre.addEventListener("click", (event)=>{
    carre.style.transform = "translateX(50px)";
    console.log(carre.style.left);
});