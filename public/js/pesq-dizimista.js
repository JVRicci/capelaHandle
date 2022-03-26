function nomeDizimista(){
    let tabela = document.getElementsByTagName("tbody");
    console.log(tabela.childNodes);
    
    tabela.addEventListener('click',()=>{
        let nome = this.find(':nth-child(1)').text();
        console.log(nome)
    },false)
}
