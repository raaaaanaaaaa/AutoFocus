/*=============== PLA SOUND ===============*/
function playCarSound() {
    document.getElementById("CarSound").play();
}

/*=============== PRELOADER ===============*/
setTimeout(function () {
    $('.loader-bg').fadeOut();
}, 1500)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration : 2500,
    delay: 1500,
})

function animateSignupForm(){
    sr.reveal(".container .form-section", {origin:'left', delay: 700});
}

function animateWelcomeScreen(){
    sr.reveal(".container .welcome-text", {origin:'right', delay: 700});
}

animateSignupForm();
animateWelcomeScreen();

/*=============== ALERTS ANIMATIONS ===============*/
setTimeout(function(){
    $('.alert').removeClass("show");
    $('.alert').addClass("hide");
},5000);

$('.close-btn').click(function(){
    $('.alert').removeClass("show");
    $('.alert').addClass("hide");
  });