console.log("Conectado");

var simbolo = " ";

function Principal(caracter){
    if (caracter >=0 && caracter <= 9){
          simbolo = "Digito";
          return 0

    }else{
          if(caracter =='.'){
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


function CabeceraTabla(){
      document.write('<center><table width:"100%" border="1">');
      document.write('<tr align="center"><td width="180px" >' + "EstadoAct" + '</td><td width="180px">' +  "Caracter" + '</td><td width="180px" >' + "Simbolo" + '</td><td width="180px" >' + "EstadoSig" + '</td></tr>');
      document.write('</table></center>');
}


function Tabla(estadoAct,character,simbolo,estadoSig){
      document.write('<center><table width:"100%" border="1px solid black">');
      document.write('<tr align="center"><td width="180px" >' + estadoSig + '</td><td width="180px">' +  character + '</td><td width="180px">' + simbolo + '</td><td width="180px">' + estadoAct + '</td></tr>');
      document.write('</table></center>');

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
      var lista = []
      for(var item in caracter){
            var estadoSig= estadoAct;
            var charcaracter = Principal(caracter[item]);
            var estadoAct = tabla[estadoAct][charcaracter];
            Tabla(estadoAct,caracter[item],simbolo,estadoSig);

       }


}

var caracter = prompt("Ingrese una Cadena", "");
CabeceraTabla();
Estado(caracter,tabla);
