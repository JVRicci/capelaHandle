
//carrega tabela doador
const listaDiz = $('#dizimistas tbody ');

const listaDizimista = $('#dizimistas tbody ');

var nomes = $('#dizimistas tbody').text();

var tabelaFull= []

$(listaDizimista).find('tr').each((index, tr)=>{

    tabelaFull.push('<tr><td>'+[$(tr).find('td:eq(0)').html()]+"</td>"+
    "<td>"+[$(tr).find('td:eq(1)').html()]+"</td>"+
    "<td>"+[$(tr).find('td:eq(2)').html()]+"</td>"+
    "<td>"+[$(tr).find('td:eq(3)').html()]+"</td>"+
    "<td>"+[$(tr).find('td:eq(4)').html()]+"</td>"+
    "<td>"+[$(tr).find('td:eq(5)').html()]+"</td></tr>")

})

//função de pesquisa
function pesquisar(elemento){

    var valElemento = elemento

    var nomes = $('#dizimistas tbody').text();
    
    var result= []

    $(listaDizimista).find('tr').each((index, tr)=>{

        var nomeAtual = $(tr).find('td:eq(2)').html().toLowerCase()
        if(nomeAtual.indexOf(elemento) != -1) {
        
            result.push('<tr><td>'+[$(tr).find('td:eq(0)').html()]+"</td>"+
            "<td>"+[$(tr).find('td:eq(1)').html()]+"</td>"+
            "<td>"+[$(tr).find('td:eq(2)').html()]+"</td>"+
            "<td>"+[$(tr).find('td:eq(3)').html()]+"</td>"+
            "<td>"+[$(tr).find('td:eq(4)').html()]+"</td>"+
            "<td>"+[$(tr).find('td:eq(5)').html()]+"</td></tr>")}
    })
    
    if(elemento==""){ 
        
        var dizimistaArray = result.filter((este,i)=>result.indexOf(este)===i)
        $('#dizimistas tbody').html(tabelaFull);
        
    }
    else{   
    $('#dizimistas tbody tr').html("");
    var dizimistaArray = result.filter((este,i)=>result.indexOf(este)===i)

    listaDiz.html(dizimistaArray)
    }
}


$('#salvar').on('click', ()=>{
    alert("ok")
})