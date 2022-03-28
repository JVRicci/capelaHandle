
function mascaraCpf(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }

 function mascaraCep(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "9");
    if (v.length == 5) i.value += "-";
 
 }

 function mascaraTelefone(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "9");
    //if (v.length < 0) i.value += "(";
    //if (v.length == 3) i.value += ")";
    if (v.length == 4) i.value += "-";
 }

 function mascaraCelular(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "10");
    //if (v.length < 0) i.value += "(";
    //if (v.length == 3) i.value += ")";
    if (v.length == 5) i.value += "-";
 }

 function numeroCasa() {
    const textoAtual = telefone.value;
    const textoAjustado = textoAtual.replace(/\-/g, '');

    telefone.value = textoAjustado;
}



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
