<?php
    include_once("connection.php");

    $views = $_POST["VIEWS"];
    $CLVLINK = $_POST["CLVLINK"];
    
    $query = "UPDATE `link` SET `VIEWS`='$views' WHERE `CLVLINK` = '$CLVLINK'";

    dbQuery($query);
?>