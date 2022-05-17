<?php include '../Controller/carReservation.php' ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <!-- =============== FAVICON =============== -->
    <link rel="shortcut icon" type="image/png" href="assets/imgs/icon2.png">
    <!-- =============== META =============== -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- =============== TITLE =============== -->
    <title>AutoFocus | Car Rental Platform</title>
    <!-- =============== REMIXI ICONS =============== -->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <!-- =============== CSS =============== -->
    <link rel="stylesheet" href="assets/css/CarsAndReservationsPage.css">
</head>

<body>
    <!-- =============== PRE LOADER =============== -->
    <div class="loader-bg" onmousemove="playCarSound()">
        <img src="assets/imgs/icon2.png">
    </div>

    <!-- =============== HEADER =============== -->
    <header>
        <div class="left-section">
            <a href="homePage.php"><img src="assets/imgs/logoHq.png" alt="Logo Img"></a> 
        </div>

        <div class="mid-section">
            <nav class=".nav__menu">
                <ul class="navigation">
                    <li><a href="homePage.php">home</a></li>
                    <li><a href="homePage.php#services">services</a></li>
                    <li><a href="homePage.php#advantage">advantage</a></li>
                    <li><a href="homePage.php#how-it-works">how it works</a></li>
                    <li><a href="homePage.php#gallery">gallery</a></li>
                    <li><a href="contactUsPage.php">conatct us</a></li>
                </ul>
            </nav>
        </div>

        <div class="right-section">
            <a class="listCarBtn" href="loginPage.php">list a car?</a>
            <a class="phoneBtn" href="contactUsPage.php"><i class="ri-phone-fill icon"></i>+20 114 7450 629</a>
        </div>
    </header>

    <!-- =============== CARS CONTAINER =============== -->
    <section class="cars">
        <div class="cars-container" id="cars-container">
            <div class="row">
                <!-- ===== CAR 1 ====== -->
                <div class="card Nissan Petrol Red">
                    <div class="upper-section">
                        <h3 class="price">from 150 EGP</span></h3>
                        <h3 class="category">luxury car</h3>
                    </div>
                    <div class="car-image">
                        <img src="assets/imgs/PngCar2.png" alt="">
                    </div>
                    <div class="lower-section">
                        <h3 class="car-name">nissan juke 2019</h3>
                        <h4 class="color">red</h4>
                        <a id="btn1" href="#" class="hire-now-btn" onclick="ChangeCar1();">hire now</a>
                    </div>
                </div>

                <!-- ===== CAR 2 ====== -->
                <div class="card Audi Petrol Yellow">
                    <div class="upper-section">
                        <h3 class="price">from 250 EGP</h3>
                        <h3 class="category">vip car</h3>
                    </div>
                    <div class="car-image">
                        <img src="assets/imgs/pngCar.png" alt="">
                    </div>
                    <div class="lower-section">
                        <h3 class="car-name">audi juke 2021</h3>
                        <h4 class="color">yellow</h4>
                        <a id="btn2" href="#" class="hire-now-btn" onclick="ChangeCar2();">hire now</a>
                    </div>
                </div>

                <!-- ===== CAR 3 ====== -->
                <div class="card Nissan Petrol Yellow">
                    <div class="upper-section">
                        <h3 class="price">from 270 EGP</h3>
                        <h3 class="category">luxury car</h3>
                    </div>
                    <div class="car-image">
                        <img src="assets/imgs/PngCar12.png" alt="">
                    </div>
                    <div class="lower-section">
                        <h3 class="car-name">Nissan juke 2019</h3>
                        <h4 class="color">yellow</h4>
                        <a id="btn10" href="#" class="hire-now-btn" onclick="ChangeCar3();">hire now</a>
                    </div>
                </div>

                <!-- ===== CAR 4 ====== -->
                <div class="card Audi Petrol Black">
                    <div class="upper-section">
                        <h3 class="price">from 250 EGP</h3>
                        <h3 class="category">vip car</h3>
                    </div>
                    <div class="car-image">
                        <img src="assets/imgs/pngCar6.png" alt="">
                    </div>
                    <div class="lower-section">
                        <h3 class="car-name">Audi juke 2018</h3>
                        <h4 class="color">black</h4>
                        <a id="btn4" href="#" class="hire-now-btn" onclick="ChangeCar4();">hire now</a>
                    </div>
                </div>

                <!-- ===== CAR 5 ====== -->
                <div class="card Audi Petrol Red">
                    <div class="upper-section">
                        <h3 class="price">from 350 EGP</h3>
                        <h3 class="category">luxury car</h3>
                    </div>
                    <div class="car-image">
                        <img src="assets/imgs/PngCar7.png" alt="">
                    </div>
                    <div class="lower-section">
                        <h3 class="car-name">Audi juke 2020</h3>
                        <h4 class="color">red</h4>
                        <a id="btn5" href="#" class="hire-now-btn" onclick="ChangeCar5();">hire now</a>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- ===== CAR 6 ====== -->
                <div class="card Mercedes Diesel Blue">
                    <div class="upper-section">
                        <h3 class="price">from 320 EGP</h3>
                        <h3 class="category">luxury car</h3>
                    </div>
                    <div class="car-image">
                        <img src="assets/imgs/pngCar5.png" alt="">
                    </div>
                    <div class="lower-section">
                        <h3 class="car-name">Mercedes 2017</h3>
                        <h4 class="color">blue</h4>
                        <a id="btn3" href="#" class="hire-now-btn" onclick="ChangeCar6();">hire now</a>
                    </div>
                </div>

                <!-- ===== CAR 7 ====== -->
                <div class="card Ferrari Diesel White">
                    <div class="upper-section">
                        <h3 class="price">from 520 EGP</h3>
                        <h3 class="category">luxury car</h3>
                    </div>
                    <div class="car-image">
                        <img src="assets/imgs/PngCar9.png" alt="">
                    </div>
                    <div class="lower-section">
                        <h3 class="car-name">Ferrari s 2019</h3>
                        <h4 class="color">white</h4>
                        <a id="btn7" href="#" class="hire-now-btn" onclick="ChangeCar7();">hire now</a>
                    </div>
                </div>

                <!-- ===== CAR 8 ====== -->
                <div class="card Mercedes Diesel White">
                    <div class="upper-section">
                        <h3 class="price">from 250 EGP</h3>
                        <h3 class="category">luxury car</h3>
                    </div>
                    <div class="car-image">
                        <img src="assets/imgs/juke.png" alt="">
                    </div>
                    <div class="lower-section">
                        <h3 class="car-name">mercedes 2017</h3>
                        <h4 class="color">white</h4>
                        <a id="btn12" href="#" class="hire-now-btn" onclick="ChangeCar8();">hire now</a>
                    </div>
                </div>

                <!-- ===== CAR 9 ====== -->
                <div class="card Mercedes Diesel Black">
                    <div class="upper-section">
                        <h3 class="price">from 480 EGP</h3>
                        <h3 class="category">luxury car</h3>
                    </div>
                    <div class="car-image">
                        <img src="assets/imgs/PngCar18.png" alt="">
                    </div>
                    <div class="lower-section">
                        <h3 class="car-name">mercedes c 2020</h3>
                        <h4 class="color">black</h4>
                        <a id="btn9" href="#" class="hire-now-btn" onclick="ChangeCar9();">hire now</a>
                    </div>
                </div>

                <!-- ===== CAR 10 ====== -->
                <div class="card Ferrari Diesel Red">
                    <div class="upper-section">
                        <h3 class="price">from 650 EGP</h3>
                        <h3 class="category">luxury car</h3>
                    </div>
                    <div class="car-image">
                        <img src="assets/imgs/PngCar16.png" alt="">
                    </div>
                    <div class="lower-section">
                        <h3 class="car-name">Ferrari w 2020</h3>
                        <h4 class="color">red</h4>
                        <a id="btn14" href="#" class="hire-now-btn" onclick="ChangeCar10();">hire now</a>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- ===== CAR 11 ====== -->
                <div class="card Hunda Electro Orange">
                    <div class="upper-section">
                        <h3 class="price">from 580 EGP</h3>
                        <h3 class="category">luxury car</h3>
                    </div>
                    <div class="car-image">
                        <img src="assets/imgs/PngCar13.png" alt="">
                    </div>
                    <div class="lower-section">
                        <h3 class="car-name">Hunda 2021</h3>
                        <h4 class="color">orange</h4>
                        <a id="btn11" href="#" class="hire-now-btn" onclick="ChangeCar11();">hire now</a>
                    </div>
                </div>

                <!-- ===== CAR 12 ====== -->
                <div class="card Hunda Electro Blue">
                    <div class="upper-section">
                        <h3 class="price">from 150 EGP</h3>
                        <h3 class="category">luxury car</h3>
                    </div>
                    <div class="car-image">
                        <img src="assets/imgs/PngCar10.png" alt="">
                    </div>
                    <div class="lower-section">
                        <h3 class="car-name">Hunda 2015</h3>
                        <h4 class="color">blue</h4>
                        <a id="btn8" href="#" class="hire-now-btn" onclick="ChangeCar12();">hire now</a>
                    </div>
                </div>

                <!-- ===== CAR 13 ====== -->
                <div class="card Hunda Electro Orange">
                    <div class="upper-section">
                        <h3 class="price">from 100 EGP</h3>
                        <h3 class="category">luxury car</h3>
                    </div>
                    <div class="car-image">
                        <img src="assets/imgs/PngCar15.png" alt="">
                    </div>
                    <div class="lower-section">
                        <h3 class="car-name">Hunda ss 2013</h3>
                        <h4 class="color">orange</h4>
                        <a id="btn13" href="#" class="hire-now-btn" onclick="ChangeCar13();">hire now</a>
                    </div>
                </div>

                <!-- ===== CAR 14 ====== -->
                <div class="card BMW Diesel Blue">
                    <div class="upper-section">
                        <h3 class="price">from 610 EGP</h3>
                        <h3 class="category">luxury car</h3>
                    </div>
                    <div class="car-image">
                        <img src="assets/imgs/PngCar19.png" alt="">
                    </div>
                    <div class="lower-section">
                        <h3 class="car-name">BMW ss 2021</h3>
                        <h4 class="color">blue</h4>
                        <a id="btn6" href="#" class="hire-now-btn" onclick="ChangeCar14();">hire now</a>
                    </div>
                </div>

                <!-- ===== CAR 15 ====== -->
                <div class="card BMW Diesel Orange">
                    <div class="upper-section">
                        <h3 class="price">from 480 EGP</h3>
                        <h3 class="category">luxury car</h3>
                    </div>
                    <div class="car-image">
                        <img src="assets/imgs/PngCar17.png" alt="">
                    </div>
                    <div class="lower-section">
                        <h3 class="car-name">BMW Z4 2019</h3>
                        <h4 class="color">orange</h4>
                        <a id="btn1" href="#" class="hire-now-btn" onclick="ChangeCar15();">hire now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- =============== RESERVATION FORM =============== -->
    <section class="reservation-container" id="reservation-container">
        <div class="left-section">
            <div class="left-part">
                <a class="backBtn" href="#"><i class="ri-close-fill" onclick="closeReservationForm();"></i></a>
                <div class="img-container">
                    <img id="ImgRent" src="assets/imgs/PngCar222.png" alt="car image" />
                </div>
                <div class="car-details">
                    <h2>Car <span>Charactrestics</span></h2>
                    <div class="Charactrestic">
                        <div class="circle"></div>
                        <h3>Year of issue <span id="IssueYear">2019</span></h3>
                    </div>

                    <div class="Charactrestic">
                        <div class="circle"></div>
                        <h3>Model year <span id="ModelYear">2019</span></h3>
                    </div>

                    <div class="Charactrestic">
                        <div class="circle"></div>
                        <h3>Engine <span id="Engine">1.04 (134 hp). Petrol</span></h3>
                    </div>

                    <div class="Charactrestic">
                        <div class="circle"></div>
                        <h3>Automatic transimission</h3>
                    </div>

                    <div class="Charactrestic">
                        <div class="circle"></div>
                        <h3><span id="drive">Partial</span> drive</h3>
                    </div>

                    <div class="Charactrestic">
                        <div class="circle"></div>
                        <h3>Number of seats 4</h3>
                    </div>
                </div>
            </div>

            <div class="right-part">
                <div class="select-extras">
                    <h2 class="title">Select <span>Extras</span></h2>
                    <h3>select add-ons</h3>

                    <div class="extra">
                        <div class="extra-name">
                            <input id="checkbox1" type="checkbox" onclick="addGpsNavigatorExtra();">
                            <h2>gps naviagtor</h2>
                        </div>
                        <div class="price">
                            50 EGP / <span>day</span>
                        </div>
                    </div>
                    <hr>

                    <div class="extra">
                        <div class="extra-name">
                            <input id="checkbox2" type="checkbox" onclick="addAdditionalDriverExtra();">
                            <h2>Additional driver</h2>
                        </div>
                        <div class="price">
                            50 EGP / <span>day</span>
                        </div>
                    </div>
                    <hr>

                    <div class="extra">
                        <div class="extra-name">
                            <input id="checkbox3" type="checkbox" onclick="addChildSeatExtra();">
                            <h2>Child seat</h2>
                        </div>
                        <div class="price">
                            50 EGP / <span>day</span>
                        </div>
                    </div>
                    <hr>

                    <div class="extra">
                        <div class="extra-name">
                            <input id="checkbox4" type="checkbox" onclick="addRoofBycleExtra();">
                            <h2>roof bicycle rack</h2>
                        </div>
                        <div class="price">
                            50 EGP / <span>day</span>
                        </div>
                    </div>
                </div>

                <div class="select-extras">
                    <h2 class="title">Driver <span>Extras</span></h2>
                    <h3>select add-ons</h3>
                    <div class="extra">
                        <div class="extra-name">
                            <input id="checkbox5" type="checkbox" onclick="addDocumnetOfCarExtra();">
                            <h2>Documents of car</h2>
                        </div>
                        <div class="price">
                            50 EGP / <span>day</span>
                        </div>
                    </div>
                    <hr>

                    <div class="extra">
                        <div class="extra-name">
                            <input id="checkbox6" type="checkbox" onclick="addCarInsurcanceExtra();">
                            <h2>car insurance</h2>
                        </div>
                        <div class="price">
                            50 EGP / <span>day</span>
                        </div>
                    </div>
                    <hr>

                    <div class="extra">
                        <div class="extra-name">
                            <input id="checkbox7" type="checkbox" onclick="addBonusCardExtra();">
                            <h2>bonus card</h2>
                        </div>
                        <div class="price">
                            50 EGP / <span>day</span>
                        </div>
                    </div>
                    <hr>
                    
                    <div class="extra">
                        <div class="extra-name">
                            <input id="checkbox8" type="checkbox" onclick="addDriverRightExtra();">
                            <h2>driver's rights</h2>
                        </div>
                        <div class="price">
                            50 EGP / <span>day</span>
                        </div>
                    </div>
                    <div class="total-price">
                        <h2>Total Price: <span id="total-price">150</span> <span> EGP</span></h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="right-section">
            <div class="title-text">
                <h2><span>fill in</span> your details</h2>
                <h3>all fields are required</h3>
            </div>
            <form action="" method="POST">
                <input name="userName" class="input" type="text" placeholder="Name" required>
                <input name="mobile" class="input" type="tel" placeholder="Mobile No." required>
                <input name="email" class="input" type="email" placeholder="Email" required>
                <input name="datetime" class="input" type="date" required>
                <input name="town" class="input" type="text" placeholder="Town" required>
                <input name="district" class="input" type="text" placeholder="District" required>
                <div class="policy">
                    <input type="checkbox" required>
                    <h3>I agree with the privacy policy</h3>
                </div>
                <input name="submit" class="submit-btn" type="submit" value="Book Now" required>
            </form>
            <div class="warning">
                <p>by filling in all of the data, you agree to the terms of the contact and the privacy policy.</p>
            </div>
        </div>
    </section>


    <!-- =============== JAVASCRIPT =============== -->

    <!--=============== SCROLL UP ===============-->
    <a href="#" class="scrollup" id="scroll-up">
        <i class="ri-arrow-up-fill scrollup__icon"></i>
    </a>

    <!-- =============== CAR SOUND =============== -->
    <audio id="CarSound" preload="auto" src="carSound3.mp3"></audio>

    <!-- =============== JQUERY =============== -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- =============== SCROLL REVEAL =============== -->
    <script src="assets/js/scrollreveal.min.js"></script>

    <!-- =============== MAIN FILE =============== -->
    <script src="assets/js/CarsAndReservationsPage.js"></script>
</body>

</html>