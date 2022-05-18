function Login() {
    var request = {
        username:$("#Usuario").val(),
        password:$("#Clave").val()
        //falta implementar el confirmar contraseña
    }
    console.log(request)
    jQuery.ajax({
        url: 'http://localhost:8081/api/v1/usuario/login',
        type: "POST",
        data: JSON.stringify(request),
        //el tipo de dato que devolvera el servidor 
        //dataType: "string",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log("datos recibidos: "+data)
            if (data) {
                console.log(data.username)
                document.location.href = "index.php";
                //termina pantalla de carga
            // $.LoadingOverlay("hide");
                //TODO: hacer un reload o limpiar los inputs
            //$('#mensaje').addClass('alert alert-dark').html('📧Revisa tu correo para confirmar tu cuenta...')

            } else {
                console.log("No se pudo guardar los cambios");
            }
        },
        error: function (error) {
            console.log("mando error"+error);
            $('#Usuario').val(''),
            $('#Clave').val(''),
            $('#mensaje').addClass('alert alert-dark').html('Credenciales Incorrectas!!!')
            
            //$.LoadingOverlay("hide");
        }
    });

    }