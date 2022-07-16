let toggle = document.querySelector('#header .toggle-button');
let collapse = document.querySelectorAll('.collapse');
toggle.addEventListener('click',()=>{
    collapse.forEach(col => col.classList.toggle('collapse-toggle'));
})

// With Masonry
new Masonry("#posts .grid",{
    itemSelector: '.grid-item',
    gutter:20
});

// Swiper Library Initialization

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:5,
    autoplay:{
        delay:3000,
    },
    breakpoints: {
        // when window width is >= 320px
        '@0': {
          slidesPerView: 2,
        },
        '@1.00':{
            slidesPerView: 3,
        },
        '@1.25':{
            slidesPerView: 4,
        },
        '@1.50':{
            slidesPerView: 5,
        }
    }
  });