const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll(".nav__link")

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


// $('.nav-toggle').on('click', function () {
//     $('.menu').toggleClass('open');
// });
    
// $( '.nav__link a' ).on("click", function(){
//     $('.menu').hide();
// });