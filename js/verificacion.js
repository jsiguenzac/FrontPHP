function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#renderImage').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#uploadImage").change(function () {
    readURL(this);
});


//cambia el nombre de la imagen
$(function () {

    $(document).on('change', ':file', function () {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
        $('#verifyButton').prop('disabled', false);
    });


    $(document).ready(function () {
        //pone el nombre en el textcontrol
        let searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has('id')) {
            let param = searchParams.get('id');
            //$('#postulanteImagen').attr('src','http://localhost:8081/api/v1/postulante/image/profile/'+param);                   
            console.log('Postulante Imagen');
            console.log('parametro:' + param);
            $.ajax({
                url: 'http://localhost:8081/api/v1/postulante/' + param,
                type: 'GET',
                datatype: "json",
                dataSrc: "",
                success: function (response) {
                    console.log(response.id);
                    $('#postulanteNombre').text(response.name + ' ' + response.lastName);
                    $('#postulanteEmail').text(response.email);
                    $('#postulanteTelefono').text(response.phone);
                    //TODO: temporal obtener la imagen desde el ajax, en el atributo imageUrl de la imagen
                    $('#postulanteImagen').attr("src", response.imageUrl);
                    //falta agregar ficha de postulacion
                }
            });
        }
        $(':file').on('fileselect', function (event, numFiles, label) {

            var input = $(this).parents('.input-group').find(':text'),
                log = numFiles > 1 ? numFiles + ' files selected' : label;

            if (input.length) {
                input.val(log);
            } else {
                if (log) alert(log);
            }
        });

        
    });

});

function Verificacion() {
    var formData = new FormData();
    formData.append('image', document.getElementById('uploadImage').files[0]);
     var searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('id')) {
        var param = searchParams.get('id');
    }
    swal({
        title: "¿Seguro que desea verificar la identidad?",
        text: "Se verificará la identidad del postulante",
        icon: "warning",        
        dangerMode: false,
        buttons: true,
        showCancelButton: true,
        closeOnCancel: true
    }).then((willUpdate) => {
        
            if (willUpdate) { 
                swal({
                title:"Verificando...", 
                text:"Comprabando identidad del postulante",
                icon: "https://www.boasnotas.com/img/loading2.gif",
                buttons: false,      
                closeOnClickOutside: false,
                timer: 2500,
                //icon: "success"
                }); 
                console.log('Id postulante:'+param);
                jQuery.ajax({
                    url: 'http://localhost:8081/api/v1/imagen/verify/'+param,
                    type: "POST",
                    data: formData,
                    contentType: false,
                    processData: false,
                    cache: false,
                    success: function (data) {
                        console.log('Entro a success'+data.identical);
                        if (data) {                        
                            if(data.identical==true){
                                swal("Postulante verificado",data.descripcion+'\n Los rostros tienen un '+data.porcentajeConfianza+' de parecido', "success");
                            }else{
                                swal("Postulante no verificado",data.descripcion+'\n Los rostros tienen un '+data.porcentajeConfianza+' de parecido', "warning");
                            }
                            
                        } else {
                            swal("Error", "No se pudo comprobar, intente de nuevo", "warning");
                        }
                    },
                    error: function (error) {
                        console.log('Error:' + error);
                    },
                    beforeSend: function () {
                        console.log('Enviando...'+ param);
                    },
                });
            }
       });

    
}