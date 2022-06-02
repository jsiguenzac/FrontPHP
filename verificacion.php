<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Verificacion | Cibertec</title>
    <style type="text/css">
        .card-img-top {
            width: 100% !important;
            height: 350px !important;
            object-fit: cover !important;
        }

        .card {
            min-width: 300px !important;
            width: 300px !important;
        }
    </style>
    <?php require('./layout/link.php')?>
</head>

<body class="hold-transition sidebar-mini layout-fixed">

    <?php require('./layout/header-menu.php')?>

    <!--AQUI INICIO CONTENIDO DE CADA HTML-->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1>VERIFICACION</h1>
                    </div>
                    <div class="col-sm-6">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.php">Inicio</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Verificacion</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!---->
                <div class="row justify-content-evenly">
                    <div class="col-md-6">
                        <div class="card mb-4">
                            <img class="card-img-top" id='postulanteImagen' src="https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                                alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Alumno: <span id="postulanteNombre">nombre alumno</span></h5>
                                <p class="card-text">Datos de alumno</p>
                                <p class="card-text">Email: <span id="postulanteEmail"></span></p>
                                <p class="card-text">Telefono: <span id="postulanteTelefono"></span></p>                      
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="card mb-4 border-dark">
                            <img class="card-img-top" id="renderImage"
                                src="https://via.placeholder.com/600/92c952" alt="Card image cap">
                            <div class="card-body">
                                <p class="card-title">Foto de postulante a verificar</p>
                                <p class="card-text">Tamaño máximo de imagen: 6MB</p>
                                <!--Subir archivo de imagen o webcam-->
                                <div class="input-group">
                                    <label class="input-group-btn">
                                        <span class="btn btn-dark">
                                            Subir Foto <input type="file" id="uploadImage" style="display: none;"
                                                accept="image/png, image/jpeg">
                                        </span>
                                    </label>
                                    <input type="text" class="form-control" readonly>
                                </div>
                            </div>
                        </div>
                <div class="col-md-3">
                    <button type="button" class="btn btn-primary btn-lg btn-block" onClick="Verificacion()">Verificar</button>
                </div>
            </div>
                    <!---->
                   
        <section />

        </div>

                <!-- /.content-wrapper -->
                <!--FIN DE CONTENIDO DE CADA HTML-->
    <?php require('./layout/footeer.php')?>
    <script src="./js/verificacion.js"></script>
</body>
</html>