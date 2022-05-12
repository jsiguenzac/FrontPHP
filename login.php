<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
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
                    <form>
                        <div class="inputBox">
                            <input type="text" placeholder="Usuario">
                        </div>
                        <div class="inputBox">
                            <input type="password" placeholder="Contraseña">
                        </div>
                        <div class="inputBox">
                            <input class="ingresar" type="submit" value="Ingresar al Sistema">
                        </div>
                         <p class="forget"> <a href="recuperarcuenta.php">¿Olvidaste tu contraseña?</a></p>
                         <p class="forget"><a href="registrarse.php">Registrarse</a></p>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <script>
        //aleta de ingreso al sistema
            let ingresar = document.querySelector('.ingresar');
            ingresar.onclick = function () {
                alert("Ingresaste al Sistema");         
         }
    </script>
</body>
</html>