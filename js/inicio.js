$(document).ready(function() {    
    mostrarDatos(); conteoP(); conteoC(); conteoA(); conteoM();
});

//conteo postulantes
function conteoP(){
    var testData = !!document.getElementById("cant_postu");
    if(testData){
    $.ajax({
        url:"https://verificacion-facial.herokuapp.com/api/v1/postulante/listado",
        type:"GET",
        datatype: "json",
        success:function(response){                
                    document.getElementById('cant_postu').innerText = response.length;
        }
    }); 
    }
}
//conteo carreras
function conteoC(){
    var testData = !!document.getElementById("cant_car");
    if(testData){
    $.ajax({
        url:"https://verificacion-facial.herokuapp.com/api/v1/carrera/listado",
        type:"GET",
        datatype: "json",
        success:function(response){                
                    document.getElementById('cant_car').innerText = response.length;
        }
    }); 
    }
}
//conteo admision
function conteoA(){
    var testData = !!document.getElementById("cant_admi");
    if(testData){
    $.ajax({
        url:"https://verificacion-facial.herokuapp.com/api/v1/admision/listado",
        type:"GET",
        datatype: "json",
        success:function(response){                
                    document.getElementById('cant_admi').innerText = response.length;
        }
    }); 
    }
}
//conteo modalidad
function conteoM(){
    var testData = !!document.getElementById("cant_moda");
    if(testData){
    $.ajax({
        url:"https://verificacion-facial.herokuapp.com/api/v1/modalidad/listado",
        type:"GET",
        datatype: "json",
        success:function(response){                
                    document.getElementById('cant_moda').innerText = response.length;
        }
    }); 
    }
}
//funt

function abrirModa(){
    document.location.href = "modalidad.php";
}
function abrirAdmi(){
    document.location.href = "admision.php";
}
function abrirCar(){
    document.location.href = "carrera.php";
}
function abrirPos(){
    document.location.href = "postulante.php";
}