/*=============== PLAY CAR SOUND ===============*/
function playSound(){
    document.getElementById("CarSound").play();
}

/*=============== PRE-LOADER ===============*/
setTimeout(function(){
    $('.loader-bg').fadeOut();
}, 1500)

/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration : 2500,
    delay: 1500,
    // reset: true
})
// REVEAL HEADER
sr.reveal("header");
sr.reveal("header .left-section", {delay: 500});
sr.reveal("header .right-section", {origin:'right', delay: 500});
sr.reveal("header .mid-section", {origin:'top', delay: 500});

// REVEAL LEFT PART
sr.reveal(".container .left-section .left-part", {origin:'left', delay: 600});
sr.reveal(".container .left-section .left-part .car-details .Charactrestic", {origin:'left', delay: 600, interval:300});
sr.reveal(".container .left-section .left-part img", {origin:'left', delay:800});


// REVEAL RIGHT PART
sr.reveal(".container .left-section .right-part", {origin:'left', delay:700});
sr.reveal(".container .left-section .right-part .title", {origin:'top', delay:700, interval:500});
sr.reveal(".container .left-section .right-part h3", {origin:'top', delay:800});
sr.reveal(".container .left-section .right-part hr", {origin:'top', delay:800, interval:300});
sr.reveal(".container .left-section .right-part .extra", {origin:'top', delay:700, interval:300});
sr.reveal(".container .left-section .right-part .total-price", {origin:'top', delay:3000});

// REVEAL RIGHT SECTION
sr.reveal(".container .right-section", {origin:'right', delay:700});
sr.reveal(".container .right-section form input", {origin:'right', delay:700, interval:300});
sr.reveal(".container .right-section form textarea", {origin:'right', delay:2000, interval:300});
sr.reveal(".container .right-section form .policy", {origin:'right', delay:2000, interval:300});

// REVEAL FOOTER
sr.reveal(".footer", {origin:'bottom', delay:1300, interval:300});
