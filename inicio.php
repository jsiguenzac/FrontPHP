<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Principal | Cibertec</title>
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
          <div class="col-sm-6">
            <h1>INICIO</h1>
          </div>         
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
      <h3 class="mt-4 mb-4" style="text-align: center;">Usuario Logueado</h3>
        <div class="row">
          <div class="col-md-4">
            <div class="card card-widget widget-user-2">                          
            </div>
          </div>

          <div class="col-md-4">
            <!-- Widget: user widget style 1 -->
            <div class="card card-widget widget-user">
              <!-- Add the bg color to the header using any of the bg-* classes -->
              <div class="widget-user-header" style="background-color: #487C84; color: white;">
                <h1 id="nombre"></h1>
                <!--sepuede añadir img de usu logeado-->
              </div>             
              <div class="card-footer">
                <div class="row">
                <!--<div class="col-sm-4"></div>-->
                  <!-- /.col -->
                  <div class="col-sm-8 border-right">
                    <div class="description-block">
                      <h5 class="description-header">CORREO</h5>
                      <p id="correo">email</p>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-4">
                    <div class="description-block">
                      <h5 class="description-header">ROL</h5>
                      <span class="description-text" id="rol"></span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->
              </div>
            </div>
            <!-- /.widget-user -->
          </div>

          <div class="col-md-4">            
          </div>
        </div>  
  <hr>
        <!-- Small Box (Stat card) -->
        <div class="row">
          <div class="col-lg-3 col-6" onclick="abrirPos()">
            <!-- small card -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3 id="cant_postu"></h3>
                <p>Postulantes Nuevos</p>
              </div>
              <div class="icon">
              <i class="fa fa-people-line"></i>
              </div>
              <a href="postulante.php" class="small-box-footer">
                Ver más <i class="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6" onclick="abrirCar()">
            <!-- small card -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3 id="cant_car"></h3>
                <p>Carreras Registradas</p>
              </div>
              <div class="icon">
                <i class="fa fa-graduation-cap"></i>
              </div>
              <a href="carrera.php" class="small-box-footer">
              Ver más <i class="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6" onclick="abrirAdmi()">
            <!-- small card -->
            <div class="small-box" style="color: white; background-color: orange;">
              <div class="inner">
                <h3 id="cant_admi"></h3>
                <p>Nuevas Admisiones</p>
              </div>
              <div class="icon">
              <i class="fa fa-file-circle-check"></i>
              </div>
              <a href="admision.php" class="small-box-footer">
              Ver más <i class="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6" onclick="abrirModa()">
            <!-- small card -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3 id="cant_moda"></h3>
                <p>Modalidades Registradas</p>
              </div>
              <div class="icon">
              <i class="fa fa-book-bookmark"></i>
              </div>
              <a href="#" class="small-box-footer">
              Ver más <i class="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <!-- ./col -->
        </div>
        <!-- /.row -->
        
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
   
  </div>
    <!--FIN DE CONTENIDO DE CADA HTML-->

    <?php require('./layout/footeer.php')?>
    <script src="./js/inicio.js"></script>
</body>
</html>
