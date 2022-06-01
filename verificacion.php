<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>Verificacion | Cibertec</title>
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
      <div class="row  justify-content-around">
        <div class="col-md-4">
          <div class="card mb-4" style="width:300px">
              <img class="card-img-top img-thumbnail" src="http://localhost:8081/api/v1/postulante/image/profile/1" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Alumno: <span>Nombre alumno</span></h5>
                <p class="card-text">Datos de alumno</p>
                <a href="" class="btn btn-outline-dark btn-sm">Go somewhere</a>
              </div>
          </div>
        </div>
        <div class="col-md-3">
        <div class="col-md-4 ps-4">
          <div class="card mb-4 border-dark" style="width:300px">
              <img class="card-img-top img-fluid" id="renderImage" src="http://localhost:8081/api/v1/postulante/image/profile/1" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Imagen subida</h5>
                <p class="card-text">Datos de como subir</p>
                <div class="">
                  <!--Subir archivo de imagen o webcam-->
                    <div class="input-group">
                        <label class="input-group-btn">
                            <span class="btn btn-dark">
                                Subir Foto <input type="file" id="uploadImage" style="display: none;" accept="image/png, image/jpeg">
                            </span>
                        </label>
                        <input type="text" class="form-control" readonly>
                    </div>
              </div>
          </div>
        </div>
    </div>
        <!---->
    <section/>
      
  </div>
  <!-- /.content-wrapper -->
    <!--FIN DE CONTENIDO DE CADA HTML-->

  <?php require('./layout/footeer.php')?>
    
  <script src="./js/verificacion.js"></script>

</body>
</html>