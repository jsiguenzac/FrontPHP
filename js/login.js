function Login() {
    var request = {
        username:$("#Usuario").val(),
        password:$("#Clave").val()
    }
    console.log(request)
    jQuery.ajax({
        url: 'https://verificacion-facial.herokuapp.com/api/v1/usuario/login',
        type: "POST",
        data: JSON.stringify(request),
        //el tipo de dato que devolvera el servidor 
        //dataType: "string",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log("datos recibidos: "+data)
            if (data) {
                console.log(data.username)
                localStorage.setItem("username", data.username);                

            } else {
                console.log("No se pudo guardar los cambios");
            }
            Swal.fire({
                title: 'Logueo Exitoso',                
                 icon: 'success',
                 width: '25%',
                 toast: true,
                 position: 'center',
              }).then(function(){           
                document.location.href = "inicio.php";       
         });                    
        },
        error: function (error) {
            console.log("mando error"+error);
            $('#Usuario').val(''),
            $('#Clave').val('')
                  // swal('Credenciales Incorrectas!!!','', 'error');
        Swal.fire({
            title: 'Credenciales Incorrectas',
            icon: 'error',
            width: '25%',
           // background: '#000',
            timer: 4000,
            timerProgressBar: true,
            toast: true,
            position: 'center',
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            allowClickOutside: false,
        })
            
        }
    });
    
    }