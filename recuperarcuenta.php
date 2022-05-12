<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restablecer su contraseña</title>
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
                    <h2>Restablecer su contraseña</h2>
                    <form>
                        <div class="inputBox">
                            <input type="password" placeholder="Contraseña antigua">
                        </div>
                        <div class="inputBox">
                            <input type="password" placeholder="Nueva Contraseña">
                        </div>
                        <div class="inputBox">
                            <input type="password" placeholder="Confirmar Contraseña">
                        </div>
                        <div class="inputBox">
                            <input class="registro" type="submit" value="Restablecer Contraseña">
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
            alert("Se restableció su contraseña correctamente");
        }
    </script>
</body>
</html>