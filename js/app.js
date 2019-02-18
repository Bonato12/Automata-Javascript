console.log("Conectado");

var simbolo = " ";

function Principal(caracter){
    //digito = /^[0-9]+\.[0-9]+$/

    if (caracter >=0 && caracter <= 9){
    simbolo = "digito";
    return 0

    }else{
          if(caracter=='.'){
              simbolo="Operador"
              return 1

          }
          else{
              simbolo="  Error "
              return 5
          }

    }

}


function contenido(estadosig,character,simbolo,estado){
      console.log("|     ",estadosig,"      |  ",character,"    |",simbolo," |     ",estado,"       |");
      document.getElementById("digito").innerHTML = character;
}



var tabla=[[1,8,8,4,8,8],
           [1,2,2,8,5,8],
           [3,8,8,8,8,8],
           [3,8,8,8,5,8],
           [1,8,8,8,8,8],
           [6,8,8,7,8,8],
           [6,8,8,8,8,8],
           [6,8,8,8,8,8],
           [8,8,8,8,8,8]]


function Estado(caracter,tabla){
      var estado = 0;
      for(var item in caracter){
            var estadoSig= estado;
            var charcaracter = Principal(caracter[item]);
            var estado= tabla[estado][charcaracter];
            contenido(estadoSig,caracter[item],simbolo,estado);


       }
}

var caracter = prompt("Ingrese una Cadena", "");
Estado(caracter,tabla);
