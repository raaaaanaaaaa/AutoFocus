<?php
// Reponsiple for handling user database operations
require '../Model/databaseModel.php';

class UserRepository extends Connection{
    public function isUsernameOrEmailTaken(User $user){
      $queryResult = mysqli_query($this->conn, "SELECT * FROM tb_user WHERE UserName = '$user->name' OR Email = '$user->email'");
      if(mysqli_num_rows($queryResult) > 0)
        return true;
      else
        return false;
    }
  
    public function insertUserIntoDb(User $user){
      $query = "INSERT INTO tb_user VALUES('$user->name', '$user->mobile', '$user->email', '$user->password')";
      mysqli_query($this->conn, $query);
    }

    public function checkPasswordWithDb($password, User $user){
      $result = mysqli_query($this->conn, "SELECT * FROM tb_user WHERE UserName = '$user->name' OR Email = '$user->email'");
      if(mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);
        if($password == $row["Password"])
          return 1;
        else
          return -1;
      }
      else
        return -2;
    }

    public function getUserDataFromDb(User $user){
      $result = mysqli_query($this->conn, "SELECT * FROM tb_user WHERE UserName = '$user->name' OR Email = '$user->email'");
      if(mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);
        return $row;
      }
      else
        return NULL;
    }

    public function insertReservationDataIntoDb(Reservation $carReservation){
      $query = "INSERT INTO tb_car VALUES('', '$carReservation->name', '$carReservation->mobile', '$carReservation->email', '$carReservation->reservationDate', '$carReservation->town', '$carReservation->district')";
      mysqli_query($this->conn, $query);
    }

    public function checkIfUserAlreadyReserveCar(Reservation $carReservation){
      $result = mysqli_query($this->conn, "SELECT * FROM tb_car WHERE CustomerName = '$carReservation->name'");
      if(mysqli_num_rows($result) > 0){
        return true;
      }
      else
        return false;
    }
}
?>