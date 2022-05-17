/*=============== PLAY CAR SOUND ===============*/
function playCarSound() {
    document.getElementById("CarSound").play();
}

/*=============== PRE-LOADER ===============*/
setTimeout(function () {
    $('.loader-bg').fadeOut();
}, 1500)

/*=============== SHOW SCROLL UP ===============*/
function showScrollUpBtn() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 400)
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', showScrollUpBtn);

/*=============== CLOSE RESERVATION FORM ===============*/
const Reservation = document.getElementById("reservation-container");

function openReservationForm(){
    Reservation.style.display = "flex";
}

function closeReservationForm() {
    Reservation.style.display = "none";
}

/*=============== CHANGE CARS DATA ===============*/
function setCarImage(imgSource){
    let carImage = document.getElementById("ImgRent");
    carImage.src = imgSource;
}

function setCarPrice(carPrice){
    let price = document.getElementById("total-price");
    price.innerHTML = carPrice;
}

function setCarYearOfIssue(IssueYear){
    let yearOfIssue = document.getElementById("IssueYear");
    yearOfIssue.innerHTML = IssueYear;
}

function setCarYearOfModel(ModelYear){
    let yearOfModel = document.getElementById("ModelYear");
    yearOfModel.innerHTML = ModelYear;
}

function setCarEngine(carEngine){
    let engine = document.getElementById("Engine");
    engine.innerHTML = carEngine;
}

function setCarDrive(carDrive){
    let drive = document.getElementById("drive");
    drive.innerHTML = carDrive;
}

function changeCarData(imgSource, carPrice, IssueYear, ModelYear, carEngine, carDrive){
    setCarImage(imgSource);
    setCarPrice(carPrice);
    setCarYearOfIssue(IssueYear);
    setCarYearOfModel(ModelYear);
    setCarEngine(carEngine);
    setCarDrive(carDrive);
}

function ChangeCar1() {
    openReservationForm();
    changeCarData("assets/imgs/PngCar222.png", "150", "2019", "2019", "1.08 (144 hp). Petrol", "Partial");
}

function ChangeCar2() {
    openReservationForm();
    changeCarData("assets/imgs/PngCar111.png", "250", "2021", "2021", "2.02 (192 hp). Petrol", "Full");
}

function ChangeCar3() {
    openReservationForm();
    changeCarData("assets/imgs/pngCar1212.png", "270", "2019", "2019", "1.08 (144 hp). Petrol", "Partial");
}

function ChangeCar4() {
    openReservationForm();
    changeCarData("assets/imgs/pngCar666.png", "250", "2018", "2018", "2.02 (192 hp). Petrol", "Full");
}

function ChangeCar5() {
    openReservationForm();
    changeCarData("assets/imgs/pngCar777.png", "350", "2020", "2020", "2.02 (192 hp). Petrol", "Full");
}

function ChangeCar6() {
    openReservationForm();
    changeCarData("assets/imgs/pngCar555.png", "320", "2017", "2017", "2.01 (194 hp). Diesel", "Full");
}

function ChangeCar7() {
    openReservationForm();
    changeCarData("assets/imgs/pngCar999.png", "520", "2019", "2019", "2.07 (204 hp). Diesel", "Full");
}

function ChangeCar8() {
    openReservationForm();
    changeCarData("assets/imgs/pngCar1414.png", "250", "2017", "2017", "2.01 (194 hp). Diesel", "Full");
}

function ChangeCar9() {
    openReservationForm();
    changeCarData("assets/imgs/pngCar1818.png", "480", "2020", "2020", "2.01 (194 hp). Diesel", "Full");
}

function ChangeCar10() {
    openReservationForm();
    changeCarData("assets/imgs/pngCar1616.png", "650", "2020", "2020", "2.07 (204 hp). Electro", "Full");
}

function ChangeCar11() {
    openReservationForm();
    changeCarData("assets/imgs/pngCar1313.png", "580", "2021", "2021", "1.98 (186 hp). Diesel", "Partial");
}

function ChangeCar12() {
    openReservationForm();
    changeCarData("assets/imgs/pngCar1010.png", "150", "2015", "2015", "1.98 (186 hp). Diesel", "Partial");
}

function ChangeCar13() {
    openReservationForm();
    changeCarData("assets/imgs/pngCar1515.png", "100", "2013", "2014", "1.42 (138 hp). Diesel", "Partial");
}

function ChangeCar14() {
    openReservationForm();
    changeCarData("assets/imgs/pngCar1919.png", "610", "2021", "2021", "2.03 (198 hp). Electro", "Full");
}

function ChangeCar15() {
    openReservationForm();
    changeCarData("assets/imgs/pngCar1717.png", "480", "2019", "2019", "2.03 (198 hp). Diesel", "Full");
}

/*=============== ADD EXTRAS FUNCTION ===============*/
const price = document.getElementById("total-price");

function convertPriceText(){
    let NewPrice = parseInt(price.innerHTML, 10);
    return NewPrice;
}

function addGpsNavigatorExtra() {
    const checkbox1 = document.getElementById("checkbox1");
    let newPrice = convertPriceText();
    
    if (checkbox1.checked == true) {
        newPrice += 50;
        price.innerHTML = newPrice;
    }
    else {
        newPrice -= 50;
        price.innerHTML = newPrice;
    }
}

function addAdditionalDriverExtra() {
    const checkbox2 = document.getElementById("checkbox2");
    let newPrice = convertPriceText();

    if (checkbox2.checked == true) {
        newPrice += 50;
        price.innerHTML = newPrice;
    }
    else {
        newPrice -= 50;
        price.innerHTML = newPrice;
    }
}

function addChildSeatExtra() {
    const checkbox3 = document.getElementById("checkbox3");
    let newPrice = convertPriceText();

    if (checkbox3.checked == true) {
        newPrice += 50;
        price.innerHTML = newPrice;
    }
    else {
        newPrice -= 50;
        price.innerHTML = newPrice;
    }
}

function addRoofBycleExtra() {
    const checkbox4 = document.getElementById("checkbox4");
    let newPrice = convertPriceText();

    if (checkbox4.checked == true) {
        newPrice += 50;
        price.innerHTML = newPrice;
    }
    else {
        newPrice -= 50;
        price.innerHTML = newPrice;
    }
}

function addDocumnetOfCarExtra() {
    const checkbox5 = document.getElementById("checkbox5");
    let newPrice = convertPriceText();

    if (checkbox5.checked == true) {
        newPrice += 50;
        price.innerHTML = newPrice;
    }
    else {
        newPrice -= 50;
        price.innerHTML = newPrice;
    }
}

function addCarInsurcanceExtra() {
    const checkbox6 = document.getElementById("checkbox6");
    let newPrice = convertPriceText();

    if (checkbox6.checked == true) {
        newPrice += 50;
        price.innerHTML = newPrice;
    }
    else {
        newPrice -= 50;
        price.innerHTML = newPrice;
    }
}

function addBonusCardExtra() {
    const checkbox7 = document.getElementById("checkbox7");
    let newPrice = convertPriceText();

    if (checkbox7.checked == true) {
        newPrice += 50;
        price.innerHTML = newPrice;
    }
    else {
        newPrice -= 50;
        price.innerHTML = newPrice;
    }
}

function addDriverRightExtra() {
    const checkbox8 = document.getElementById("checkbox8");
    let newPrice = convertPriceText();

    if (checkbox8.checked == true) {
        newPrice += 50;
        price.innerHTML = newPrice;
    }
    else {
        newPrice -= 50;
        price.innerHTML = newPrice;
    }
}

/*=============== SCROLL REVEAL ANIMATIONS ===============*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 1500,
})

function animateHeader(){
    sr.reveal("header .left-section", { delay: 200 });
    sr.reveal("header .right-section", { origin: 'right', delay: 200 });
    sr.reveal("header .mid-section", { origin: 'top', delay: 200 });
}

function animateCars(){
    sr.reveal(".cars-container .row .card", { interval: 200, origin: 'right', delay: 400 });
}

function animateCarDetails(){
    sr.reveal(".reservation-container .left-section .left-part", { origin: 'left', delay: 600 });
    sr.reveal(".reservation-container .left-section .left-part .car-details .Charactrestic", { origin: 'left', delay: 600, interval: 300 });
    sr.reveal(".reservation-container .left-section .left-part img", { origin: 'left', delay: 800 });
}

function animateExtras(){    
    sr.reveal(".reservation-container .left-section .right-part", { origin: 'left', delay: 700 });
    sr.reveal(".reservation-container .left-section .right-part .title", { origin: 'top', delay: 700, interval: 500 });
    sr.reveal(".reservation-container .left-section .right-part h3", { origin: 'top', delay: 800 });
    sr.reveal(".reservation-container .left-section .right-part hr", { origin: 'top', delay: 800, interval: 300 });
    sr.reveal(".reservation-container .left-section .right-part .extra", { origin: 'top', delay: 700, interval: 300 });
    sr.reveal(".reservation-container .left-section .right-part .total-price", { origin: 'top', delay: 3000 });
}

function animateReservationForm(){    
    sr.reveal(".reservation-container .right-section", { origin: 'right', delay: 700 });
    sr.reveal(".reservation-container .right-section form input", { origin: 'right', delay: 700, interval: 300 });
    sr.reveal(".reservation-container .right-section form textarea", { origin: 'right', delay: 2000, interval: 300 });
    sr.reveal(".reservation-container .right-section form .policy", { origin: 'right', delay: 2000, interval: 300 });
}

animateHeader();
animateCars();
animateCarDetails();
animateExtras();
animateReservationForm();