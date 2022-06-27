var tabladata;
$(document).ready(function() { 
    $('#idmodalidad').select2({dropdownParent: $('#idAgregarFicha')});
    $('#idpostu').select2({dropdownParent: $('#idAgregarFicha')});
    $('#idadmision').select2({dropdownParent: $('#idAgregarFicha')});
    $('#idcarrera').select2({dropdownParent: $('#idAgregarFicha')});
    cargarModalidad(); cargarPostulant(); 
    cargarAdmision(); cargarCarrera();
    mostrarDatos();    
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
            { "data": "idPostulante", visible: false, searchseable: true},
            { "data": "idModalidad", visible: false, searchseable: true},
            { "data": "idAdmision", visible: false, searchseable: true}, 
            { "data": "idCarrera", visible: false, searchseable: true}, 
            { "data": "nombrePostulante" },           
            { "data": "nombreModalidad" },
            { "data": "nombreAdmision" },
            { "data": "nombreCarrera" },
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
                    var id,postulante,modalidad,admision,carrera,monto,nroPago,estado;
                    var row = $(this).closest('tr');

                    //obtener datos de las filas de la tabla
                    id = tabladata.row( row ).data().id;
                    postulante = tabladata.row( row ).data().idPostulante;
                    modalidad = tabladata.row( row ).data().idModalidad;
                    admision = tabladata.row( row ).data().idAdmision;
                    carrera = tabladata.row( row ).data().idCarrera;
                    monto = tabladata.row( row ).data().monto;
                    nroPago = tabladata.row( row ).data().nroPago;
                    estado = tabladata.row( row ).data().estado;
                    //console.log(row)
                    //console.log(modalidad)

                    //mostrar datos
                    $("#idcod").val(id);
                    $("#idpostu").val(postulante);
                    $("#idmodalidad").val(modalidad);
                    $("#idadmision").val(admision);
                    $("#idcarrera").val(carrera);
                    $("#idmonto").val(monto);
                    $("#idnoperacion").val(nroPago);
                    $("#idestado").val(estado);
                    cargarModalidad(modalidad);
                    cargarPostulant(postulante);
                    cargarAdmision(admision);
                    cargarCarrera(carrera);
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
                    document.location.reload();
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

function cargarPostulant(postulante){       
    $.ajax({
        url:"https://verificacion-facial.herokuapp.com/api/v1/postulante/listado",
        type:"GET",
        datatype: "json",
        success:function(response){
            $('#idpostu option').remove();
            $('#idpostu').append("<option value='-1'>[SELECIONE]</opction>")
                   $.each(response,function(index, fila){
                    if(postulante == fila.id){ 
                        $('#idpostu').append("<option value='"+fila.id+"'selected>"+fila.id+" | "+fila.name+" "+fila.lastName+"</opction>"); 
                    }else{
                        //
                        $('#idpostu').append("<option value='"+fila.id+"'>"+fila.id+" | "+fila.name+" "+fila.lastName+"</opction>"); 
                    }
                });
        }
    }); 
}

function cargarModalidad(modalidad){
    $.ajax({
    url:"https://verificacion-facial.herokuapp.com/api/v1/modalidad/listado",
    type:"GET",
    datatype: "json",
    success:function(response){       
            console.log( "Valoooor: "+modalidad)
            $('#idmodalidad option').remove();
            $('#idmodalidad').append("<option value='-1'>[SELECIONE]</opction>")
                $.each(response,function(index, fila){                    
                    if(modalidad == fila.id){ 
                            $('#idmodalidad').append("<option value='"+fila.id+"' selected>"+fila.descripcion+"</option>")
                            //$('#idmodalidad').select2({dropdownParent: $('#idAgregarFicha')});
                    }else{ 
                        //                       
                        $('#idmodalidad').append("<option value='"+fila.id+"'>"+fila.descripcion+"</option>")                        
                    }
                });
           
                
    }
}); 
}

function cargarAdmision(admision){     
    $.ajax({
    url:"https://verificacion-facial.herokuapp.com/api/v1/admision/listado",
    type:"GET",
    datatype: "json",
    success:function(response){
            $('#idadmision option').remove();
            $('#idadmision').append("<option value='-1'>[SELECIONE]</opction>")
               $.each(response,function(index, fila){
                    if(admision == fila.id){
                        $('#idadmision').append("<option value='"+fila.id+"'selected>"+fila.descripcion+"</opction>")
                    }else{
                        //
                        $('#idadmision').append("<option value='"+fila.id+"'>"+fila.descripcion+"</opction>")
                    }
                });
    }
}); 
}

function cargarCarrera(carrera){     
    $.ajax({
    url:"https://verificacion-facial.herokuapp.com/api/v1/carrera/listado",
    type:"GET",
    datatype: "json",
    success:function(response){
            $('#idcarrera option').remove();
            $('#idcarrera').append("<option value='-1'>[SELECIONE]</opction>")
               $.each(response,function(index, fila){
                    if(carrera == fila.id){
                        $('#idcarrera').append("<option value='"+fila.id+"' selected>"+fila.descripcion+"</opction>")
                        //$('#idcarrera').select2({dropdownParent: $('#idAgregarFicha')});
                    }else{
                        //
                        $('#idcarrera').append("<option value='"+fila.id+"'>"+fila.descripcion+"</opction>")                        
                    }
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
    //$('#idmodalidad').val("-1");
    $("#idcod").val("0");	
})






