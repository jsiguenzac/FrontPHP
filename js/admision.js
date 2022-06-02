var tabladata;
$(document).ready(function() {    
    $('#idAgregarAdm').bootstrapValidator({
        fields:{
            descripcion:{
                validators:{
                    notEmpty:{
                        message:'Campo Nombre es obligatorio.<br>'	
                    },
                    regexp:{
                      regexp:/^[a-zA-ZÁ-ÿ\s]{1,20}$/,
                      message:'Campo Nombre máx. 20 caracteres.<br>'
                   }
                }				
            },

            estado:{
                validators:{
                    notEmpty:{
                        message:'Campo Estado es obligatorio.<br>'
                    },
                    Regexp:{
                        Regexp:/^[a-zA-Z0-9\ ]{2,15}$/,
                        message:'Seleccione un Estado.<br>'
                    }
                }

            },
        }
    })
tabladata = $('#tableAdmision').DataTable({
    responsive:true,
    "ajax": {
        "url": 'http://localhost:8081/api/v1/admision/listado',
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
    $("#idAgregarAdm").data("bootstrapValidator").resetForm(true);
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
            $('#idAgregarAdm').modal('show'); //abrir modal
        }
    }); 
    
})

});

/*AGREGAR/ACTUALIZAR ADMISION*/
function Guardar() {
    var nombre=$("#iddescripcion").val();
    if(nombre !="" ){
    var request = {
            id:$("#idcod").val(),
            descripcion:$("#iddescripcion").val(),
            estado:$("#idestado").val()
    }
    jQuery.ajax({
        url: 'http://localhost:8081/api/v1/admision/registrar',
        type: "POST",
        data: JSON.stringify(request),
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            if (data) { 
                swal("Exito", "Se guardo correctamente", "success")
                $('#idAgregarAdm').modal('hide');
                $("#idadmision").trigger("reset");		
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
                url:"http://localhost:8081/api/v1/admision/eliminar/"+cod,
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
    $("#idAgregarAdm").data("bootstrapValidator").resetForm(true);

    //limpiar controles
    $("#idadmision").trigger("reset");		
    $("#idcod").val("0");			
        
})