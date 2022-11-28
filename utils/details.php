<?php
    include_once("connection.php");

    $CLVLINK = $_POST["CLVLINK"];

    $query = "SELECT `AVGTIME`, `VIEWS`, `CLICKS` FROM `link` WHERE `CLVLINK` = '$CLVLINK'";

    $result = dbQuery($query);
    $rows = dbFetchAssoc($result);

    echo(json_encode($rows));


?>