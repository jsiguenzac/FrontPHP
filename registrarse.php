<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign up</title>
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
                    <form>
                        <div class="inputBox">
                            <input type="text" placeholder="Nombre">
                        </div><div class="inputBox">
                            <input type="text" placeholder="Apellido">
                        </div>
                        <div class="inputBox">
                            <input type="text" placeholder="Usuario">
                        </div>
                        <div class="inputBox">
                            <input type="password" placeholder="Contraseña">
                        </div>
                        <div class="inputBox">
                            <input type="password" placeholder="Confirmar Contraseña">
                        </div>
                        <div class="inputBox">
                            <input class="registro" type="submit" value="Registrarse">
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
</body>
</html>