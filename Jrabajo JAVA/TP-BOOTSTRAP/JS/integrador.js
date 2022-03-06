$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  const cantidadEntradas = document.getElementById('cantidadEntrada')
  const botonCalcular = document.getElementById('botonCalcular')
  const categoria = document.getElementById('inputState')
  botonCalcular.addEventListener('click',resumen)
  
  function resumen(){
    console.log(categoria.value)
    console.log(cantidadEntradas.value)
    cantidadEntradas.value
    totalCompra.innerHTML=  cantidadEntradas.value
   }
  