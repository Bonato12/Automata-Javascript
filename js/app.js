console.log("Conectado");

var simbolo = " ";

function Principal(caracter){
    if (caracter >=0 && caracter <= 9){
          simbolo = "Digito";
          return 0

    }else{
          if(caracter=='.'){
              simbolo="Operador";
              return 1

          }else if(caracter == '-'){
              simbolo="Operador";
              return 2
          }
          else{
              simbolo="Error";
              return 3
          }

    }

}


function contenido(estadoAct,character,simbolo,estadoSig){
      console.log("|     ",estadoSig,"      |  ",character,"    |",simbolo," |     ",estadoAct,"       |");
      //document.getElementById("digito").innerHTML = character;
}



var tabla=[[1,8,4,8],
           [1,2,8,8],
           [3,8,8,8],
           [3,8,8,8],
           [1,8,8,8],
           [6,8,7,8],
           [6,8,8,8],
           [6,8,8,8],
           [8,8,8,8]]


function Estado(caracter,tabla){
      var estadoAct = 0;
      for(var item in caracter){
            var estadoSig= estadoAct;
            var charcaracter = Principal(caracter[item]);
            var estadoAct = tabla[estadoAct][charcaracter];
            contenido(estadoAct,caracter[item],simbolo,estadoSig);


       }
}

var caracter = prompt("Ingrese una Cadena", "");
Estado(caracter,tabla);
