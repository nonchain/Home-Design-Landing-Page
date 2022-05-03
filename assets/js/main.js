const menuIcon = document.querySelector('.icon__menu'),
    closeIcon = document.querySelector('.nav__close'),
    menu =  document.querySelector('.menu');
   

/*==================== SHOW/HIDE MENU ====================*/
menuIcon.addEventListener('click', ()=>
{
    menu.classList.add('show-menu');
});

closeIcon.addEventListener('click', ()=>
{
    menu.classList.remove('show-menu');
});
