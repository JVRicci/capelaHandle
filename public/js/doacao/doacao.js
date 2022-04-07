
const listaDoa = $('#doador-table tbody ');

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




//função de pesquisa
function pesquisar(elemento){

    var valElemento = elemento

    var nomes = $('#doador-table tbody').text();
    

    var result= []

    $(listaDoa).find('tr').each((index, tr)=>{

        var nomeAtual = $(tr).find('td:eq(2)').html().toLowerCase()
        if(nomeAtual.indexOf(elemento) != -1) {
        
            result.push('<tr onclick="carregaId('+[$(tr).find('td:eq(1)').html()]
            +')"><td>'+[$(tr).find('td:eq(0)').html()]+"</td>"+
            "<td>"+[$(tr).find('td:eq(1)').html()]+"</td>"+
            "<td>"+[$(tr).find('td:eq(2)').html()]+"</td></tr>")}


    })

    
    if(elemento==""){ 
        
        var doadorArray = result.filter((este,i)=>result.indexOf(este)===i)
        $('#doador-table tbody tr').html(listaDoa);
        

    }
    else{   
    $('#doador-table tbody tr').css( "display","none");

    var doadorArray = result.filter((este,i)=>result.indexOf(este)===i)

    listaDoa.html(doadorArray)
    }

}

