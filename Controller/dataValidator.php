<?php

class DataValidator {
    public function validateMatchingPasswords($password, $confirmPassword){
      if($password == $confirmPassword){
        return true;
      }
      return false;
    }
  }
?>