<?php

require 'user.php';
require 'messageGenerator.php';
require 'reservation.php';
error_reporting(E_ERROR | E_PARSE);

// if we click on book now button
if(isset($_POST["submit"])){
  $userName = $_POST['userName'];
  $mobile = $_POST['mobile'];
  $email = $_POST['email'];
  $dateTime = $_POST['datetime'];
  $town = $_POST['town'];
  $district = $_POST['district'];

  $newUser = new User;
  $newCarReservation = new Reservation;

  $newCarReservation->setName($userName);
  $newCarReservation->setEmail($email);
  $newCarReservation->setMobile($mobile);
  $newCarReservation->setReservationDate($dateTime);
  $newCarReservation->setTown($town);
  $newCarReservation->setDistrict($district);

  $result = $newUser->reserveCar($newCarReservation);
  if($result == 1)
   echo generateAlertMessages("Success: You Have Booked A Car Successfully!", "success");

  elseif($result == -1)
     echo generateAlertMessages("You Are Already Booked A Car", "error");
}
?>