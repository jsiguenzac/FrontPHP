 function Registrar() {                
    var request = {
        firstName:$("#nombre").val(),
        lastName:$("#apellido").val(),
        username:$("#username").val(),
            email:$("#email").val()
        //falta implementar el confirmar contraseña
    }
    console.log(request)
    jQuery.ajax({
        url: 'http://localhost:8081/api/v1/usuario/registro',
        type: "POST",
        data: JSON.stringify(request),
           //el tipo de dato que devolvera el servidor 
        //dataType: "string",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            //console.log("datos recibidos: "+data)
            if (data) {
                console.log(data.username)
                //termina pantalla de carga
               // $.LoadingOverlay("hide");
                //TODO: hacer un reload o limpiar los inputs
               $('#mensaje').addClass('alert alert-dark').html('📧Revisa tu correo para confirmar tu cuenta...')
                            
            } else {
                console.log("No se pudo guardar los cambios");
            }
        },
        error: function (error) {
            console.log("mando error"+error.error);
            //$.LoadingOverlay("hide");
        }        
    });

}



$('#password, #confirmpass').on('keyup', function () {
    if ($('#password').val() == $('#confirmpass').val()) {
      $('#mensaje').html('');
    } else 
      $('#mensaje').html('Las contraseñas deben coincidir');
  });