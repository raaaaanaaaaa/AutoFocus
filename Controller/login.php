<?php

require 'user.php';
require 'messageGenerator.php';
error_reporting(E_ERROR | E_PARSE);

// if we click on login button
if(isset($_POST["submit"])){
  $userName = $_POST["userName"];
  $password = $_POST["password"];
  
  $user = new User;
  $user->setName($userName);
  $user->setPassword($password);
  $result = $user->login($userName, $password);
  
  if($result == 1){
    echo generateAlertMessages("Success: You Have Logged In Successfully!", "success");
    header("Location: CarsAndReservations.php");
  }
  elseif($result == -1)
    echo generateAlertMessages("Wrong Password, Please Try Again!", "error");
  
  elseif($result == -2)
    echo generateAlertMessages("User Not Exist, Please Sign Up!", "error");
}
?>
