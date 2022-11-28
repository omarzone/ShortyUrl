<?php
include('connection.php');

$email = $_POST["mail"];
$password = $_POST["password"];

//to prevent from mysqli injection  
$email  = stripcslashes($email);
$password = stripcslashes($password);
$email  = mysqli_real_escape_string($con, $email);
$password = mysqli_real_escape_string($con, $password);

$sql = "select * from user where EMAIL = '$email ' and PASSWORD = '$password'";
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$count = mysqli_num_rows($result);



if ($count == 1) {
    // echo "<h1><center> Login Correcto </center></h1>";  
    header("location: ../dashboard.php");
    echo $row['NAME'];
    session_start();
    $_SESSION["usuario"] = $row['NAME'];
    $_SESSION["usuario_id"] = $row['CLVUSER'];
    $_SESSION["profilePic"] = $row["PROFILEPIC"];
} else {
    echo "<h1>Contraseña o Correo Invalido</h1>";
    session_start();

    session_destroy();
}
