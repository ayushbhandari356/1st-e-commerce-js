console.log("starting js")
let bar=document.getElementById("hamburgur");
let nav=document.getElementById("navbar")
let close=document.getElementById("ham-close")

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add("active");
        console.log("ayush")
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove("active")
    })
}