function Registrar() {
    var request = {
        firstName:$("#nombre").val(),
        lastName:$("#apellido").val(),
        username:$("#username").val(),
        email:$("#email").val()
        
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
            console.log("datos recibidos: "+data)     
             Swal.fire({
               title: 'Registrado Correctamente',
               text:'Revisa tu correo para confirmar tu cuenta...',
                icon: 'success',
                width: '25%',
                toast: true,
                position: 'center',
             }).then(function(){           
                document.location.href = "login.html";          
        });                     
        },
        error: function (error) {
            console.log("mando error"+error);
            Swal.fire({
                title: 'Ya existe un usuario con ese correo',
                icon: 'error',
                width: '25%',
               // background: '#000',
                timer: 2000,  
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