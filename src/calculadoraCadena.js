function calcularCadena(cadena) {
  let numeros=cadena.split(",")
  let respuesta=0
  if(cadena=="")
  {
    return 0;
  }
  else{
    for(var i = 0;i < numeros.length; i++){
      respuesta=respuesta+parseInt(numeros[i]);
    }   
  }
  return respuesta;
}
export default calcularCadena;
