var i = setInterval(()=>{

    clearInterval(i);
    
    let corpo = document.getElementsByClassName("paginaDiv")[0];
    let loadDiv = document.getElementsByClassName("loading")[0];

    
    loadDiv.style.display = "none";
    corpo.style.display = "block";
    
},2000);
