<?php
    include_once("connection.php");

    $name = $_POST["name"];
    $link = $_POST["link"];
    $clvlink =  $_POST["clvlink"];

    $query = "UPDATE `link` SET `NAME`='$name', `URL`='$link' WHERE `CLVLINK` = '$clvlink'";

    dbQuery($query);

    if(dbQuery($query)){
        echo 1;
        die;
    }else{
        echo 0;
        die;

    }
?>