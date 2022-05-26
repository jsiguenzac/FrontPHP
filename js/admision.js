var tabladata;
$(document).ready(function() {    
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
                return $("<button onclick='editaAdmision()'>").addClass("btn btn-primary btn-editar btn-sm").append(
                    $("<i>").addClass("fas fa-pen").text("Editar")
                ).attr({ "data-informacion": JSON.stringify(row) })[0].outerHTML
                +" | "+
                $("<button onclick='eliminaAdmision()'>").addClass("btn btn-danger btn-eliminar btn-sm ms-2").append(
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

// AGREGAR ADMISION
function RegistrarAdmision() {
    var request = {
        descripcion:$("#iddescripcion").val(),
        estado:$("#idestado").val(),
        //area:$("#idarea").val()
    }
    console.log(request)
    jQuery.ajax({
        url: 'http://localhost:8081/api/v1/admision/registrar',
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


function editaAdmision() {
$('#idAgregarAdm').modal('show')
}