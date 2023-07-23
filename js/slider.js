const swiper = new Swiper('.swiper', {
    
    // parametros opcionales
    slidesPerView: 3,
    spaceBetween: 10,
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        //cuando el width de la ventana es >= a 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        //cuando el width de la ventana es >= a 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        //cuando el width de la ventana es >= a 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        769:{
          slidesPerView: 3,
          spaceBetween: 40  
        }
      },    
  
    // Paginacion del slider
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Flechas de navegacion
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   // Autoreproduccion del slider
    autoplay: {
        delay: 1000,
      }

    
    
  });
  
   
  