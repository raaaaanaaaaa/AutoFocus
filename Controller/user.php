<?php
require 'userRepository.php';
require 'dataValidator.php';
class User {
    // attributes
    public $name;
    public $mobileNumber;
    public $email;
    public $password;
    public $confirmPassword;
  
    // setters
    public function setName($name) {
      $this->name = $name;
    }
    public function setEmail($email){
      $this->email = $email;
    }
    public function setMobile($mobile){
      $this->mobile = $mobile;
    }
    public function setPassword($password){
      $this->password = $password;
    }
    public function setConfirmPassword($confirmPassword){
      $this->confirmPassword = $confirmPassword;
    }
  
    // getters
    public function getName(){
      return $this->name;
    }
    public function getMobile(){
      return $this->mobile;
    }
    public function getEmail(){
      return $this->email;
    }
    public function getPassword(){
      return $this->password;
    }
    public function getConfirmPassword(){
      return $this->confirmPassword;
    }
  
    public function register(){
      $userRepo = new UserRepository;
  
      $isUsernameEmailTaken = $userRepo->isUsernameOrEmailTaken($this);
      if($isUsernameEmailTaken)
        return -1;
      else{
        // $dataValidator = new DataValidator;
        if($this->password == $this->confirmPassword){
          $userRepo->insertUserIntoDb($this);
          return 1;
        }
        else
          return -2;
      }
    }

    public function login($username, $password){
        $userRepo = new UserRepository;

        $result = $userRepo->checkPasswordWithDb($password, $this);
        return $result;
    }

    public function reserveCar(Reservation $carReservation){
      $userRepo = new UserRepository;
      
      $isAlreadyReserve = $userRepo->checkIfUserAlreadyReserveCar($carReservation);
      if($isAlreadyReserve)
        return -1;
      else{
        $userRepo->insertReservationDataIntoDb($carReservation);
        return 1;
      }
    }
}
?>