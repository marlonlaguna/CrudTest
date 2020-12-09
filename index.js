
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, CommonService) {
$scope.personas = [];
$scope.nombre = "";
$scope.apellido = "";

$scope.personaSeleccionada = null;





$scope.traerPersonas = function(){

  CommonService.getAll("apis/crudApis.php").then(function(response){
    $scope.personas = response;
       })
       ["catch"](function (err) {
       //    alert("Advertencia: "+ err.message);
       });
};



$scope.agregarPersona = function(){
   var nuevaPersona = {
     "nombre": $scope.nombre,
     "apellido": $scope.apellido
   }

   CommonService.postNew(JSON.stringify(nuevaPersona),"apis/crudApis.php").then(function(response){
    //respuestas del servidor
 if (response.status == 200) {
  $scope.nombre = "";
  $scope.apellido = "";
  
  $scope.personaSeleccionada = null;
  Swal.fire({
    icon: 'info',
    title: 'Persona agregada',
    text: 'Persona agregada con exito'
  })
 }
})
["catch"](function (err) {
alert("Error al insertar comunidad");
});
$scope.traerPersonas();
}

$scope.seleccionarPersona = function(persona, i){
  $scope.personaSeleccionada = persona;
  $scope.personaSeleccionada.i = i;
  $scope.nombre = $scope.personaSeleccionada.nombre;
$scope.apellido = $scope.personaSeleccionada.apellido;
}

$scope.eliminar= function(){

  var eliminar = {
    "id":  $scope.personaSeleccionada.i
  }

  CommonService.deleteNew(JSON.stringify(eliminar),"apis/crudApis.php").then(function(response){
    //respuestas del servidor
 if (response.status == 200) {
  $scope.nombre = "";
  $scope.apellido = "";
  $scope.personaSeleccionada = null;
  Swal.fire({
    icon: 'info',
    title: 'Persona eliminada',
    text: 'Persona eliminada con exito'
  })
 }
})
["catch"](function (err) {
alert("Error al insertar comunidad");
});

$scope.traerPersonas();
}


$scope.editar = function(){
  if($scope.personaSeleccionada === undefined){
    Swal.fire({
      icon: 'info',
      title: 'no hay nadie seleccionado',
      text: 'No hay persona seleccionada'
    })
   
  }
  else{

    var editarPersona = {
      "id":  $scope.personaSeleccionada.i,
      "nombre": $scope.nombre,
      "apellido": $scope.apellido
    }

    CommonService.putNew(JSON.stringify(editarPersona),"apis/crudApis.php").then(function(response){
      //respuestas del servidor
   if (response.status == 200) {
    Swal.fire({
      icon: 'info',
      title: 'Persona editada',
      text: 'Persona editada con exito'
    })
    $scope.traerPersonas();
   }
  })
  ["catch"](function (err) {
  alert("Error al insertar comunidad");
  });

    $scope.personas[$scope.personaSeleccionada.i].nombre =  $scope.nombre;
    $scope.personas[$scope.personaSeleccionada.i].apellido =  $scope.apellido;
  }

}



$scope.traerPersonas();
});
