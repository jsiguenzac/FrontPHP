var tabladata;
$(document).ready(function() {    
    $('#idAgregarModa').bootstrapValidator({		
		fields:{	
			descripcion:{
				validators:{
 			 		notEmpty:{
 			 			message:'Campo Modalidad es obligatorio.<br>'
 			 		},
 			 		regexp:{
                        regexp:/^[A-Z0-9\Ñ\Á\É\Í\Ó\Ú\@\_\''\""\-\*\+\!\¿\?\¡\(\)\·\$\#\|\´\/\.\{\}\=\Ä\Ë\Ï\Ö\Ü\%\[\]\<\,\>\ ]{1,50}$/,
                        message:'Campo Modalidad máx. 50 caracteres.<br> Solo mayúsculas'
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
        "url": 'https://verificacion-facial.herokuapp.com/api/v1/modalidad/listado',
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
    mostrarDatos();
  /*EVENTO ONCLICK AL BTN-EDIT*/
  $(document).on("click",".btn-editar",function(){
    $("#idAgregarModa").data("bootstrapValidator").resetForm(true);
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
            var id,descripcion,estado;
            var row = $(this).closest('tr');

        id = tabladata.row( row ).data().id;
        descripcion = tabladata.row( row ).data().descripcion;
        estado = tabladata.row( row ).data().estado;
            //mostrar datos 
            $("#idcod").val(id);
            $("#iddescripcion").val(descripcion);
            $("#idestado").val(estado);
            $('#idAgregarModa').modal('show'); //abrir modal
        }
    }); 
    
})

});

//
function Grabar(){
    var id = $("#idcod").val();    
    return id<=0 ? Guardar() : Editar();
}

// AGREGAR/ACTUALIZAR ADMISION
function Guardar() {
    var nombre=$("#iddescripcion").val();
    if(nombre != "" ){
    var request = {
            id:$("#idcod").val(),
            descripcion:$("#iddescripcion").val(),
            estado:$("#idestado").val()
    }
    jQuery.ajax({
        url: 'https://verificacion-facial.herokuapp.com/api/v1/modalidad/registrar',
        type: "POST",
        data: JSON.stringify(request),
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            if (data) { 
                swal("Éxito", "Se guardó correctamente", "success")
                //reiniciar Validacion
                $("#idAgregarModa").data("bootstrapValidator").resetForm(true);
                $('#idAgregarModa').modal('hide');
                $("#idmodalidad").trigger("reset");		
                $("#idcod").val("0");		
                //tabladata.ajax.reload();
                document.location.href = "modalidad.php";
            } else {
                swal("Error", "No se pudo guardar la modalidad", "warning")
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

function Editar() {
    var id=$("#idcod").val();
    var nombre=$("#iddescripcion").val();
    if(nombre !="" ){
    var request = {
            id:$("#idcod").val(),
            descripcion:$("#iddescripcion").val(),
            estado:$("#idestado").val()
    }
    $.ajax({
        url: 'https://verificacion-facial.herokuapp.com/api/v1/modalidad/actualizar/'+id,      
        type: "PUT",
        data: JSON.stringify(request),
        setTimeout:0,
        contentType: "application/json; charset=utf-8",        
        success: function (data) {
           
            if (data) { 
                swal("Éxito", "Se actualizó correctamente", "success")
                //reiniciar Validacion
                $("#idAgregarModa").data("bootstrapValidator").resetForm(true);
                $('#idAgregarModa').modal('hide');
                $("#idmodalidad").trigger("reset");		
                $("#idcod").val("0");		
                document.location.href = "modalidad.php";              
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
            row1 = tabladata.row( row ).length;
            $.ajax({
                url:"https://verificacion-facial.herokuapp.com/api/v1/modalidad/eliminar/"+cod,
                type:"DELETE",
                success:function(){
                    swal("Ok","Se eliminó correctamente!","success").then(function(){
                        if(row1<=1){
                            document.location.href = "modalidad.php";
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