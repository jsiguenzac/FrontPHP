// LISTAR CARRERA
var tabladata;
$(document).ready(function() {    
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
        { "data": "area.descripcion" },
        {
            "data": "id", "render": function (data, type, row, meta) {
                return $("<button onclick='validaPostulante()'>").addClass("btn btn-info btn-valida btn-sm").append(
                    $("<i>").addClass("fas fa-eye").text("Validar")
                ).attr({ "data-informacion": JSON.stringify(row) })[0].outerHTML
                +" | "+
                $("<button onclick='editaCarrera()'>").addClass("btn btn-primary btn-editar btn-sm").append(
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

// AGREGAR CARRERAS
function RegistrarCarreras() {
    var request = {
        descripcion:$("#iddescripcion").val(),
        estado:$("#idestado").val(),
        //area:$("#idarea").val()
    }
    console.log(request)
    jQuery.ajax({
        url: 'http://localhost:8081/api/v1/carrera/registrar/area/1',
        type: "POST",
        data: JSON.stringify(request),
        //el tipo de dato que devolvera el servidor 
        //dataType: "string",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log("datos recibidos: "+data)
            if (data) {
                console.log(data.descripcion)
                document.location.href = "carrera.php";                
            //$('#mensaje').addClass('alert alert-dark').html('📧Revisa tu correo para confirmar tu cuenta...')

            } else {
                console.log("No se pudo guardar los cambios");
            }
        },
        error: function (error) {
            console.log("mando error"+error);
            //$.LoadingOverlay("hide");
        }
    });

}
// EDITAR CARRERA
function editaCarrera() {
$('#idAgregarCar').modal('show')
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
                        window.location="carrera.php";
                    });
                }
            });       
        } 
    });
})