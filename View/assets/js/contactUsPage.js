/*=============== PLAY SOUND ===============*/
function playCarSound() {
    document.getElementById("CarSound").play();
}

/*=============== PRELOADER ===============*/
setTimeout(function () {
    $('.loader-bg').fadeOut();
}, 1500)

/*=============== HEADER ANIMATIONS ===============*/
const header = document.querySelector("header");

function adjustHeaderStyleOnScroll(){    
    header.style.backgroundColor = "#131313";
    header.style.borderBottom = "3px soild #000";
    header.style.boxShadow = "0 0 10px #000";
    header.style.paddingBottom = "20px";
    header.style.paddingTop = "20px";
}

function releaseHeaderStyleOnScroll(){
    header.style.background = "transparent";
    header.style.borderBottom = "none";
    header.style.boxShadow = "none";
    header.style.paddingBottom = "20px";
    header.style.paddingTop = "20px";
}

document.addEventListener("scroll", function(){
    if(scrollY > 30){
        adjustHeaderStyleOnScroll();
    }
    else{
        releaseHeaderStyleOnScroll();
    }
}) 


/*=============== FAQ ANIMATION ===============*/
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

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

function animateContactInfo(){
    sr.reveal(".container .contactInfo", { interval: 100, delay: 600, origin:"left"});
}

function animateContactForm(){
    sr.reveal(".container .contactForm", { interval: 100, delay: 600, origin:"right"});
}

animateHeader();
animateContactInfo();
animateContactForm();

