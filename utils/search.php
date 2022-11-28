<?php 
require_once 'connection.php';
session_start();


if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['query'])) {
	header('Content-Type: application/json; charset=utf-8');


	$searchQuery =  $_GET['query'];
	// $sql = "SELECT * FROM link WHERE CLVLINK 	 = " .$searchQuery. " LIMIT 1";
    // $sql = "SELECT * FROM link WHERE  '$searchQuery' in (NAME , URL)";
    // stores INNER JOIN link ON stores.CLVLINK=link.CLVLINK
    $sql = "SELECT * FROM stores INNER JOIN link ON stores.CLVLINK=link.CLVLINK WHERE (CLVUSER = '".$_SESSION["usuario_id"]."')AND (link.NAME LIKE '%$searchQuery%' OR link.URL LIKE '%$searchQuery%' OR link.CLVLINK LIKE '%$searchQuery%') ORDER BY id DESC ";
	$result = dbQuery($sql);
	
	// echo json_encode($rows);
    $rows = array();
    while($row = dbFetchAssoc($result)) {
		$rows[] = $row;
	}
    echo json_encode($rows);
}

?>