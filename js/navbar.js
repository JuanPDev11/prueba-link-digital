const nav = document.querySelector("#items");
const open = document.querySelector("#btn-open");
const close = document.querySelector("#btn-close");

//Agregando clase a elementos del nav para hacerlos visibles al dar click al menu hamburguesa
open.addEventListener("click",()=>{
    nav.classList.add("visible");
})

//Eliminado clase a elementos del nav para cerrar menu abierto en el evento anterior
close.addEventListener("click",()=>{
    nav.classList.remove("visible");
})