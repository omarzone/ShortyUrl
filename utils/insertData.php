<?php
    include("connection.php");
    $email = $_POST["email"];
    $password = $_POST["password"];
    $name = $_POST["nickname"];


    $query = "INSERT INTO `user` (`EMAIL`, `PASSWORD`, `NAME`, `PROFILEPIC`) VALUES ('".$email."', '".$password."', '".$name."', '/img/profile.png')";
    $result = mysqli_query($con, $query); 

    if($result){  
        // echo "<h1><center> Login Correcto </center></h1>";  
        header("location: ../index.html");
    }  
    else{  
        echo "<h1>No se pudo Ingresar el usuario</h1>";  
    }  
?>