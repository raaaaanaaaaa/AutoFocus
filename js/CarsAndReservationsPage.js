/*=============== PLAY CAR SOUND ===============*/
function playSound() {
    document.getElementById("CarSound").play();
}

/*=============== PRE-LOADER ===============*/
setTimeout(function () {
    $('.loader-bg').fadeOut();
}, 1500)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 400)
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

/*=============== ANIMATE ASIDE PRICE ===============*/
const slideValue = document.querySelector('.range .slider-value span');
const inputSlider = document.querySelector('.range .field input');

inputSlider.oninput = (() => {
    let value = inputSlider.value;
    slideValue.textContent = value;
});

/*=============== Function FilterType ===============*/
function filterType() {
    const btns = document.querySelectorAll(".btn");
    const cards = document.querySelectorAll(".card");

    for (i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            cards.forEach((card) => {
                if (filter == "all") {
                    card.style.display = "block";
                }
                else {
                    if (card.classList.contains(filter)) {
                        card.style.display = "block";
                    }
                    else {
                        card.style.display = "none";
                    }
                }
            })
        })
    }
}

/*=============== Function FilterEngine ===============*/
function filterEngine() {
    const btnsEngine = document.querySelectorAll(".btn");
    const cards = document.querySelectorAll(".card");

    for (i = 0; i < btnsEngine.length; i++) {
        btnsEngine[i].addEventListener("click", (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            cards.forEach((card) => {
                if (card.classList.contains(filter)) {
                    card.style.display = "block";
                }
                else {
                    card.style.display = "none";
                }
            })
        })
    }
}

/*=============== Function FilterColor ===============*/
function filterColor() {
    const btnsColor = document.querySelectorAll(".btn");
    const cards = document.querySelectorAll(".card");

    for (i = 0; i < btnsColor.length; i++) {
        btnsColor[i].addEventListener("click", (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            cards.forEach((card) => {
                if (card.classList.contains(filter)) {
                    card.style.display = "inline";
                }
                else {
                    card.style.display = "none";
                }
            })
        })
    }
}
/*=============== Function bach Reservation ===============*/
function back() {
    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "none";
}

/*=============== Functions ChangeCars Row1 ===============*/
function ChangeCar1() {
    const img1 = document.getElementById("ImgRent");
    img1.src = "assets/imgs/PngCar222.png";

    const CarName1 = document.getElementById("CarName");
    CarName1.innerHTML = "Nissan juke 2019";

    const priceCar1 = document.getElementById("total-price");
    priceCar1.innerHTML = " 150";

    const IssueYear = document.getElementById("IssueYear");
    IssueYear.innerHTML = " 2019";

    const ModelYear = document.getElementById("ModelYear");
    ModelYear.innerHTML = " 2019";

    const EngineCar1 = document.getElementById("Engine");
    EngineCar1.innerHTML = "1.08 (144 hp). Petrol";

    const DriveCar1 = document.getElementById("drive");
    DriveCar1.innerHTML = "Partial ";

    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "flex";
}

function ChangeCar2() {
    const img2 = document.getElementById("ImgRent");
    img2.src = "assets/imgs/PngCar111.png";

    const CarName2 = document.getElementById("CarName");
    CarName2.innerHTML = "Audi juke 2021";

    const priceCar2 = document.getElementById("total-price");
    priceCar2.innerHTML = " 250";

    const IssueYear = document.getElementById("IssueYear");
    IssueYear.innerHTML = " 2021";

    const ModelYear = document.getElementById("ModelYear");
    ModelYear.innerHTML = " 2021";

    const EngineCar2 = document.getElementById("Engine");
    EngineCar2.innerHTML = "2.02 (192 hp). Petrol";

    const DriveCar2 = document.getElementById("drive");
    DriveCar2.innerHTML = "Full";

    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "flex";
}

function ChangeCar3() {
    const img3 = document.getElementById("ImgRent");
    img3.src = "assets/imgs/pngCar1212.png";

    const CarName3 = document.getElementById("CarName");
    CarName3.innerHTML = "Nissan juke 2019";

    const priceCar3 = document.getElementById("total-price");
    priceCar3.innerHTML = " 270";

    const IssueYear = document.getElementById("IssueYear");
    IssueYear.innerHTML = " 2019";

    const ModelYear = document.getElementById("ModelYear");
    ModelYear.innerHTML = " 2019";

    const EngineCar3 = document.getElementById("Engine");
    EngineCar3.innerHTML = "1.08 (144 hp). Petrol";

    const DriveCar3 = document.getElementById("drive");
    DriveCar3.innerHTML = "Partial ";

    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "flex";
}

function ChangeCar4() {
    const img4 = document.getElementById("ImgRent");
    img4.src = "assets/imgs/pngCar666.png";

    const CarName4 = document.getElementById("CarName");
    CarName4.innerHTML = "Audi juke 2018";

    const priceCar4 = document.getElementById("total-price");
    priceCar4.innerHTML = " 250";

    const IssueYear = document.getElementById("IssueYear");
    IssueYear.innerHTML = " 2018";

    const ModelYear = document.getElementById("ModelYear");
    ModelYear.innerHTML = " 2018";

    const EngineCar4 = document.getElementById("Engine");
    EngineCar4.innerHTML = "2.02 (192 hp). Petrol";

    const DriveCar4 = document.getElementById("drive");
    DriveCar4.innerHTML = "Full";

    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "flex";
}

function ChangeCar5() {
    const img5 = document.getElementById("ImgRent");
    img5.src = "assets/imgs/pngCar777.png";

    const CarName5 = document.getElementById("CarName");
    CarName5.innerHTML = "Audi juke 2020";

    const priceCar5 = document.getElementById("total-price");
    priceCar5.innerHTML = " 350";

    const IssueYear = document.getElementById("IssueYear");
    IssueYear.innerHTML = " 2020";

    const ModelYear = document.getElementById("ModelYear");
    ModelYear.innerHTML = " 2020";

    const EngineCar5 = document.getElementById("Engine");
    EngineCar5.innerHTML = "2.02 (192 hp). Petrol";

    const DriveCar5 = document.getElementById("drive");
    DriveCar5.innerHTML = "Full";

    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "flex";
}

/*=============== Functions ChangeCars Row2 ===============*/
function ChangeCar6() {
    const img6 = document.getElementById("ImgRent");
    img6.src = "assets/imgs/pngCar555.png";

    const CarName6 = document.getElementById("CarName");
    CarName6.innerHTML = "Mercedes 2017";

    const priceCar6 = document.getElementById("total-price");
    priceCar6.innerHTML = " 320";

    const IssueYear = document.getElementById("IssueYear");
    IssueYear.innerHTML = " 2017";

    const ModelYear = document.getElementById("ModelYear");
    ModelYear.innerHTML = " 2017";

    const EngineCar6 = document.getElementById("Engine");
    EngineCar6.innerHTML = "2.01 (194 hp). Diesel";

    const DriveCar6 = document.getElementById("drive");
    DriveCar6.innerHTML = "Full";

    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "flex";
}

function ChangeCar7() {
    const img7 = document.getElementById("ImgRent");
    img7.src = "assets/imgs/pngCar999.png";

    const CarName7 = document.getElementById("CarName");
    CarName7.innerHTML = "Ferrari s 2019";

    const priceCar7 = document.getElementById("total-price");
    priceCar7.innerHTML = " 520";

    const IssueYear = document.getElementById("IssueYear");
    IssueYear.innerHTML = " 2019";

    const ModelYear = document.getElementById("ModelYear");
    ModelYear.innerHTML = " 2019";

    const EngineCar7 = document.getElementById("Engine");
    EngineCar7.innerHTML = "2.07 (204 hp). Diesel";

    const DriveCar7 = document.getElementById("drive");
    DriveCar7.innerHTML = "Full";

    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "flex";
}

function ChangeCar8() {
    const img8 = document.getElementById("ImgRent");
    img8.src = "assets/imgs/pngCar1414.png";

    const CarName8 = document.getElementById("CarName");
    CarName8.innerHTML = "mercedes ss 2017";

    const priceCar8 = document.getElementById("total-price");
    priceCar8.innerHTML = " 250";

    const IssueYear = document.getElementById("IssueYear");
    IssueYear.innerHTML = " 2017";

    const ModelYear = document.getElementById("ModelYear");
    ModelYear.innerHTML = " 2017";

    const EngineCar8 = document.getElementById("Engine");
    EngineCar8.innerHTML = "2.01 (194 hp). Diesel";

    const DriveCar8 = document.getElementById("drive");
    DriveCar8.innerHTML = "Full";

    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "flex";
}

function ChangeCar9() {
    const img9 = document.getElementById("ImgRent");
    img9.src = "assets/imgs/pngCar1818.png";

    const CarName9 = document.getElementById("CarName");
    CarName9.innerHTML = "mercedes c 2020";

    const priceCar9 = document.getElementById("total-price");
    priceCar9.innerHTML = " 480";

    const IssueYear = document.getElementById("IssueYear");
    IssueYear.innerHTML = " 2020";

    const ModelYear = document.getElementById("ModelYear");
    ModelYear.innerHTML = " 2020";

    const EngineCar9 = document.getElementById("Engine");
    EngineCar9.innerHTML = "2.01 (194 hp). Diesel";

    const DriveCar9 = document.getElementById("drive");
    DriveCar9.innerHTML = "Full";

    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "flex";
}

function ChangeCar10() {
    const img10 = document.getElementById("ImgRent");
    img10.src = "assets/imgs/pngCar1616.png";

    const CarName10 = document.getElementById("CarName");
    CarName10.innerHTML = "Ferrari w 2020";

    const priceCar10 = document.getElementById("total-price");
    priceCar10.innerHTML = " 650";

    const IssueYear = document.getElementById("IssueYear");
    IssueYear.innerHTML = " 2020";

    const ModelYear = document.getElementById("ModelYear");
    ModelYear.innerHTML = " 2020";

    const EngineCar10 = document.getElementById("Engine");
    EngineCar10.innerHTML = "2.07 (204 hp). Diesel";

    const DriveCar10 = document.getElementById("drive");
    DriveCar10.innerHTML = "Full";

    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "flex";
}

/*=============== Functions ChangeCars Row3 ===============*/
function ChangeCar11() {
    const img11 = document.getElementById("ImgRent");
    img11.src = "assets/imgs/pngCar1313.png";

    const CarName11 = document.getElementById("CarName");
    CarName11.innerHTML = "Hunda 2021";

    const priceCar11 = document.getElementById("total-price");
    priceCar11.innerHTML = " 580";

    const IssueYear = document.getElementById("IssueYear");
    IssueYear.innerHTML = " 2021";

    const ModelYear = document.getElementById("ModelYear");
    ModelYear.innerHTML = " 2021";

    const EngineCar11 = document.getElementById("Engine");
    EngineCar11.innerHTML = "1.98 (186 hp). Electro";

    const DriveCar11 = document.getElementById("drive");
    DriveCar11.innerHTML = "Partial ";

    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "flex";
}

function ChangeCar12() {
    const img12 = document.getElementById("ImgRent");
    img12.src = "assets/imgs/pngCar1010.png";

    const CarName12 = document.getElementById("CarName");
    CarName12.innerHTML = "Hunda 2015";

    const priceCar12 = document.getElementById("total-price");
    priceCar12.innerHTML = " 150";

    const IssueYear = document.getElementById("IssueYear");
    IssueYear.innerHTML = " 2015";

    const ModelYear = document.getElementById("ModelYear");
    ModelYear.innerHTML = " 2015";

    const EngineCar12 = document.getElementById("Engine");
    EngineCar12.innerHTML = "1.98 (186 hp). Electro";

    const DriveCar12 = document.getElementById("drive");
    DriveCar12.innerHTML = "Partial ";

    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "flex";
}

function ChangeCar13() {
    const img13 = document.getElementById("ImgRent");
    img13.src = "assets/imgs/pngCar1515.png";

    const CarName13 = document.getElementById("CarName");
    CarName13.innerHTML = "Hunda ss 2013";

    const priceCar13 = document.getElementById("total-price");
    priceCar13.innerHTML = " 100";

    const IssueYear = document.getElementById("IssueYear");
    IssueYear.innerHTML = " 2013";

    const ModelYear = document.getElementById("ModelYear");
    ModelYear.innerHTML = " 2013";

    const EngineCar13 = document.getElementById("Engine");
    EngineCar13.innerHTML = "1.42 (138 hp). Electro";

    const DriveCar13 = document.getElementById("drive");
    DriveCar13.innerHTML = "Partial ";

    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "flex";
}

function ChangeCar14() {
    const img14 = document.getElementById("ImgRent");
    img14.src = "assets/imgs/pngCar1919.png";

    const CarName14 = document.getElementById("CarName");
    CarName14.innerHTML = "BMW ss 2021";

    const priceCar14 = document.getElementById("total-price");
    priceCar14.innerHTML = " 610";

    const IssueYear = document.getElementById("IssueYear");
    IssueYear.innerHTML = " 2021";

    const ModelYear = document.getElementById("ModelYear");
    ModelYear.innerHTML = " 2021";

    const EngineCar14 = document.getElementById("Engine");
    EngineCar14.innerHTML = "2.03 (198 hp). Diesel";

    const DriveCar14 = document.getElementById("drive");
    DriveCar14.innerHTML = "Full";

    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "flex";
}

function ChangeCar15() {
    const img15 = document.getElementById("ImgRent");
    img15.src = "assets/imgs/pngCar1717.png";

    const CarName15 = document.getElementById("CarName");
    CarName15.innerHTML = "BMW Z4 2019";

    const priceCar15 = document.getElementById("total-price");
    priceCar15.innerHTML = " 480";

    const IssueYear = document.getElementById("IssueYear");
    IssueYear.innerHTML = " 2019";

    const ModelYear = document.getElementById("ModelYear");
    ModelYear.innerHTML = " 2019";

    const EngineCar15 = document.getElementById("Engine");
    EngineCar15.innerHTML = "2.03 (198 hp). Diesel";

    const DriveCar15 = document.getElementById("drive");
    DriveCar15.innerHTML = "Full";

    const Reservation = document.getElementById("reservation-container");
    Reservation.style.display = "flex";
}

/*=============== Function getExtra ===============*/
/*=============== gps naviagtor ===============*/
function getExtra1() {
    const checkbox1 = document.getElementById("checkbox1");
    const price = document.getElementById("total-price");
    let NewPrice = parseInt(price.innerHTML, 10);

    if (checkbox1.checked == true) {
        NewPrice += 50;
        price.innerHTML = NewPrice;
    }
    else {
        NewPrice -= 50;
        price.innerHTML = NewPrice;
    }
}
/*=============== Additional driver ===============*/
function getExtra2() {
    const checkbox2 = document.getElementById("checkbox2");
    const price = document.getElementById("total-price");
    let NewPrice = parseInt(price.innerHTML, 10);

    if (checkbox2.checked == true) {
        NewPrice += 50;
        price.innerHTML = NewPrice;
    }
    else {
        NewPrice -= 50;
        price.innerHTML = NewPrice;
    }
}
/*=============== Child seat ===============*/
function getExtra3() {
    const checkbox3 = document.getElementById("checkbox3");
    const price = document.getElementById("total-price");
    let NewPrice = parseInt(price.innerHTML, 10);

    if (checkbox3.checked == true) {
        NewPrice += 50;
        price.innerHTML = NewPrice;
    }
    else {
        NewPrice -= 50;
        price.innerHTML = NewPrice;
    }
}
/*=============== roof bicycle rack ===============*/
function getExtra4() {
    const checkbox4 = document.getElementById("checkbox4");
    const price = document.getElementById("total-price");
    let NewPrice = parseInt(price.innerHTML, 10);

    if (checkbox4.checked == true) {
        NewPrice += 50;
        price.innerHTML = NewPrice;
    }
    else {
        NewPrice -= 50;
        price.innerHTML = NewPrice;
    }
}
/*=============== Documents of car ===============*/
function getExtra5() {
    const checkbox5 = document.getElementById("checkbox5");
    const price = document.getElementById("total-price");
    let NewPrice = parseInt(price.innerHTML, 10);

    if (checkbox5.checked == true) {
        NewPrice += 50;
        price.innerHTML = NewPrice;
    }
    else {
        NewPrice -= 50;
        price.innerHTML = NewPrice;
    }
}
/*=============== car insurance ===============*/
function getExtra6() {
    const checkbox6 = document.getElementById("checkbox6");
    const price = document.getElementById("total-price");
    let NewPrice = parseInt(price.innerHTML, 10);

    if (checkbox6.checked == true) {
        NewPrice += 50;
        price.innerHTML = NewPrice;
    }
    else {
        NewPrice -= 50;
        price.innerHTML = NewPrice;
    }
}
/*=============== bonus card ===============*/
function getExtra7() {
    const checkbox7 = document.getElementById("checkbox7");
    const price = document.getElementById("total-price");
    let NewPrice = parseInt(price.innerHTML, 10);

    if (checkbox7.checked == true) {
        NewPrice += 50;
        price.innerHTML = NewPrice;
    }
    else {
        NewPrice -= 50;
        price.innerHTML = NewPrice;
    }
}
/*=============== driver's rights ===============*/
function getExtra8() {
    const checkbox8 = document.getElementById("checkbox8");
    const price = document.getElementById("total-price");
    let NewPrice = parseInt(price.innerHTML, 10);

    if (checkbox8.checked == true) {
        NewPrice += 50;
        price.innerHTML = NewPrice;
    }
    else {
        NewPrice -= 50;
        price.innerHTML = NewPrice;
    }
}

/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 1500,
    // reset: true
})

// REVEAL HEADER
sr.reveal("header")
sr.reveal("header .left-section", { delay: 200 });
sr.reveal("header .right-section", { origin: 'right', delay: 200 });
sr.reveal("header .mid-section", { origin: 'top', delay: 200 });

// REVEAL ASIDE
sr.reveal(".cars .content aside .side-menu", { delay: 700 });

// REVEAL CARS
sr.reveal(".cars-container .row .card", { interval: 200, origin: 'right', delay: 400 });

// REVEAL LEFT PART
sr.reveal(".reservation-container .left-section .left-part", { origin: 'left', delay: 600 });
sr.reveal(".reservation-container .left-section .left-part .car-details .Charactrestic", { origin: 'left', delay: 600, interval: 300 });
sr.reveal(".reservation-container .left-section .left-part img", { origin: 'left', delay: 800 });

// REVEAL RIGHT PART
sr.reveal(".reservation-container .left-section .right-part", { origin: 'left', delay: 700 });
sr.reveal(".reservation-container .left-section .right-part .title", { origin: 'top', delay: 700, interval: 500 });
sr.reveal(".reservation-container .left-section .right-part h3", { origin: 'top', delay: 800 });
sr.reveal(".reservation-container .left-section .right-part hr", { origin: 'top', delay: 800, interval: 300 });
sr.reveal(".reservation-container .left-section .right-part .extra", { origin: 'top', delay: 700, interval: 300 });
sr.reveal(".reservation-container .left-section .right-part .total-price", { origin: 'top', delay: 3000 });

// REVEAL RIGHT SECTION
sr.reveal(".reservation-container .right-section", { origin: 'right', delay: 700 });
sr.reveal(".reservation-container .right-section form input", { origin: 'right', delay: 700, interval: 300 });
sr.reveal(".reservation-container .right-section form textarea", { origin: 'right', delay: 2000, interval: 300 });
sr.reveal(".reservation-container .right-section form .policy", { origin: 'right', delay: 2000, interval: 300 });

// REVEAL FOOTER
sr.reveal(".footer", { origin: 'bottom', delay: 1300, interval: 300 });
