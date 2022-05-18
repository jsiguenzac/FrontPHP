<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins">
    <link rel="stylesheet" href="./css/login.css"  type="text/css">
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
                    <h2>Iniciar Sesión</h2>
                    <form action="" method="POST">
                        <div class="inputBox">
                            <input type="text" id="user" name="username"  placeholder="Usuario">
                        </div>
                        <div class="inputBox">
                            <input type="password" id="pass" name="password" placeholder="Contraseña">
                        </div>
                        <div class="inputBox">
                            <input class="ingresar" type="submit" value="Ingresar al Sistema">
                        </div>
                                <div class="row mx-auto mb-3">
                                            <span id="mensaje"></span>
                                        </div>
                                <div class="mt-4 mb-0">
                                    <div class="d-grid">
                                        <button class="btn btn-primary btn-block" type="button" onclick="Login()">Iniciar Sesión</button>
                                    </div>
                                </div>
                         <p class="forget"> <a href="recuperarcuenta.php">¿Olvidaste tu contraseña?</a></p>
                         <p class="forget"><a href="registrarse.php">Registrarse</a></p>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <script>
            let ingresar = document.querySelector('.ingresar');
            ingresar.onclick = function () {
                //todo el ajax        
         }
    </script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> 
    <script src="./js/login2.js"></script>
</body>
</html>