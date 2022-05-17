<?php include '../Controller/contactUs.php'; ?>

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
    <title>AutoFocus | Contact US</title>
    <!-- =============== REMIXI ICONS =============== -->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <!-- =============== CSS =============== -->
    <link rel="stylesheet" href="assets/css/contactUsPage.css">
</head>

<body>
    <!-- =============== PRE LOADER =============== -->
    <div class="loader-bg" onmousemove="playCarSound()" >
        <img src="assets/imgs/icon2.png">
    </div>

    <!-- =============== HEADER =============== -->
    <header class="nav">
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
                    <li><a href="homePage.phpl#gallery">gallery</a></li>
                    <li><a href="#" class="active-link">contact us</a></li>
                </ul>
            </nav>
        </div>

        <div class="right-section">
            <a class="listCarBtn" href="loginPage.php">list a car?</a>
            <a class="phoneBtn" href="#"><i class="ri-phone-fill icon"></i>+20 114 7450 629</a>
        </div>
    </header>
    <!-- =============== MAIN CONTENT =============== -->
    <section class="contact-us" id="contact-us">
        <div class="container">
            <!-- =============== CONTACT INFO =============== -->
            <div class="contactInfo">
                <h2>Contact Info</h2>
                <ul class="info">
                    <li>
                        <span><img class="logo" src="assets/imgs/location-1.png" alt="Location photo" /></span>
                        <span> 9st El-Maadi<br>
                            Cairo, Egypt</span>
                    </li>
                    <li>
                        <span><img class="logo" src="assets/imgs/email.png" alt="mail photo" /></span>
                        <span> AutoFocus9990@gmail.com</span>
                    </li>
                    <li>
                        <span><img class="logo" src="assets/imgs/call.png" alt="call photo" /></span>
                        <span> +20 114 7450 629</span>
                    </li>
                </ul>
                <div class="social-icons">
                    <a href="#"><i class="ri-facebook-box-fill icon"></i></a>
                    <a href="#"><i class="ri-instagram-fill icon"></i></a>
                    <a href="#"><i class="ri-twitter-fill icon"></i></a>
                    <a href="#"><i class="ri-youtube-fill icon"></i></a>
                </div>
            </div>
            <!-- =============== CONTACT FORM =============== -->
            <?php echo $alert; ?>
            <form class="" action="" method="post" autocomplete="off">
                <div class="contactForm">
                    <h2>Send a Message</h2>
                    <div class="formBox">
                        <div class="inputBox w50">
                            <input type="text" name="firstname" required="required">
                            <span>First Name</span>
                        </div>
                        <div class="inputBox w50">
                            <input type="text" name="secondname" required>
                            <span>Last Name</span>
                        </div>
                        <div class="inputBox w50">
                            <input type="email" name="email" required>
                            <span>Email Address</span>
                        </div>
                        <div class="inputBox w50">
                            <input type="tel" name="phone" required>
                            <span>Mobile Number</span>
                        </div>
                        <div class="inputBox w100">
                            <textarea name="message" required></textarea>
                            <span>Write your message here ...</span>
                        </div>
                        <div class="inputBox w100">
                            <input type="submit" name="submit" value="Send" required>
                        </div>
                    </div>
            </form>
        </div>
    </section>

    <!-- =============== CAR SOUND =============== -->
    <audio id="CarSound" preload="auto" src="carSound3.mp3"></audio>
    
    <!-- =============== JQUERY =============== -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- scroll reveal -->
    <script src="assets/js/scrollreveal.min.js"></script>

    <!-- main script -->
    <script src="assets/js/contactUsPage.js"></script>
    
</body>

</html>