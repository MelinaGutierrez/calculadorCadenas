function calcularCadena(cadena) {
  let numeros=cadena.split(",")
  let respuesta
  if(cadena=="")
  {
    respuesta=0;
  }
  else{
    if(numeros.length==1){
      respuesta=parseInt(numeros);
    }
    if(numeros.length>1){
      respuesta=parseInt(numeros[0])+parseInt(numeros[1]);
    }
  }
  return respuesta;
}
export default calcularCadena;
