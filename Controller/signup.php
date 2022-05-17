<?php

require 'user.php';
require 'messageGenerator.php';
error_reporting(E_ERROR | E_PARSE);

// if we click on register button
if(isset($_POST["submit"])){
  $newUserName = $_POST['userName'];
  $newUserMobile = $_POST['mobile'];
  $newUserEmail = $_POST['email'];
  $newUserPassword = $_POST['password'];
  $newUserConfirmPassword = $_POST['confirmPassword'];

  $newUser = new User();
  $newUser->setName($newUserName);
  $newUser->setEmail($newUserEmail);
  $newUser->setMobile($newUserMobile);
  $newUser->setPassword($newUserPassword);
  $newUser->setConfirmPassword($newUserConfirmPassword);
  
  $result = $newUser->register();

  if($result == 1)
   echo generateAlertMessages("Success: You Have Signed Up Successfully!", "success");

  elseif($result == -1)
     echo generateAlertMessages("Username Or Email Is Already Taken!", "error");

  elseif($result == -2)
    echo generateAlertMessages("Password Doesnot Matching!", "error");
}
?>
