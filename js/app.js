console.log("Conectado");
/*
function Principal(){
    caracter = prompt("Ingrese una Cadena", "");;
    var digito =/[0-9]/;
    var simbolo = "";
    lista = [1,2,3,4,5,6]
    estado = 0;
    for (var i = 0; i<= caracter.length -1; i++){
      if (digito.test(caracter[i])){
              if (i==0){
                estado = 0;
                simbolo = "Digito"
                console.table(caracter[i],simbolo,estado);
              }else{
                if (estado == 1){
                  estado =;
                  simbolo = "Digito"
                  console.table(caracter[i],simbolo,estado);
                }else{
                  estado = 1;
                  simbolo = "Digito"
                  console.table(caracter[i],simbolo,estado);
                }

              }
      }else if(caracter[i] == "Ñ"){
            if (i==0){
              estado = 0;
              simbolo = "Operador"
              console.table(caracter[i],simbolo,estado);
            }
            else{
              estado = 1;
              simbolo = "Operador"
              console.table(caracter[i],simbolo,estado);
            }
      }else{
            estado++;
            console.table(caracter[i],'Error',estado);

      }
    }
  }*/

/*
function Principal(){
  caracter = prompt("Ingrese una Cadena", "");
  digito = /^[0-9]+([,][0-9]+)?$/;
  for (var i = 0; i<= caracter.length -1; i++){
    if (digito.test(caracter[i])){
            console.log("Valido")
    }else if(caracter[i] == ","){
            console.log("Valido")
    }else{
          console.log("Error");
    }
  }
}
*/

var caracter = prompt("Ingrese una Cadena", "");

//Funcion que reconoce si el Caracter es Valido o no
function Principal(caracter){
    digito = /^[0-9]+\.[0-9]+$/
    if (digito.test(caracter)){
            cadenaValida();


    }else{
            cadenaNoValida();
    }
    tabla=[[1,8,8,4,8,8],[1,2,2,8,5,8],[3,8,8,8,8,8],[3,8,8,8,5,8],[1,8,8,8,8,8],[6,8,8,7,8,8],[6,8,8,8,8,8],[6,8,8,8,8,8],[8,8,8,8,8,8]];
    console.log(tabla);
}

function cadenaValida(){
      alert("Cadena Valida");
}

function cadenaNoValida(){
      alert("Cadena Invalida");
}

function Estado(caracter){
      digito = /^[0-9]+([,][0-9]+)?$/;
      var partir = caracter.split(".",1);
      document.write(partir);
      var estado = 0;
      for (var i = 0; i<= caracter.length -1; i++){
          if (i==0){
            estado = 0;
            console.log(caracter[0],estado);
          }else{
            if (caracter[i] == '.'){
                estado = 1;
                console.log(caracter[i],estado);
            }else{
              estado = 1;
                console.log(caracter[i],estado);
            }
         }
      }
}

Principal(caracter);
Estado(caracter);
