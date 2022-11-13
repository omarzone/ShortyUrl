    <?php      
        $host = "localhost";  
        $user = "root";  
        $password = '';  
        $db_name = "shorty";  

        $con =  mysqli_connect($host, $user, $password, $db_name) or die('MySQL connect failed. ' . mysqli_connect_error());

        function dbQuery($sql) {
            global $con;
            $result = mysqli_query($con, $sql) or die(mysqli_error($con));
            return $result;
        }
        
        function dbFetchAssoc($result) {
            return mysqli_fetch_assoc($result);
        }
        
        function closeConn() {
            global $con;
            mysqli_close($con);
        }


    ?>  