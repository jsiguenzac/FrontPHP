$(document).ready(function() { 
    buscaPostulant();
});

function buscaPostulant(){       
    $.ajax({
        url:"https://verificacion-facial.herokuapp.com/api/v1/postulante/listado",
        type:"GET",
        datatype: "json",
        success:function(response){
                   $.each(response,function(index, fila){
                        $('#idpostu').append("<option value='"+fila.id+"'>"+fila.id+" | "+fila.name+" "+fila.lastName+"</opction>"); 
                        $('#idpostu').select2(); 
                    });
        }
    }); 

}