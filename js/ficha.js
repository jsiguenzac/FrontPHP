$(document).ready(function() { 
    buscaPostulant();
});

cargarModalidad();
cargarAdmision();
cargarCarrera();

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

function cargarModalidad(){     
    $.ajax({
    url:"https://verificacion-facial.herokuapp.com/api/v1/modalidad/listado",
    type:"GET",
    datatype: "json",
    success:function(response){
               $.each(response,function(index, fila){
                    $('#idmodalidad').append("<option value='"+fila.id+"'>"+fila.descripcion+"</opction>")
                });
    }
}); 
}

function cargarAdmision(){     
    $.ajax({
    url:"https://verificacion-facial.herokuapp.com/api/v1/admision/listado",
    type:"GET",
    datatype: "json",
    success:function(response){
               $.each(response,function(index, fila){
                    $('#idadmision').append("<option value='"+fila.id+"'>"+fila.descripcion+"</opction>")
                });
    }
}); 
}

function cargarCarrera(){     
    $.ajax({
    url:"https://verificacion-facial.herokuapp.com/api/v1/carrera/listado",
    type:"GET",
    datatype: "json",
    success:function(response){
               $.each(response,function(index, fila){
                    $('#idcarrera').append("<option value='"+fila.id+"'>"+fila.descripcion+"</opction>")
                });
    }
}); 
}