<?php include '../Controller/login.php'; ?>

<!DOCTYPE html>
<head>
    <!-- =============== FAVICON =============== -->
    <link rel="shortcut icon" type="image/png" href="assets/imgs/icon2.png">
    <!-- ===============    META =============== -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- =============== TITLE =============== -->
    <title>AutoFocus | Login</title>
    <!-- =============== REMIXI ICONS =============== -->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <!-- =============== CSS =============== -->
    <link rel="stylesheet" href="assets/css/loginPage.css">
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
            <a class="phoneBtn" href="contactUsPage.php"><i class="ri-phone-fill icon"></i>+20 114 7450 629</a>
        </div>
    </header>
    
    <!-- =============== LOGIN CONTAINER  =============== -->
    <div class="container">
        <div class="form-section">
            <form action="" method="POST">
                <div class="input-box">
                    <span>Username</span>
                    <i class="icon ri-user-line"></i>
                    <input name="userName" type="text" placeholder="Enter Username" required>
                </div>

                <div class="input-box">
                    <span>Password</span>
                    <i class="icon ri-lock-line"></i>
                    <input name="password" type="password" placeholder="Enter Password" required>
                </div>
                
                <input name="submit" class="submitBtn" type="submit" value="Login">
            </form>
        </div>

        <div class="welcome-text">
            <h3>Nice to see you again</h3>
            <p>Stat your clean, awesome, comfort trip with us now</p>
            <span>Don't have an account?</span><a href="signUpPage.php">Register Now</a>
        </div>
    </div>


    <!-- =============== CAR SOUND =============== -->
    <audio id="CarSound" preload="auto" src="carSound3.mp3"></audio>
    
    <!-- =============== JQUERY =============== -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- scroll reveal -->
    <script src="js/scrollreveal.min.js"></script>

    <!-- main script -->
    <script src="assets/js/loginPage.js"></script>
</body>
</html>