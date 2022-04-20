/*=============== PLAY CAR SOUND ===============*/
function playSound(){
    document.getElementById("CarSound").play();
}

/*=============== PRE-LOADER ANIMATION ===============*/
setTimeout(function(){
    $('.loader-bg').fadeOut();
}, 1500)

/*=============== HEADER ANIMATIONS ===============*/
const nav = document.querySelector("header");

function adjustHeaderStyleOnScroll(){    
    nav.style.backgroundColor = "#131313";
    nav.style.borderBottom = "3px soild #000";
    nav.style.boxShadow = "0 0 10px #000";
    nav.style.paddingBottom = "20px";
    nav.style.paddingTop = "20px";
}

function releaseHeaderStyleOnScroll(){
    nav.style.background = "transparent";
    nav.style.borderBottom = "none";
    nav.style.boxShadow = "none";
    nav.style.paddingBottom = "20px";
    nav.style.paddingTop = "20px";
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

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) 
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration : 2500,
    delay: 1500,
})

// reveal header
sr.reveal("header")
sr.reveal("header .left-section", {delay: 700});
sr.reveal("header .right-section", {origin:'right', delay: 700});
sr.reveal("header .mid-section", {origin:'top', delay: 700});

// reveal main content
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

// reveal titles
sr.reveal(".upper-section .left-section", {delay: 300});
sr.reveal(".upper-section .right-section", {origin:"right", delay: 300});

// reveal services
sr.reveal(".services .content", {origin:'top', delay:300});

// reveal advantage
sr.reveal(".advantage .card", {interval:200, delay:300, origin:"top"});

// reveal quote
sr.reveal(".quote .bg", {origin:"top", delay:400});

// reveal how it works
sr.reveal(".how-it-works .card", {interval:200, delay:300, origin:"top"});

// reveal gallery
sr.reveal(".gallery .img-box", {interval:100, delay:300, origin:"top"});

// reveal faqs
sr.reveal(".questions .faq", {interval:100, delay:1200, origin:"top"});

// reveal footer
sr.reveal(".footer .title", {origin:'top', delay:300});
sr.reveal(".footer .container .card1", {origin:'left', delay:300});
sr.reveal(".footer .container .card2", {origin:'right', delay:300});
sr.reveal(".footer .form-section .left-section", {origin:'left', delay:300});
sr.reveal(".footer .form-section .right-section", {origin:'right', delay:300});
sr.reveal(".footer .lower-section .left-section", {origin:'left', delay:300});
sr.reveal(".footer .lower-section .right-section", {origin:'right', delay:300});
sr.reveal(".footer .copy-right", {origin:'bottom', delay:300});