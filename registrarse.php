<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resgistro</title>
    <link rel="stylesheet" href="css/registrarse.css"  type="text/css">
    <link rel="icon" href="img/ico.png" type="image/png">
</head>
<body>
    <section>
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
                            <input type="text" id="nombre" name="firstName" placeholder="Nombre" required>
                        </div><div class="inputBox">
                            <input type="text" id="apellido" name="lastName" placeholder="Apellido" required>
                        </div>
                        <div class="inputBox">
                            <input type="text" id="username" name="username" placeholder="Usuario" required>
                        </div>                        
                        <div class="inputBox">
                            <input type="email" id="email" name="email" placeholder="Correo Electrónico" required>
                        </div>
                        <!--<div class="inputBox">
                            <input class="registro" type="button" onclick="Registrar()" value="Registrarse">
                        </div>-->
                                 <!--a-->
                                         <div class="row mx-auto mb-3">
                                            <span id="mensaje"></span>
                                        </div>
                                            <div class="mt-4 mb-0">
                                                <div class="inputBox">
                                                    <button class="boton" type="button" onclick="Registrar()">Registrarse</button>
                                                </div>
                                            </div>
                        <p class="forget"><a href="index.php">Iniciar Sesión</a></p>
                    </form>
                </div>
            </div>
        </div>
    </section>    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> 
    <script src="./js/registro.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>