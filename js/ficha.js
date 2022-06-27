var tabladata;
$(document).ready(function() { 
    mostrarDatos();
    buscaPostulant(); cargarModalidad();
    cargarAdmision(); cargarCarrera();
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
			},
            monto:{
				validators:{
					notEmpty:{
						message:'Campo Monto es obligatorio.<br>'
					},
                    regexp:{
                      regexp:/^[0-9]{1,4}$/,
                      message:'Campo Monto máx. 4 dígitos<br> No acepta decimales'
                   }
				}					
			},
            noperacion:{
				validators:{
					notEmpty:{
						message:'Campo Nro Operación es obligatorio.<br>'
					},
                    regexp:{
                       regexp:/^[0-9]{1,5}$/,
                       message:'Campo Nro Operación máx 5 dígitos<br>'
                   }
				}					
			}
		}		
	});
tabladata = $('#tableFicha').DataTable({
        responsive:true,
        "ajax": {
            "url": 'https://verificacion-facial.herokuapp.com/api/v1/ficha/listado',
            "type": "GET",
            "datatype": "json",
            //para que liste papi
            "dataSrc": ""
        },
        "columns": [       
            { "data": "id" },
            { "data": "postulante" },
            { "data": "carrera" },
            { "data": "modalidad" },
            { "data": "admision" },
            {
                "data": "id", "render": function (data, type, row, meta) {
                    return $("<button>").addClass("btn btn-primary btn-editar btn-sm").append(
                        $("<i>").addClass("fas fa-pen").text("Editar")
                    ).attr({ "data-informacion": JSON.stringify(row) })[0].outerHTML
                    +" | "+
                    $("<button>").addClass("btn btn-danger btn-eliminar btn-sm ms-2").append(
                        $("<i>").addClass("fas fa-trash").text("Eliminar")
                    ).attr({ "data-informacion": JSON.stringify(row) })[0].outerHTML;
                }
            }
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json"
        }
        });
        


});

//
function Grabar(){
    var id = $("#idcod").val();    
    return id<=0 ? Guardar() : Editar();
}

// AGREGAR/ACTUALIZAR FICHA
function Guardar() {
    var postu = $("#idpostu").val();
    var carrera = $("#idcarrera").val();
    var admision = $("#idadmision").val();
    var modalidad = $("#idmodalidad").val();
    //var id = $("#id").val();
    if(postu > 0 && carrera > 0 && admision > 0 && modalidad > 0){
    var request = {
            estado:$("#idestado").val(),
            postu : $("#idpostu").val(),
            carrera : $("#idcarrera").val(),
            modalidad : $("#idmodalidad").val(),
            admision : $("#idadmision").val(),
            monto : $("#idmonto").val(),
            nroperacion : $("#idnroperacion").val(),

    }
    jQuery.ajax({
        url: 'https://verificacion-facial.herokuapp.com/api/v1/ficha/registrar',
        type: "POST",
        data: JSON.stringify(request),
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            if (data) { 
                swal("Éxito", "Se guardó correctamente", "success")
                //reiniciar Validacion
                $("#idAgregarFicha").data("bootstrapValidator").resetForm(true);
                $('#idAgregarFicha').modal('hide');
                $("#idfichaa").trigger("reset");		
                $("#idcod").val("0");		
                //tabladata.ajax.reload();
                document.location.href = "fichaPostulacion.php";
            } else {
                swal("Error", "No se pudo guardar la Ficha", "warning")
            }
        },
        error: function (error) {
            console.log(error)
        },
        beforeSend: function () {
			console.log(request)
        },
    });
}else{
    swal("ERROR!", "Ocurrió un error al grabar la ficha", "Error")
}

}





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






