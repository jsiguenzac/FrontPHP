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
});


//cambia el nombre de la imagen
$(function() {

  $(document).on('change', ':file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
  });

  
  $(document).ready( function() {
    //below code executes on file input change and append name in text control

      let searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has('id')) {
        let param = searchParams.get('id');
        //$('#postulanteImagen').attr('src','http://localhost:8081/api/v1/postulante/image/profile/'+param);                   
        console.log('Postulante Imagen');
        console.log('parametro:'+param);
        $.ajax({
            url: 'http://localhost:8081/api/v1/postulante/'+param,
            type: 'GET',
            datatype: "json",
            dataSrc: "",
            success: function(response) {
                console.log(response.id);
                $('#postulanteNombre').text(response.name +' '+response.lastName);
                $('#postulanteEmail').text(response.email);
                $('#postulanteTelefono').text(response.phone);
                //TODO: temporal obtener la imagen desde el ajax, en el atributo imageUrl de la imagen
                $('#postulanteImagen').attr("src", "http://localhost:8081/api/v1/postulante/image/profile/"+response.id);                   
                //falta agregar ficha de postulacion
            }
        });
      }
        $(':file').on('fileselect', function(event, numFiles, label) {

            var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

            if( input.length ) {
            input.val(log);
            } else {
            if( log ) alert(log);
            }
        });
  });

});

 function Verificacion() {
    var formData = new FormData();
    formData.append('image', document.getElementById('uploadImage').files[0]);

    jQuery.ajax({
        url: 'http://localhost:8081/api/v1/imagen/verify/1',
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        cache: false,
        success: function (data) {
            console.log('Entro a success')
            if (data) { 
                swal("Exito", "Se guardo correctamente", "success"); 
                console.log(data.porcentajeConfianza+'Descripcion'+ data.descripcion);              
            } else {
                swal("Error", "No se pudo guardar los cambios", "warning");
            }

            //TODO MOSTRAR LOS DATOS DE LA VERIFICACION Y PONER PANTALLA DE CARGA, EL ALERT DEBERIA SALIR ANTES DE EL ENVIO DEL AJAX
        },
        error: function (error) {
            console.log('Error:'+error);
        },
        beforeSend: function () {
			console.log('Enviando...');
        },
    });
}