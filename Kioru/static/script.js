var puntCPU = 0;
var puntU = 0;
var nombre;




function pr(){
    nombre = document.getElementById("name").value;  
     
    if(nombre == ""){
        alert("Debes ingresar un nombre")
        return false;
    }
    else{
        document.getElementById("padre").style.display = "none";
        document.getElementById("juego").style.display = "block";
        document.getElementById("setNombre").innerHTML = nombre;
        
    }
}



function sal(){
    document.getElementById("padre").style.display = "block";
    document.getElementById("juego").style.display = "none";
    document.getElementById("name").value = "";
    puntCPU = 0;
    puntU = 0;
    document.getElementById("puntU").innerHTML = puntU;
    document.getElementById("puntCPU").innerHTML = puntCPU;
}

function juego(eleccionU){
    var persona = parseInt(eleccionU);

    var maquina=Math.floor(Math.random() * 3);
    var ruta = ["static/img/piedra.jpg", "static/img/papel.jpg", "static/img/tijera.jpg"];
    
    var resultado = ["Empate", "Ganaste", "Perdiste"];
    
    var game = [
        [0,1,2],
        [2,0,1],
        [1,2,0],
    ];

    var game_des = [
        ["", "Papel cubre piedra", "Piedra rompe tijera"],
        ["Papel cubre piedra", "", "Tijera corta papel"],
        ["Piedra rompe tijera", "Tijera corta papel", ""],
    ];

    var rfinal = game[maquina][persona];

    if(game[maquina][persona] == 1){
        puntU ++;
    } else if(game[maquina][persona]  == 2){
        puntCPU ++;
    }

  
    var ob = document.getElementById("opcionCPU");
    ob.src = ruta[maquina];
    document.getElementById("puntU").innerHTML = puntU;
    document.getElementById("puntCPU").innerHTML = puntCPU;
    
    if(puntCPU==3 || puntU==3){
        if(puntCPU>puntU){
            alert("Ganador: CPU, suerte para la proxima");
        }else{
            alert("Ganador: "+nombre+", muchas felicidades!!!");
        }               
        
        sal();
    }else{
        alert(resultado[rfinal] + "\n"+game_des[maquina][persona]);
        ob.src = "static/img/sig.png";
    }
}