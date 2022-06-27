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
            { "data": "monto" },
            { "data": "nroPago" },
            { "data": "estado" },
            { "data": "fechaRegistro" },
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

    /*EVENTO ONCLICK AL BTN-EDIT*/
    $(document).on("click",".btn-editar",function(){
        $("#idAgregarFicha").data("bootstrapValidator").resetForm(true);
        var nombre;
        nombre=$(this).parents("tr").find("td")[1].innerHTML;
        swal({
            title: "¿Seguro que desea editar "+nombre+"?",
            text: "Se actualizará de la lista",
            icon: "warning",
            dangerMode: true,
            buttons: true,
        })
            .then((willUpdate) => {
                if (willUpdate) {
                    var id,monto,nroPago,estado;
                    var row = $(this).closest('tr');
                    //obtener datos de las filas de la tabla
                    id = tabladata.row( row ).data().id;
                    //idPostulante = tabladata.row( row ).data().descripcion;
                    monto = tabladata.row( row ).data().monto;
                    nroPago = tabladata.row( row ).data().nroPago;
                    estado = tabladata.row( row ).data().estado;

                    //mostrar datos
                    //$("#idpostu").val(idPostulante);
                    //$("#idcarrera").val();
                    //$("#idmodalidad").val();
                    //$("#idadmision").val();
                    $("#idmonto").val(monto);
                    $("#idnoperacion").val(nroPago);
                    $("#idcod").val(id);
                    $("#idestado").val(estado);
                    $('#idAgregarFicha').modal('show'); //abrir modal
                }
            });
    })

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
    var modalidad = $("#idmodalidad").val();
    var admision = $("#idadmision").val();
    var monto = $("#idmonto").val();
    var operacion = $("#idnoperacion").val();
    //var id = $("#id").val();

    var request = {
            idPostulante:$("#idpostu").val(),
            idCarrera:$("#idcarrera").val(),
            idModalidad:$("#idmodalidad").val(),
            idAdmision:$("#idadmision").val(),
            monto:$("#idmonto").val(),
            nroPago:$("#idnoperacion").val(),
            estado:$("#idestado").val(),
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


}
function Editar() {
    var postu = $("#idpostu").val();
    var carrera = $("#idcarrera").val();
    var modalidad = $("#idmodalidad").val();
    var admision = $("#idadmision").val();
    var monto = $("#idmonto").val();
    var operacion = $("#idnoperacion").val();
    if(monto != "" && operacion !=""){
        var request = {
            id:$("#idcod").val(),
            idPostulante:$("#idpostu").val(),
            idCarrera:$("#idcarrera").val(),
            idModalidad:$("#idmodalidad").val(),
            idAdmision:$("#idadmision").val(),
            monto:$("#idmonto").val(),
            nroPago:$("#idnoperacion").val(),
            estado:$("#idestado").val(),
        }
        $.ajax({
            url: 'https://verificacion-facial.herokuapp.com/api/v1/ficha/actualizar/'+request.id,
            type: "PUT",
            data: JSON.stringify(request),
            setTimeout:0,
            contentType: "application/json; charset=utf-8",
            success: function (data) {

                if (data) {
                    swal("Éxito", "Se actualizó correctamente", "success")
                    //reiniciar Validacion
                    $("#idAgregarFicha").data("bootstrapValidator").resetForm(true);
                    $('#idAgregarFicha').modal('hide');
                    $("#idfichaa").trigger("reset");
                    $("#idcod").val("0");
                    tabladata.ajax.reload();
                } else {
                    swal("Error", "No se pudo actualizar", "warning")
                }
            },
            error: function (error) {
                console.log(error);
            },
            beforeSend: function () {
                console.log(request)
            }
        });
    }
}









/*EVENTO ONCLICK AL BTN-eliminar*/
$(document).on("click",".btn-eliminar",function(){
    var cod, nombre;
    //obtener datos de las filas de la tabla
    cod=$(this).parents("tr").find("td")[0].innerHTML;
    nombre=$(this).parents("tr").find("td")[1].innerHTML;
    swal({
        title: "¿Seguro que desea eliminar "+nombre+"?",
        text: "Se quitará de la lista",
        icon: "warning",
        dangerMode: true,
        buttons: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                var row = $(this).closest('td');
                var row1 = tabladata.row( row ).length;
                console.log(cod)
                $.ajax({
                    url:"https://verificacion-facial.herokuapp.com/api/v1/ficha/eliminar/"+cod,
                    type:"DELETE",
                    success:function(){
                        swal("Ok","Se eliminó correctamente!","success").then(function(){
                            if(row1<=1){
                                document.location.href = "fichaPostulacion.php";
                            }else
                                tabladata.ajax.reload();
                        });
                    }
                });
            }
        });
})





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
    $("#idcod").val("0");	
})






