/*=============== PLAY CAR SOUND ===============*/
function playCarSound(){
    document.getElementById("CarSound").play();
}

/*=============== PRE-LOADER ANIMATION ===============*/
setTimeout(function(){
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

/*=============== SHOW SCROLL UP ===============*/ 
function showScrollUpBtn(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 400) 
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', showScrollUpBtn)

/*=============== SCROLL REVEAL ANIMATIONS ===============*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration : 2500,
    delay: 1500,
})

function animateHeader(){
    sr.reveal("header")
    sr.reveal("header .left-section", {delay: 700});
    sr.reveal("header .right-section", {origin:'right', delay: 700});
    sr.reveal("header .mid-section", {origin:'top', delay: 700});
}

function animateMainContent(){
    sr.reveal(".main-text");
    sr.reveal(".text .specs", {delay: 1600});
    sr.reveal(".hero-img", {origin:'right', delay:1800});
    sr.reveal(".main-content .splashes .colored-rec", {delay:2000});
    sr.reveal(".main-content .splashes .white-rec", {delay:1200});
    sr.reveal(".main-content .red-rectangle", {origin:'right', delay:1500});
    sr.reveal(".main-content .black-border", {origin:'bottom', delay:2700});
    sr.reveal(".main-content .red-border", {origin:'bottom', delay:2700});
    sr.reveal(".main-content .line", {delay:1900});
    sr.reveal(".main-content .buttons", {delay:2200});
    sr.reveal(".main-content .scroll .scroll-down .mouse", {origin:'bottom', delay:2200});
}

function animateTitles(){
    sr.reveal(".upper-section .left-section", {delay: 300});
    sr.reveal(".upper-section .right-section", {origin:"right", delay: 300});
}

function animateServices(){
    sr.reveal(".services .content", {origin:'top', delay:300});
}

function animateAdvantages(){
    sr.reveal(".advantage .card", {interval:200, delay:300, origin:"top"});
}

function animateQuote(){
    sr.reveal(".quote .bg", {origin:"top", delay:400});
}

function animateHowItWorks(){
    sr.reveal(".how-it-works .card", {interval:200, delay:300, origin:"top"});
}

function animateGallery(){
    sr.reveal(".gallery .img-box", {interval:100, delay:300, origin:"top"});
}

function animateFaq(){
    sr.reveal(".questions .faq", {interval:100, delay:300, origin:"top"});
}

function animateFooter(){
    sr.reveal(".footer .title", {origin:'top', delay:300});
    sr.reveal(".footer .container .card1", {origin:'left', delay:300});
    sr.reveal(".footer .container .card2", {origin:'right', delay:300});
    sr.reveal(".footer .form-section .left-section", {origin:'left', delay:300});
    sr.reveal(".footer .form-section .right-section", {origin:'right', delay:300});
    sr.reveal(".footer .lower-section .left-section", {origin:'left', delay:300});
    sr.reveal(".footer .lower-section .right-section", {origin:'right', delay:300});
    sr.reveal(".footer .copy-right", {origin:'bottom', delay:300});
}

animateHeader();
animateMainContent();
animateTitles();
animateServices();
animateAdvantages();
animateQuote();
animateHowItWorks();
animateGallery();
animateFaq();
animateFooter();