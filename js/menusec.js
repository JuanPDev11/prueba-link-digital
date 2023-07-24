const menu = document.querySelector(".columns__items");


window.addEventListener('scroll', ()=>{menuOpacity()});

function menuOpacity(){
    let position = document.documentElement.scrollTop;
    let size = window.screen.width
    //console.log(position);

    //Mostrando y ocultando el menu secundario en tamaño estandar desktop

    if(position >= 245 && position < 1400){
        menu.classList.add("menu-op")
    }
    if(position < 245){
        menu.classList.remove("menu-op")
    }
    if(position > 1400){
        menu.classList.remove("menu-op")
    }

    //Mostrando y ocultando el menu secundario en tamaños menores a 490px

    if(size <= 490){
        if(position >= 880 && position < 4180){
            menu.classList.add("menu-op")
        }
        if(position < 880){
            menu.classList.remove("menu-op")
        }
        if(position > 4180){
            menu.classList.remove("menu-op")
        }
    }

    //Mostrando y ocultando el menu secundario en tamaño menores a 800 hasta 490px

    if(size <= 800){
        if(position >= 700 && position < 2180){
            menu.classList.add("menu-op")
        }
        if(position < 700){
            menu.classList.remove("menu-op")
        }
        if(position > 2180){
            menu.classList.remove("menu-op")
        }
    }


}