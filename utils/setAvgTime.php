<?php
    include_once("connection.php");

    $AvgTime = $_POST["AVGTIME"];
    $CLVLINK = $_POST["CLVLINK"];
    
    $query = "UPDATE `link` SET `AVGTIME`='$AvgTime' WHERE `CLVLINK` = '$CLVLINK'";

    dbQuery($query);
?>