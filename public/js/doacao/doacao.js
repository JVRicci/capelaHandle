//carrega tabela doador
const listaDoa = $('#doador-table tbody ');

const listaDoador = $('#doador-table tbody ');

var nomes = $('#doador-table tbody').text();

var tabelaFull= []

$(listaDoador).find('tr').each((index, tr)=>{

    tabelaFull.push('<tr onclick="carregaId('+[$(tr).find('td:eq(1)').html()]
    +')"><td>'+[$(tr).find('td:eq(0)').html()]+"</td>"+
    "<td>"+[$(tr).find('td:eq(1)').html()]+"</td>"+
    "<td>"+[$(tr).find('td:eq(2)').html()]+"</td></tr>")

})

//função de pesquisa
function pesquisar(elemento){

    var valElemento = elemento

    var nomes = $('#doador-table tbody').text();
    
    var result= []

    $(listaDoador).find('tr').each((index, tr)=>{

        var nomeAtual = $(tr).find('td:eq(2)').html().toLowerCase()
        if(nomeAtual.indexOf(elemento) != -1) {
        
            result.push('<tr onclick="carregaId('+[$(tr).find('td:eq(1)').html()]
            +')"><td>'+[$(tr).find('td:eq(0)').html()]+"</td>"+
            "<td>"+[$(tr).find('td:eq(1)').html()]+"</td>"+
            "<td>"+[$(tr).find('td:eq(2)').html()]+"</td></tr>")}
    })
    
    if(elemento==""){ 
        
        var doadorArray = result.filter((este,i)=>result.indexOf(este)===i)
        $('#doador-table tbody').html(tabelaFull);
        
    }
    else{   
    $('#doador-table tbody tr').html("");
    var doadorArray = result.filter((este,i)=>result.indexOf(este)===i)

    listaDoa.html(doadorArray)
    }
}




//carrega doações

function carregaId(elemento){
    var lista= $('#doacao-table tbody')

    let doacaofull = []
    let doacaoDoador = []

    $(lista).find("tr").each((index, tr)=>{
        doacaofull.push([[$(tr).find('td:eq(0)').html()],
                        [$(tr).find('td:eq(1)').html()],
                        [$(tr).find('td:eq(2)').html()],
                        [$(tr).find('td:eq(3)').html()],
                        [$(tr).find('td:eq(4)').html()]],)
        
       
        if(doacaofull[index][0] == elemento){

            doacaoDoador.push("<tr><td>"+[$(tr).find('td:eq(0)').html()]+"</td>"+
            "<td>"+[$(tr).find('td:eq(1)').html()]+"</td>"+
            "<td>"+[$(tr).find('td:eq(2)').html()]+"</td>"+
            "<td>"+[$(tr).find('td:eq(3)').html()]+"</td>"+
            "<td>"+[$(tr).find('td:eq(4)').html()]+"</td></tr>")
        }
     });

    $('#doacao-table tbody tr').css( "display","none");

    var doacaoArray = doacaoDoador.filter((este,i)=>doacaoDoador.indexOf(este)===i)
    $('#doacao-table tbody').append(doacaoArray)

    $('#doadorIdTxt').val(elemento)
    $('#doadorSel'+elemento).prop('checked',true);

     
};
