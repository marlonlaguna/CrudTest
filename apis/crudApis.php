<?php
include "utilidades/sqlUtils.php";
// Crear un nuevo post
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
  $inputJSON = file_get_contents('php://input');
  $input= json_decode( $inputJSON ); 
 $query = "insert into users (nombre, apellido) values ('". $input->{'nombre'} ."', '". $input->{'apellido'} ."')";
 $result = sqlExecuteCommand($query);

 if($result == "success"){
  header("HTTP/1.1 200 OK");
   echo "Registro insertado correctamente";
 }else{
  header("HTTP/1.1 500 internal server error");
   echo $result;
 }
}


//Metodo GET
if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
  $query = "SELECT * FROM users";
  header("HTTP/1.1 200 OK");
   echo json_encode(sqlSelect($query));
}

 
//Metodo PUT
if ($_SERVER['REQUEST_METHOD'] == 'PUT')
{
  $inputJSON = file_get_contents('php://input');
  $input= json_decode( $inputJSON ); 

  $query = "UPDATE users SET nombre = '". $input->{'nombre'} . "', apellido = '". $input->{'apellido'} ."' WHERE id=". $input->{'id'} ;
  $result = sqlExecuteCommand($query);

  if($result == "success"){
    header("HTTP/1.1 200 OK");
    echo "Registro editado correctamente";
  }else{
    header("HTTP/1.1 500 internal server error");
    echo $result;
  }

}


if ($_SERVER['REQUEST_METHOD'] == 'DELETE')
{
  $inputJSON = file_get_contents('php://input');
  $input= json_decode( $inputJSON ); 
 $query = "DELETE FROM USERS WHERE id=". $input->{'id'};
 $result = sqlExecuteCommand($query);

 if($result == "success"){
  header("HTTP/1.1 200 OK");
   echo "Registro eliminado correctamente";
 }else{
  header("HTTP/1.1 500 internal server error");
   echo $result;
 }
}
 
//En caso de que ninguna de las opciones anteriores se haya ejecutado
//header("HTTP/1.1 400 Bad Request");
 
?>