<?php

require_once 'connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['CLVUSER']) && isset($_GET['PASSWORD'])) {
	$clvuser = "'".$_GET['CLVUSER']."'";
    $password = $_GET['PASSWORD'];
    $newPassword = $_GET['NEWPASSWORD'];

	$sql = "SELECT * FROM user WHERE CLVUSER 	 = " .$clvuser . " LIMIT 1";

	$result = dbQuery($sql);
	$row = dbFetchAssoc($result);
	// echo json_encode($row);
    
   if($row['PASSWORD'] == $password){
    echo 1;
    //PENDIENTE
    $update = "UPDATE `user` SET `PASSWORD`='$newPassword' WHERE `CLVUSER` = '8'";
    $result = mysqli_query($con, $update); 

   } else {
    echo 0;
   }


}


    ?>