var tabladata;
$(document).ready(function() { 
    buscaPostulant();    
    cargarModalidad();
    cargarAdmision();
    cargarCarrera();

    $('#idAgregarFicha').bootstrapValidator({		
		fields:{	
			postulante:{
				validators:{
 			 		notEmpty:{
 			 			message:'Campo Postulante es obligatorio.<br>'	
 			 		},
 			 		regexp:{
			 			regexp:/^[A-Z0-9\ ]{1,30}$/,
			 			message:'Seleccione un Postulante.<br>'
			 		}
 			 	}					
			},
			
			carrera:{
				validators:{
					notEmpty:{
						message:'Campo Carrera es obligatorio.<br>'
					},
 			 		regexp:{
			 			regexp:/^[A-Z0-9\ ]{1,30}$/,
			 			message:'Seleccione una Carrera.<br>'
			 		}
				}				
			},
			
			admision:{
				validators:{
					notEmpty:{
						message:'Campo Admisión es obligatorio.<br>'
					},
                    regexp:{
                       regexp:/^[A-Z0-9\ ]{1,30}$/,
                       message:'Seleccione una Admisión.<br>'
                   }
				}				
			},
            modalidad:{
				validators:{
					notEmpty:{
						message:'Campo Modalidad es obligatorio.<br>'
					},
                    regexp:{
                       regexp:/^[A-Z0-9\ ]{1,30}$/,
                       message:'Seleccione una Modalidad.<br>'
                   }
				}					
			}
		}		
	});

});

  function buscaPostulant(){       
    $.ajax({
        url:"https://verificacion-facial.herokuapp.com/api/v1/postulante/listado",
        type:"GET",
        datatype: "json",
        success:function(response){
                   $.each(response,function(index, fila){
                        $('#idpostu').append("<option value='"+fila.id+"'>"+fila.id+" | "+fila.name+" "+fila.lastName+"</opction>"); 
                        $('#idpostu').select2({dropdownParent: $('#idAgregarFicha')}); 
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
                    $('#idmodalidad').select2({dropdownParent: $('#idAgregarFicha')});
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
                    $('#idadmision').select2({dropdownParent: $('#idAgregarFicha')});
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
                    $('#idcarrera').select2({dropdownParent: $('#idAgregarFicha')});
                });
    }
}); 
}


//evento onclick al BOTON CANCELAR1
$(document).on("click","#idcancelar",function(){
    //reiniciar Validacion
    $("#idAgregarFicha").data("bootstrapValidator").resetForm(true);

    //limpiar controles 
    $("#idfichaa").trigger("reset"); 
    document.location.reload();  		
    $("#idcod").val("0");	
})



