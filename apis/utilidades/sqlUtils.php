<?php
  function getConnection(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "crud_test";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }   
   return $conn;
  }


  function sqlExecuteCommand($query){
    $connection = getConnection();
if ($connection->query($query) === TRUE) {
  $connection->close();
    return "success";
} else {
  $connection->close();
    return "Error: " . $sql . "<br>" . $connection->error;
}
  }


  function sqlSelect($query){
    $connection = getConnection();
    $result =  $connection->query($query);
    $connection->close();

    $rows = [];
    while($row = $result->fetch_object())
{
    $rows[] = $row;
}
    return $rows;
  }
  
 

?>