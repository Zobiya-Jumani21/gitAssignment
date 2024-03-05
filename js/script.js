let navbar = document.querySelector('.header .navbar')
document.querySelector('#menu-btn').oneclick = () =>{
navbar.classList.add('active');
}

var swiper = new Swiper(".teachers-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
 // may have some comma or bracket issue. also this copied form home courses

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
})