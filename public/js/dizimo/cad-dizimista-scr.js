


function carregaDiv(){

    var estado = document.getElementById("estado-civil");
    var divCasa = document.getElementsByClassName("div-casamento")[0];

    estado.addEventListener('change', ()=>{
        if(estado.value=="nulo" || estado.value=='solteiro'){
            divCasa.style.display = "none";
        }
        else{
            divCasa.style.display = "inline";
        }
    },false);

}



carregaDiv()
