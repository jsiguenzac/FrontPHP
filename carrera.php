<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CARRERAS | Cibertec</title>
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="css/adminlte.min.css">
  <!-- datatable -->
  <link rel="stylesheet" href="https://cdn.datatables.net/1.10.24/css/dataTables.bootstrap4.min.css">
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
            <h1>Carreras</h1>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
 
    <!-- Main content -->
    <section class="content">
    <div class="container">
          <div class="table-responsive">           
           <!-- <table class="table table-responsive table-hover border='0' cellspacing='0' cellpadding='0'" id="tableCarrera">
                    <thead class="table-dark">
                    <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Opciones</th>
                </tr>
                    </thead>
                    <tbody>     
                                              
                    </tbody>
                </table>
                <div id="ktAlertTable" style="display:none; margin-top:10px;" class="alert alert-warning rounded" role="alert">No hay registros...!</div>

              -->
<table id="tableCarrera" class="table table-responsive table-hover border='0' cellspacing='0' cellpadding='0'">
                <thead class="table-dark">
                    <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>ESTADO</th>
                    <th>ACCIONES</th>
                    </tr>
                </thead>
                    <tbody>

                    </tbody>
                    </table>
                    <div id="ktAlertTable" style="display:none; margin-top:10px;" class="alert alert-warning rounded" role="alert">No hay registros...!</div>
                
          </div>
        </div>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
    <!--FIN DE CONTENIDO DE CADA HTML-->

    <?php require('./layout/footer2.php')?>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> 

    <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.24/js/dataTables.bootstrap4.min.js"></script>
 <script src="./js/carrera2.js"></script>

</body>
</html>
