<?php
    include_once("connection.php");

    $clicks = $_POST["CLICKS"];
    $CLVLINK = $_POST["CLVLINK"];
    
    $query = "UPDATE `link` SET `CLICKS`='$clicks' WHERE `CLVLINK` = '$CLVLINK'";

    dbQuery($query);

    if(dbQuery($query)){
        echo("<script>alert('Se ingresaron los clicks correctamente')</script>");
    }else{
        echo("<script>alert('Se ingresaron los clicks incorrectamente')</script>");

    }
?>