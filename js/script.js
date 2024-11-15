'use strict';

//Form enviado
function mostrarExito(){
  alert('Formulario enviado :)');
}

const $imagenGrande = document.querySelector('#grande');
const $imagenes = document.querySelectorAll('.div1 img');

	for (const $imagen of $imagenes) {
	    $imagen.addEventListener('click', function(evento){
	        console.log(evento.currentTarget);
	        const srcImg = evento.currentTarget.src;
	        const altImg = evento.currentTarget.alt;
	        $imagenGrande.src = srcImg;
	        $imagenGrande.alt = altImg;
	    })
} 

//Validar cantidad seleccionada para agregar al carrito
const $formCarrito = document.getElementById('formCarrito');
$formCarrito.addEventListener('click', function(evento) {
  evento.preventDefault();

  const $cantidad = document.getElementById('inputCantidad').value;
  const $alerta = document.getElementById('alerta');

  $alerta.textContent = '';

  if ($cantidad <= 0 || $cantidad >100) {
    $alerta.textContent = 'Ingresá una cantidad válida';
    return;
  }
});
