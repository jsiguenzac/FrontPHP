var tabladata;
$(document).ready(function() {    
    $('#idAgregarPos').bootstrapValidator({		
		fields:{	
			nombre:{
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
			
			apellido:{
				validators:{
					notEmpty:{
						message:'Campo Apellido es obligatorio.<br>'
					},
 			 		regexp:{
			 			regexp:/^[a-zA-ZÁ-ÿ\s]{1,20}$/,
			 			message:'Campo Apellido máx. 20 caracteres.<br>>'
			 		}
				}				
			},
						
			correo:{
				validators:{
					notEmpty:{
						message:'Campo Correo es obligatorio.<br>'
					},
 			 		regexp:{
			 			regexp:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
			 			message:'Campo Correo presenta "@" y ".com".<br>'
			 		}
				}					
			},
            fono:{
				validators:{
					notEmpty:{
						message:'Campo Teléfono es obligatorio.<br>'
					},
 			 		regexp:{
			 			regexp:/^\d{1,9}$/,
			 			message:'Campo Teléfono es maximo 9 digitos.<br>'
			 		}
				}					
			},
            image:{
				validators:{
					notEmpty:{
						message:'Campo Imagen es obligatorio.<br>'
					}		 	
				}				
			},
		}		
	});    	
tabladata = $('#tablePostulante').DataTable({
    responsive:true,
    "ajax": {
        "url": 'https://verificacion-facial.herokuapp.com/api/v1/postulante/listado',
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
        { "data": "imageUrl", visible: false, searchseable: true},
        {
            "data": "id", "render": function (data, type, row, meta) {
                return $("<a>").attr('href','verificacion.php?id='+row.id).addClass("btn btn-info btn-valida btn-sm").append(
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

    mostrarDatos();
    /*EVENTO ONCLICK AL BTN-EDIT*/ 
    $(document).on("click",".btn-editar",function(){  
        //reiniciar Validacion
        $("#idAgregarPos").data("bootstrapValidator").resetForm(true);
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
                
                var id,name,lastName, email,phone,imageUrl;
                var row = $(this).closest('tr');
                //obtener datos de las filas de la tabla
                id = tabladata.row( row ).data().id;
                name = tabladata.row( row ).data().name;
                lastName = tabladata.row( row ).data().lastName;
                email = tabladata.row( row ).data().email;
                phone = tabladata.row( row ).data().phone;
                imageUrl = tabladata.row( row ).data().imageUrl;
                console.log('Valor id '+id);
                //mostrar datos 
                $("#idcod").val(id);
                $("#idnombre").val(name);
                $("#idapellido").val(lastName);
                $("#idcorreo").val(email);
                $("#idfono").val(phone);
                $("input[type=file]")[0].files[0];
                $('#idAgregarPos').modal('show'); //abrir modal  
                }
        }); 
    })

});

function Grabar(){
    var id = $("#idcod").val();    
    return id<=0 ? Guardar() : Editar();
}

// AGREGAR/ACTUALIZAR POSTULANTES
function Guardar() {
    var nombre=$("#idnombre").val();
    var ap=$("#idapellido").val();
    var cor=$("#idcorreo").val();
    var fon=$("#idfono").val();
    var img=$("input[type=file]")[0].files[0];
    if(nombre != "" && ap !="" && cor !="" && fon !="" && img ){
    var request = new FormData();
    request.append("id", $("#idcod").val());
    request.append("name", $("#idnombre").val());
    request.append("lastName", $("#idapellido").val());
    request.append("email", $("#idcorreo").val());
    request.append("phone", $("#idfono").val());
    request.append("image", $("input[name=image]")[0].files[0]);
    console.log("Valor del Id"+$("#idcod").val());
    jQuery.ajax({
        url: 'https://verificacion-facial.herokuapp.com/api/v1/postulante/registrar',
        data: request,
        type: "POST",
        contentType: false,
        processData: false,
        cache: false,
        //data: JSON.stringify(request),
        //contentType: "application/json; charset=utf-8",
        success: function (data) {
            if (data) {       
                swal("Exito", "Se guardo la correctamente", "success")
                //reiniciar Validacion
                $("#idAgregarPos").data("bootstrapValidator").resetForm(true);	
                $('#idAgregarPos').modal('hide');
                $("#idpostulantes").trigger("reset");		
                $("#idcod").val("0");
                tabladata.ajax.reload();
            } else {
                swal("Error", "No se pudo guardar los cambios", "warning")
            }
        },
        error: function (error) {
            console.log(error)
             //reiniciar Validacion
        $("#idEditarPos").data("bootstrapValidator").resetForm(true);
       
        },
        beforeSend: function () {
            console.log(request)
        },
    });
}
}

function Editar() {
    var id=$("#idcod").val();
    var nombre=$("#idnombre").val();
    var ap=$("#idapellido").val();
    var cor=$("#idcorreo").val();
    var fon=$("#idfono").val();
    var img=$("input[type=file]")[0].files[0];
    if(nombre != "" && ap !="" && cor !="" && fon !=""){
    var request = new FormData();
    request.append("id", id);
    request.append("name", $("#idnombre").val());
    request.append("lastName", $("#idapellido").val());
    request.append("email", $("#idcorreo").val());
    request.append("phone", $("#idfono").val());
    request.append("image", $("input[name=image]")[0].files[0]);
    request.append('_method', 'PUT');
    console.log("Valor del Id "+id);
    $.ajax({
        url: 'https://verificacion-facial.herokuapp.com/api/v1/postulante/editar/'+id,
        data: request,
        type: "PUT",
        contentType: false,
        processData: false,
        cache: false,
        //data: JSON.stringify(request),
        //contentType: "application/json; charset=utf-8",
        beforeSend: function () {
           // console.log(data)
        },
        success: function (data) {
            if (data) {       
                swal("Exito", "Se guardo la correctamente", "success")
                //reiniciar Validacion
                $("#idAgregarPos").data("bootstrapValidator").resetForm(true);	
                $('#idAgregarPos').modal('hide');
                $("#idpostulantes").trigger("reset");		
                $("#idcod").val("0");
                tabladata.ajax.reload();
            } else {
                swal("Error", "No se pudo guardar los cambios", "warning")
            }
        },
        error: function (error) {
            console.log(error);
             //reiniciar Validacion
        $("#idAgregarPos").data("bootstrapValidator").resetForm(true);
       
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
                $.ajax({
                    url:"https://verificacion-facial.herokuapp.com/api/v1/postulante/eliminar/"+cod,
                    type:"DELETE",
                    success:function(){
                        swal("Ok","Se eliminó correctamente!","success").then(function(){
                            if(row1<=1){
                                document.location.href = "postulante.php";
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
    $("#idAgregarPos").data("bootstrapValidator").resetForm(true);
     
    //limpiar controles
    $("#idpostulantes").trigger("reset");		
    $("#idcod").val("0");			
        
})
// CARGAR IMAGEN
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#renderImage').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
$("#uploadImage").change(function(){
    readURL(this);
     //reiniciar Validacion
     $("#idEditarPos").data("bootstrapValidator").resetForm(true);
       
});



