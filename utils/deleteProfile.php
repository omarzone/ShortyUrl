<?php 

require_once 'connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['CLVUSER'])) {
    $clv = "'".$_POST['CLVUSER']."'";
	$sql = "delete from user WHERE CLVUSER =$clv";

	if(dbQuery($sql)){
        echo 1;
        exit;
    }else{
        echo 0;
        exit;
    }
}else{
    echo "metodo invalido";
}


?>
