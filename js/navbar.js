const nav = document.querySelector("#items");
const open = document.querySelector("#btn-open");
const close = document.querySelector("#btn-close");

open.addEventListener("click",()=>{
    nav.classList.add("visible");
})

close.addEventListener("click",()=>{
    nav.classList.remove("visible");
})