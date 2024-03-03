var swiper = new swiper(".reviews-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
}
)

var swiper = new swiper(".reviews-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
}
)

var swiper = new swiper(".logo-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450:{
            slidesPerView: 2,
        },

        768:{
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
}
)

let accordion = document.querySelectorAll('faq .accordion-container .accordion ');
accordion.forEach(acco =>{
acco.onclick = () =>{
    accordion.forEach(dion =>dion.classList.remove('active'));
    acco.classList.toggle('active');
}
});

document.querySelector('.load-more.btn').onclick = () =>{
    document.querySelectorAll('.courses .box-container .hide').forEach(show =>{
        show.style.display ='block';
    });
    document.querySelector(' .load-more .btn').style.display = 'none'
};

