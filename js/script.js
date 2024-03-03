let navbar = document.querySelector('.header .navbar')
document.querySelector('#menu-btn').oneclick = () =>{
navbar.classList.add('active');
}
document.querySelector('.load-more .btn').oneclick = ()=>{
    document.querySelectorAll('.courses .box-container .hide').forEach(show=>{
        show.style.display='black';

    });
    document.querySelector('.load-more .btn').style.display='none'
};