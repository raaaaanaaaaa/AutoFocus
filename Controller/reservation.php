<?php

class Reservation extends User{
  // attributes
  public $reservationDate;
  public $town;
  public $district;

  // setters
  public function setReservationDate($reservationDate){
    $this->reservationDate = $reservationDate;
  }
  public function setTown($town){
    $this->town = $town;
  }
  public function setDistrict($district){
    $this->district = $district;
  }

  // getters
  public function getReservationDate(){
    return $this->reservationDate;
  }
  public function getTown(){
    return $this->town;
  }
  public function getDistrict(){
    return $this->district;
  }
}
?>
