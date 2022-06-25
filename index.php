<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/logiin.css"  type="text/css">
    <link rel="icon" href="img/ico.png" type="image/png">
    <!-- CDN de SweetAlert2 -->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
   <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    -->
</head>
<body>
    <div class="logo">
        <img class="img" src="img/logoEchado.png" alt="FaceExam">
    </div>
    <section>
        <div class="box">
            <div class="square" style="--i:0;"></div>
            <div class="square" style="--i:1;"></div>
            <div class="square" style="--i:2;"></div>
            <div class="square" style="--i:3;"></div>
            <div class="square" style="--i:4;"></div>
            <div class="container">
                <div class="form">
                    <h2>Iniciar Sesión</h2>
                    <form action="" method="POST">
                        <div class="inputBox">
                            <input type="text" name="username" id="Usuario" placeholder="Usuario" required>
                        </div>
                        <div class="inputBox">
                            <input type="password" id="Clave" placeholder="Contraseña" required>
                        </div>
                                 
                                         <div class="row mx-auto mb-3">
                                            <span id="mensaje"></span>
                                        </div>
                                            <div class="mt-4 mb-0">
                                                <div class="inputBox">
                                                    <button class="boton" type="button" onclick="Login()">Iniciar Sesión</button>
                                                </div>
                                            </div>
                        <p class="forget"><a href="registrarse.php">Registrarse</a></p>
                    </form>
                </div>
                
            </div>
        </div>
    </section>


    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> 
    <script src="./js/login.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>