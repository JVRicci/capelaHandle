
$(document).ready(function(){
    $('#valorTxt').mask('000.000.000.000.000,00', {reverse: true});
});     



$("#salvar").on('click', ()=>{
    if($('valorTxt').text()!="" && $('data').text()!="dd/mm/aaaa")
    alert("Dizimo registrado com sucesso!")
})
