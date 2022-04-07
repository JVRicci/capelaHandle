
function exibeDoacao(){

};


function carregaId(elemento){
    var colunaDoador = $('#'+elemento);
    var linhaDoador = $('#doacao-table tr').find('td:eq(0)').text();
    //var linhaDoador = $('#doacao-table').rows
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

    //colunaDoador.css("display","table-row")

     
};