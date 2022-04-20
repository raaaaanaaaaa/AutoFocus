/*=============== PLAY CAR SOUND ===============*/
function playSound(){
    document.getElementById("CarSound").play();
}

/*=============== PRE-LOADER ===============*/
setTimeout(function(){
    $('.loader-bg').fadeOut();
}, 1500)

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

/*=============== ANIMATE NAV ITEMS ===============*/
const navItems = document.querySelectorAll(".nav-item");
        navItems.forEach((item) => {
            item.addEventListener("click", () => {
                if(item.classList.contains('active')){
                    item.classList.remove("active");
                    item.classList.add("shrink");
                }
                else{
                    item.classList.remove("shrink");
                    item.classList.add("active");
                }    
            });
        });
/*=============== ANIMATE ASIDE PRICE ===============*/ 
const slideValue = document.querySelector('.range .slider-value span');
const inputSlider = document.querySelector('.range .field input');

inputSlider.oninput = (()=>{
    let value = inputSlider.value;
    slideValue.textContent = value;
});


/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration : 2500,
    delay: 1500,
    // reset: true
})
// REVEAL HEADER
sr.reveal("header")
sr.reveal("header .left-section", {delay: 200});
sr.reveal("header .right-section", {origin:'right', delay: 200});
sr.reveal("header .mid-section", {origin:'top', delay: 200});

// REVEAL ASIDE
sr.reveal(".cars .content aside .side-menu", {delay:700});

// REVEAL CARS
sr.reveal(".cars-container .row .card", {interval:200, origin:'right', delay: 400});

