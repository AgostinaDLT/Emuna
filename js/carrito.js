//Variable que mantiene el estado visible del carrito
var carritoVisible = false;

//Espera de carga de productos
if(document.readyState=='loading'){
  document.addEventListener('DOMContentLoaded', ready)
}else{
  ready();
}


function ready(){
  //Funcionalidad de los botones de eliminar
  var botonesElimiarItem = document.getElementsByClassName('btn-eliminar');
  for(vari=0; i<botonesElimiarItem.length;i++){
    var button =  botonesElimiarItem[i];
    button.addEventListener('click', eliminarItemCarrito);
  }
}


//eliminar el item seleccionado del carrito
function eliminarItemCarrito(event){
  var buttonClicked = event.target;
  
}