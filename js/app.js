console.log("Conectado");
function Principal(){
    caracter = prompt("Ingrese una Cadena", "");;
    var digito ="[0-1-2-3-4-5-6-7-8-9]" ;
    var simbolo = "";
    lista = [1,2,3,4,5,6]
    estado = 0;
    for (var i = 0; i<= caracter.length -1; i++){
      if (digito.match(caracter[i])){
            simbolo = "Digito"
            console.table(caracter[i],simbolo);
      }else if(caracter[i] == "Ñ"){
            simbolo = "Operador"
            console.table(caracter[i],simbolo);
            control = 2;
      }else{
            console.table(caracter[i],'Error');

      }
    }



}


function cadenaValida(){
      alert("Cadena Valida");
}

function cadenaNoValida(){
      alert("Cadena Invalida");
}



Principal();
