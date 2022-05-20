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
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <!-- datatable -->
  <link rel="stylesheet" href="https://cdn.datatables.net/1.10.24/css/dataTables.bootstrap4.min.css">
  
  </head>
<body class="hold-transition sidebar-mini layout-fixed">

  <?php require('./layout/header2.php')?>

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
      </div><!-- /.container-fluid 
    </section>

    <section class="content">  -->  
 <!-- Content Wrapper. Contains page content -->
 <div class="content-wrapper iframe-mode" data-widget="iframe" data-loading-screen="750">
    <div class="tab-content">
          <div class="table-responsive">
            <table class="table table-responsive table-hover border='0' cellspacing='0' cellpadding='0'" id="tableCarrera">
                    <thead class="table-dark">
                        <tr>
                            <th>Hoi</th>
                            <th>asas</th>
                            <th>Hoi2</th>
                            <th>asas2</th>
                            <th>Hoi3</th>
                            <th>asas3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>BOLI</td>
                            <td>UY</td>
                            <td>BOLI</td>
                            <td>UY</td>
                            <td>BOLI</td>
                            <td>UY</td>
                        </tr>
                        <tr>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                        </tr>
                        <tr>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                        </tr>
                        <tr>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                        </tr>
                        <tr>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                        </tr>
                        <tr>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                        </tr>
                        <tr>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                        </tr>
                        <tr>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                        </tr>
                        <tr>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                        </tr>

                        <tr>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                        </tr>
                        <tr>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                        </tr>
                        <tr>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                          <td>BOLI</td>
                          <td>UY</td>
                        </tr>                        
                    </tbody>
                </table>
          </div>
    </div>
  </div>
  <!-- /.content-wrapper -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
    <!--FIN DE CONTENIDO DE CADA HTML-->

    <?php require('./layout/footer2.php')?>

    <script src="https://cdn.bootcdn.net/ajax/libs/bootstrap-validator/0.5.3/js/bootstrapValidator.js"></script>
  <!-- Option 1: Bootstrap Bundle with Popper --> 
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>

  <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.24/js/dataTables.bootstrap4.min.js"></script>
<script>
  $(document).ready(function() {
    $('#tableCarrera').DataTable();
});
tabladata = $('#tableCarrera').DataTable({
  "language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json"
            }
});

</script>
</body>
</html>
