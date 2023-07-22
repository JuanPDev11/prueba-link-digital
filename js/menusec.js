const menu = document.querySelector(".columns__items");


window.addEventListener('scroll', ()=>{menuOpacity()});

function menuOpacity(){
    let position = document.documentElement.scrollTop;
    //console.log(position);

    if(position >= 245 && position < 1400){
        menu.classList.add("menu-op")
    }
    if(position < 245){
        menu.classList.remove("menu-op")
    }
    if(position > 1400){
        menu.classList.remove("menu-op")
    }
}