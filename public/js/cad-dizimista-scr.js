

function carregaDiv(){

    var estado = document.getElementByName("estado-civil");
    var divCasa = document.getElementsByClassName("div-casamento");

    estado.addEventListener('change', ()=>{
        var result =document.querySelector('.result');
        divCasa.style.display = "inline";
    });

}

