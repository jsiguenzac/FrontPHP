// LISTAR CARRERA
var tabladata;
$(document).ready(function() {
    $('#idAgregarCar').bootstrapValidator({		
		fields:{	
			descripcion:{
				validators:{
 			 		notEmpty:{
 			 			message:'Campo Usuario es obligatorio.<br>'	
 			 		},
 			 		regexp:{
                        regexp:/^[a-zA-Z0-9\ñ\Ñ\á\é\í\ó\ú\Á\É\Í\Ó\Ú\@\_\''\""\-\*\+\!\¿\?\¡\(\)\·\$\#\|\´\/\.\{\}\=\Ä\Ë\Ï\Ö\Ü\ä\ë\ï\ö\ü\%\[\]\<\,\>\ ]{1,20}$/,
                        message:'Campo Usuario máx. 20 caracteres.<br>'
			 		}
 			 	}					
			},
			
			estado:{
				validators:{
					notEmpty:{
						message:'Campo Estado es obligatorio.<br>'
					},
 			 		regexp:{
			 			regexp:/^[a-zA-Z0-9\ ]{2,15}$/,
			 			message:'Seleccione un Estado.<br>'
			 		}
				}				
			},
						
			area:{
				validators:{
					notEmpty:{
						message:'Campo Área es obligatorio.<br>'
					},
 			 		regexp:{
			 			regexp:/^[0-9]{1,2}$/,
			 			message:'Seleccione una Área.<br>'
			 		}
				}					
			}
			
		}		
	});	
    
tabladata = $('#tableCarrera').DataTable({
    responsive:true,
    "ajax": {
        "url": 'http://localhost:8081/api/v1/carrera/listado',
        "type": "GET",
        "datatype": "json",
        //para que liste papi
        "dataSrc": ""
    },
    "columns": [
        { "data": "id" },
        { "data": "descripcion" },
        { "data": "estado" },
        { "data": "area.id", visible: false, searchseable: true},
        { "data": "area.descripcion" },
        {
            "data": "id", "render": function (data, type, row, meta) {
                return $("<button>").addClass("btn btn-primary btn-editar btn-sm").append(
                    $("<i>").addClass("fas fa-pen").text("Editar")
                ).attr({"data-informacion": JSON.stringify(row) })[0].outerHTML
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
    loadCombo();
        /*EVENTO ONCLICK AL BTN-EDIT*/
    $(document).on("click",".btn-editar",function(){
        $("#idAgregarCar").data("bootstrapValidator").resetForm(true);
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
                var id,descripcion,estado, areaid;
                var row = $(this).closest('tr');
                //obtener datos de las filas de la tabla
                id = tabladata.row( row ).data().id;
                descripcion = tabladata.row( row ).data().descripcion;
                estado = tabladata.row( row ).data().estado;
                areaid = tabladata.row( row ).data().area.id;
                
                //mostrar datos 
                $("#idcod").val(id);
                $("#iddescripcion").val(descripcion);
                $("#idestado").val(estado);
                $("#idarea").val(areaid);
                $('#idAgregarCar').modal('show'); //abrir modal      
            }
        }); 
    })

});

// AGREGAR/ACTUALIZAR CARRERAS
function Guardar() {	
    var nombre=$("#iddescripcion").val();
    var est=$("#idestado").val();
    var are=$("#idarea").val();
    if(nombre != "" && est !="" && are !=""){
    var request = {
            id:$("#idcod").val(),
            descripcion:$("#iddescripcion").val(),
            estado:$("#idestado").val(),
            areaid:$("#idarea").val()
    }
    jQuery.ajax({
        url: 'http://localhost:8081/api/v1/carrera/registrar/area/'+request.areaid,
        type: "POST",
        data: JSON.stringify(request),
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            if (data) {
                swal("Exito", "Se guardo correctamente", "success")
                //reiniciar Validacion
                $("#idAgregarCar").data("bootstrapValidator").resetForm(true);
                $('#idAgregarCar').modal('hide');
                $("#idcarreras").trigger("reset");		
                $("#idcod").val("0");		
                tabladata.ajax.reload();
            } else {
                swal("Error", "No se pudo guardar los cambios", "warning")
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
                $.ajax({
                    url:"http://localhost:8081/api/v1/carrera/eliminar/"+cod,
                    type:"DELETE",
                    success:function(){
                        swal("Ok","Se eliminó correctamente!","success").then(function(){
                            tabladata.ajax.reload();
                        });
                    }
                });             
        }
    });
})

//evento onclick al BOTON CANCELAR1
$(document).on("click","#idcancelar",function(){
    //reiniciar Validacion
   $("#idAgregarCar").data("bootstrapValidator").resetForm(true);

    //limpiar controles
    $("#idcarreras").trigger("reset");		
    $("#idcod").val("0");			
        
})

function loadCombo(){     
    $.ajax({
    url:"http://localhost:8081/api/v1/area/listado",
    type:"GET",
    datatype: "json",
    success:function(response){
               $.each(response,function(index, fila){
                    $('#idarea').append("<option value='"+fila.id+"'>"+fila.descripcion+"</opction>")
                    //$('#idarea').select2();
                });
    }
}); 
}



