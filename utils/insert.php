<?php


require_once 'connection.php';
include("functions.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //Guardamos el json recibido
    $json = file_get_contents("php://input", true);

    //validamos si tiene una sintaxis correcta
    if (validate_json($json)) {
        //Si es un json valido entonces registramos en la bd

        $data = json_decode($json);
        $sql = "INSERT INTO `link`(`CLVLINK`, `NAME`, `AVGTIME`, `VIEWS`, `CLICKS`, `URL`) VALUES ('".$data->clvlink."','".$data->name."',$data->avgtime,$data->views,$data->clicks,'".$data->url."')";
        // $sql = "INSERT INTO link VALUES('" . mysqli_real_escape_string($con, $data->clvlink) . "','" . mysqli_real_escape_string($con, $data->name) . "','" . mysqli_real_escape_string($con, $data->avgtime) . "','" . mysqli_real_escape_string($con, $data->views) . "','" . mysqli_real_escape_string($con, $data->clicks) . "','" . mysqli_real_escape_string($con, $data->url) . "')";
        $sqlRelation = "INSERT INTO stores VALUES('" . mysqli_real_escape_string($con, $data->clvuser) . "','" . mysqli_real_escape_string($con, $data->clvlink) . "')";
       
        if (dbQuery($sql)) {

            if(dbQuery($sqlRelation)){
                echo json_encode(array("statusCode" => 200, "clvlink" => $data->clvlink, "clvuser" => $data->clvuser, "url" => $data->url, "name" => $data->name));
            }else{
                echo json_encode(array("statusCode" => 201));
            }
            
            
        } else {
            echo json_encode(array("statusCode" => 201));
        }

        
    } else {
        echo json_encode(array("statusCode" => 500));
    }
}




?>