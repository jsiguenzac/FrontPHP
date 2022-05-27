// LISTAR CARRERA
var tabladata;
$(document).ready(function() {    
tabladata = $('#tablePostulante').DataTable({
    responsive:true,
    "ajax": {
        "url": 'http://localhost:8081/api/v1/postulante/listado',
        "type": "GET",
        "datatype": "json",
        //para que liste papi
        "dataSrc": ""
    },
    "columns": [
        { "data": "id" },
        { "data": "name" },
        { "data": "lastName" },
        { "data": "email" },
        { "data": "phone" },
        { "data": "imageUrl" },
        { "data": "studentId", visible: false, searchseable: true},
        {
            "data": "id", "render": function (data, type, row, meta) {
                return $("<button onclick='validaPostulante()'>").addClass("btn btn-info btn-valida btn-sm").append(
                    $("<i>").addClass("fas fa-eye").text("Validar")
                ).attr({ "data-informacion": JSON.stringify(row) })[0].outerHTML
                +" | "+
                $("<button>").addClass("btn btn-primary btn-editar btn-sm").append(
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

    ////////////FALTA IMpl
        /*EVENTO ONCLICK AL BTN-EDIT*/ 
    $(document).on("click",".btn-editar",function(){
        var id,name,lastName, email,phone,imageUrl,studentId;
        var row = $(this).closest('tr');
        //obtener datos de las filas de la tabla
       id = tabladata.row( row ).data().id;
       name = tabladata.row( row ).data().name;
       lastName = tabladata.row( row ).data().lastName;
       email = tabladata.row( row ).data().email;
       phone = tabladata.row( row ).data().phone;
       imageUrl = tabladata.row( row ).data().imageUrl;
       studentId = tabladata.row( row ).data().studentId;


        //mostrar datos 
        $("#idcod").val(id);
        $("#iddescripcion").val(name);
        $("#idestado").val(lastName);
        $("#idarea").val(email);
        $("#idarea").val(phone);
        $("#idarea").val(imageUrl);
        $("#idarea").val(studentId);
        $('#idAgregarPos').modal('show'); //abrir modal
    })

});

// AGREGAR/ACTUALIZAR POSTULANTES
function Guardar() {
    var request = {
            id:$("#idcod").val(),
            descripcion:$("#iddescripcion").val(),
            estado:$("#idestado").val()
    }
    jQuery.ajax({
        url: 'http://localhost:8081/api/v1/postulante/registrar',
        type: "POST",
        data: JSON.stringify(request),
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            if (data) {
                tabladata.ajax.reload();
                
                swal("Exito", "Se guardo la correctamente", "success")
                $('#idAgregarPos').modal('hide');
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
                    url:"http://localhost:8081/api/v1/postulante/eliminar/"+cod,
                    type:"DELETE",
                    success:function(){
                        swal("Ok","Se eliminó correctamente!","success").then(function(){
                            window.location="postulante.php";
                        });
                    }
                });             
        }
    });
})

//evento onclick al BOTON CANCELAR1
$(document).on("click","#idcancelar",function(){
    //reiniciar Validacion
   // $("#idpostulantes").data("bootstrapValidator").resetForm(true);

    //limpiar controles
    $("#idpostulantes").trigger("reset");		
    $("#idcod").val("0");			
        
})





