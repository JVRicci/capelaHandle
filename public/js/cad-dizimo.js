var linha = $('#tabela-dizimo').length;

var semResult = '<tr><td></td><td>Nenhum registro</td></tr>'

if(linha ==1){
    $('#tabela-dizimo').append(semResult);
}
else{
}

$("#salvar").on('click', ()=>{
    if($('valorTxt').text()!="" && $('data').text()!="dd/mm/aaaa")
    alert("Dizimo registrado com sucesso!")
})


