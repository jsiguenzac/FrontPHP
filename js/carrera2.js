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
        {
            "data": "id", "render": function (data, type, row, meta) {
                return $("<button>").addClass("btn btn-info btn-editar btn-sm").append(
                    $("<i>").addClass("fas fa-eye")
                ).attr({ "data-informacion": JSON.stringify(row) })[0].outerHTML
                +
                $("<button>").addClass("btn btn-primary btn-editar btn-sm").append(
                    $("<i>").addClass("fas fa-pen")
                ).attr({ "data-informacion": JSON.stringify(row) })[0].outerHTML
                +
                $("<button>").addClass("btn btn-danger btn-eliminar btn-sm ms-2").append(
                    $("<i>").addClass("fas fa-trash")
                ).attr({ "data-informacion": JSON.stringify(row) })[0].outerHTML;
            }
        }
    ],
    "language": {
        "url": "//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json"
    }
    });
});