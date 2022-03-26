$('#dizimistas tbody').on('click',()=>{
    var nome = $(this).closest('tr').find('td:eq(0)').text();
    alert(nome)
    //$("#dizimosTitulo").append(" Juaum")
})

$('#salvar').on('click', ()=>{
    alert("ok")
})