var tabladata;
$(document).ready(function() {    
    $('#idAgregarModa').bootstrapValidator({		
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
			}
        }       
    });
tabladata = $('#tableModalidad').DataTable({
    responsive:true,
    "ajax": {
        "url": 'http://localhost:8081/api/v1/modalidad/listado',
        "type": "GET",
        "datatype": "json",
        //para que liste papi
        "dataSrc": ""
    },
    "columns": [       
        { "data": "id" },
        { "data": "descripcion" },
        { "data": "estado" },
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
    $("#idAgregarModa").data("bootstrapValidator").resetForm(true);
    var nombre, estado;
    nombre=$(this).parents("tr").find("td")[1].innerHTML;
    estado=$(this).parents("tr").find("td")[2].innerHTML;
    swal({
        title: "¿Seguro que desea editar "+nombre+"?",
       text: "Se actualizará de la lista",
        icon: "warning",        
        dangerMode: true,
        buttons: true,
    })
    .then((willUpdate) => {        
        if (willUpdate) {           
            var id,descripcion,estado;
            var row = $(this).closest('tr');

        id = tabladata.row( row ).data().id;
        descripcion = tabladata.row( row ).data().descripcion;
        estado = estado;
            //mostrar datos 
            $("#idcod").val(id);
            $("#iddescripcion").val(descripcion);
            $("#idestado").val(estado);
            $('#idAgregarModa').modal('show'); //abrir modal
        }
    }); 
    
})

});

/*AGREGAR/ACTUALIZAR MODALIDAD*/
function Guardar() {
    var nombre=$("#iddescripcion").val();
    if(nombre != "" ){
    var request = {
            id:$("#idcod").val(),
            descripcion:$("#iddescripcion").val(),
            estado:$("#idestado").val()
    }
    jQuery.ajax({
        url: 'http://localhost:8081/api/v1/modalidad/registrar',
        type: "POST",
        data: JSON.stringify(request),
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            if (data) { 
                swal("Exito", "Se guardo correctamente", "success")
                //reiniciar Validacion
                $("#idAgregarModa").data("bootstrapValidator").resetForm(true);
                $('#idAgregarModa').modal('hide');
                $("#idmodalidad").trigger("reset");		
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
            var row = $(this).closest('td');            
            row1 = tabladata.row( row ).length;
            $.ajax({
                url:"http://localhost:8081/api/v1/modalidad/eliminar/"+cod,
                type:"DELETE",
                success:function(){
                    swal("Ok","Se eliminó correctamente!","success").then(function(){
                        if(row1<=1){
                            document.location.href = "admision.php";
                        }else
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
    $("#idAgregarModa").data("bootstrapValidator").resetForm(true);

    //limpiar controles
    $("#idmodalidad").trigger("reset");		
    $("#idcod").val("0");			
        
})