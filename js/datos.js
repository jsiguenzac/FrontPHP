
function mostrarDatos() { 
    var username = localStorage.getItem("username");
    //se muestra en toda pag
    document.getElementById('username').innerText = username;
    var testData = !!document.getElementById("nombre");
    //solo en index
    if(testData){
        $.ajax({
            url:"https://verificacion-facial.herokuapp.com/api/v1/usuario/"+username,
            type:"GET",
            datatype: "json",
            success:function(response){                
                document.getElementById('nombre').innerText = response.firstName+" "+response.lastName;
                document.getElementById('correo').innerText = response.email;
                document.getElementById('rol').innerText = response.role;
          
            }
        }); 
    }

           

}
//

    
