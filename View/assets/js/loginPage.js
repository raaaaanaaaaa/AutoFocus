/*=============== PLAY SOUND ===============*/
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
    duration: 2500,
    delay: 1500,
})

function animateHeader(){
    sr.reveal("header .left-section", { delay: 600 });
    sr.reveal("header .right-section", { origin: 'right', delay: 600 });
    sr.reveal("header .mid-section", { origin: 'top', delay: 600 });
}

function animateLoginFrom(){
    sr.reveal(".container .form-section", {origin:'left', delay: 700});
}

function animateWelcomeScreen(){
    sr.reveal(".container .welcome-text", {origin:'right', delay: 700});
}

animateHeader();
animateLoginFrom();
animateWelcomeScreen();