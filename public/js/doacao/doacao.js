
function exibeDoacao(){

};


function carregaId(elemento){
    var colunaDoador = $('#'+elemento);
    var linhaDoador = $('#doacao-table').find('tr:eq('+elemento+')').text();
    alert(linhaDoador);

    $('#doadorIdTxt').val(elemento)
    $('#doadorSel'+elemento).prop('checked',true);

    $('#doacao-table tbody tr').css( "display","none");
    colunaDoador.css("display","table-row")
    
};