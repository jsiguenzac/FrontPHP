
function tableParse(tableName) {
    let $avisoTable = $("#" + tableName).DataTable({
        bLengthChange: false,
        buttons: [
            'copy',
            'excel',
            'csv',
            'pdf'
        ],
        destroy: true,
        info: false,
        sDom: '<"row view-filter"<"col-sm-12"<"float-left"l><"float-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
        pageLength: 10,
        language: {
            paginate: {
                previous: "<i class='simple-icon-arrow-left'></i>",
                next: "<i class='simple-icon-arrow-right'></i>"
            }
        },
        drawCallback: function () {

            $("#checkAllDataTables").prop("checked", false);
            $("#checkAllDataTables").prop("indeterminate", false).trigger("change");

            $($(".dataTables_wrapper .pagination li:first-of-type"))
                .find("a")
                .addClass("prev");
            $($(".dataTables_wrapper .pagination li:last-of-type"))
                .find("a")
                .addClass("next");
            $(".dataTables_wrapper .pagination").addClass("pagination-sm");
            var api = $(this).dataTable().api();
            $("#contarAviso span").html("Mostrando " + parseInt(api.page.info().start + 1) + "-" + api.page.info().end + " de " + api.page.info().recordsTotal + " items");
        }
    });
    $("#dataTablesCopy5").on("click", function (event) {
        event.preventDefault();
        $avisoTable.buttons(0).trigger();
    });

    $("#dataTablesExcel5").on("click", function (event) {
        event.preventDefault();
        $avisoTable.buttons(1).trigger();
    });

    $("#dataTablesCsv5").on("click", function (event) {
        event.preventDefault();
        $avisoTable.buttons(2).trigger();
    });

    $("#dataTablesPdf5").on("click", function (event) {
        event.preventDefault();
        $avisoTable.buttons(3).trigger();
    });

    $("#buscarAviso").on("keyup", function (event) {
        $avisoTable.search($(this).val()).draw();
    });

}

function listarCarreras(){
         
      jQuery.ajax({
        url: 'http://localhost:8081/api/v1/carrera/listado',
        type: "GET",
        //data: JSON.stringify(request),
           //el tipo de dato que devolvera el servidor 
        dataType: json,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log("datos recibidos: "+data)
            if (data.length < 1) {
                $("#ktAlertTable").css("display","block");
              }else{
                $("#ktAlertTable").css("display","none");
                var listTable = "";
    
                for (i = 0; i < data.length; i++) {
                    let valores = Object.values(data[i]);
                    listTable += '<tr>'
                    for (j = 3; j < valores.length; j++ ) {
                        listTable += '<td>' + valores[j] + '</td>'
                    }
                    listTable += '<td>'
                    listTable += '<button style="margin-right: 5px;" title="Aumentar Stock" onclick="aumentarStock('+json[i].productoID+')"type="button" class="btn btn-success btn-sm"><i class="iconsminds-add-cart"></i></button>'
                    listTable += '<button style="margin-right: 5px;" title="Editar" onclick="editarProducto('+json[i].productoID+')"type="button" class="btn btn-warning btn-sm"><i class="simple-icon-pencil"></i></button>'
                    listTable += '<button style="margin-right: 5px;" title="Eliminar" onclick="eliminarProducto('+json[i].productoID+')"type="button" class="btn btn-danger btn-sm"><i class="simple-icon-trash"></i></button>'
                    listTable += '</td>'
                    listTable += '</tr>'
                }
                $("#tableCarrera tbody").html(listTable);
                tableParse("listarCarreras");
                }
            },
        error: function (error) {
            console.log("mando error"+error.error);
            //$.LoadingOverlay("hide");
        }        
    });


  }