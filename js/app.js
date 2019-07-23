var simbolo = " ";
function Control(caracter){
    if (caracter >=0 && caracter <= 9){
          simbolo = "Digito";
          return 0
    }else{
          if(caracter =='.'){
              simbolo="Operador";
              return 1

          }else if(caracter == ','){
              simbolo="Operador";
              return 2
          }else if(caracter == '-'){
              simbolo="Operador";
              return 3
          }else if(caracter == 'E'){
              simbolo="Operador";
              return 4
          }
          else{
              simbolo="Error";
              return 5
          }

    }

}


function headerTabla(){
      document.write('<center><table style=\"color:white;\" width:"100%" border="4" "color:white">');
      document.write('<tr align="center"><td width="180px" >' + "EstadoAct" + '</td><td width="180px">' +  "Caracter" + '</td><td width="180px" >' + "Simbolo" + '</td><td width="180px" >' + "EstadoSig" + '</td></tr>');
      document.write('</table></center>');
}


function bodyTabla(estadoAct,character,simbolo,estadoSig){
      document.write('<center><table width:"100%" border="4">');
      document.write('<tr align="center" style=\"color:white;\"><td width="180px" >' + estadoSig + '</td><td width="180px">' +  character + '</td><td width="180px">' + simbolo + '</td><td width="180px">' + estadoAct + '</td></tr>');
      document.write('</table></center>');

}



tabla=[[1,8,8,4,8,8],
       [1,2,2,8,5,8],
       [3,8,8,8,8,8],
       [3,8,8,8,5,8],
       [1,8,8,8,8,8],
       [6,8,8,7,8,8],
       [6,8,8,8,8,8],
       [6,8,8,8,8,8],
       [8,8,8,8,8,8]]

function Estado(caracter,tabla){
      var estadoAct = 0;
      for(var item in caracter){
            var estadoSig= estadoAct;
            var valor = Control(caracter[item]);
            var estadoAct = tabla[estadoAct][valor];
            bodyTabla(estadoAct,caracter[item],simbolo,estadoSig);

       }
       if(estadoAct!=3 && estadoAct!=6){
          alert("Cadena Invalida");
       }else {
          alert("Cadena Valida");
       }

}

function Ejecutar(){
  var caracter = prompt("Ingrese una Cadena", "");
  headerTabla();
  Estado(caracter,tabla);
}

Ejecutar();
