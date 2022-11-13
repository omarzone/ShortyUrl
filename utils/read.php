<?php


require_once 'connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['CLVLINK'])) {
	$clvlink = "'".mysqli_real_escape_string($con, $_GET['CLVLINK'])."'";
	$sql = "SELECT * FROM link WHERE CLVLINK 	 = " .$clvlink . " LIMIT 1";
	$result = dbQuery($sql);
	
	$row = dbFetchAssoc($result);
	
	echo json_encode($row);
} else {
	$sql = "SELECT * FROM stores INNER JOIN link ON stores.CLVLINK=link.CLVLINK WHERE CLVUSER = " .$_GET['CLVUSER']."";
	$results = dbQuery($sql);
	
	$rows = array();

	$statistics = array();
	$statistics["views"] = 0;
	
	$statistics["clicks"] = 0;
	$statistics["avgtime"] = 0;
	
	while($row = dbFetchAssoc($results)) {

		$statistics["views"] += $row["VIEWS"]; 	
		$statistics["clicks"] += $row["CLICKS"];
		$statistics["avgtime"] += $row["AVGTIME"];	
		$rows[] = $row;
	}
	
	$statistics["LINKS"] = count($rows);
	$statistics["avgtime"] = $statistics["avgtime"]/count($rows);

	$arrayResponse = array('statistics'=> $statistics, 'links'=>$rows);
	echo json_encode($arrayResponse);
	// echo json_encode($rows);
}


?>