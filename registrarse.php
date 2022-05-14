<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrarse</title>
    <link rel="stylesheet" href="./css/registrarse.css"  type="text/css">
    <link rel="icon" href="./img/02-08-18-ojos.png" type="image/png">
</head>
<body>
    <section>
        <!-- <video src="logo.mp4" autoplay="true" muted="true" loop="true"></video> -->
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <div class="box">
            <div class="square" style="--i:0;"></div>
            <div class="square" style="--i:1;"></div>
            <div class="square" style="--i:2;"></div>
            <div class="square" style="--i:3;"></div>
            <div class="square" style="--i:4;"></div>
            <div class="container">
                <div class="form">
                    <h2>Registrarse</h2>
                    <form action="" method="POST">
                        <div class="inputBox">
                            <input type="text" id="nombre" name="firstName" placeholder="Nombre" require>
                        </div><div class="inputBox">
                            <input type="text" id="apellido" name="lastName" placeholder="Apellido" require>
                        </div>
                        <div class="inputBox">
                            <input type="text" id="username" name="username" placeholder="Usuario" require>
                        </div>                        
                        <div class="inputBox">
                            <input type="email" id="email" name="email" placeholder="Correo Electrónico" require>
                        </div>
                        <div class="inputBox">
                            <input type="password" id="password" name="password" placeholder="Contraseña" require>
                        </div>
                        <div class="inputBox">
                            <input type="password" id="confirmpass" name="confirmpass" placeholder="Confirmar Contraseña">
                        </div>
                        <div class="inputBox">
                            <input class="registro" type="submit" value="Registrarse">
                        </div>
                                 <!--a-->
                                         <div class="row mx-auto mb-3">
                                            <span id="mensaje"></span>
                                        </div>
                                            <div class="mt-4 mb-0">
                                                <div class="d-grid">
                                                    <button class="btn btn-primary btn-block" type="button" onclick="Registrar()">Registrarse</button>
                                                </div>
                                            </div>
                        <p class="forget"><a href="login.php">Iniciar Sesión</a></p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <script>
        let registro = document.querySelector('.registro')
        registro.onclick = function () {
            alert("Se registro correctamente");
        }
    </script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> 
    <script src="./js/registro.js"></script>
</body>
</html>