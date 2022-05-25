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
  <!-- color Validacion -->
  <link rel="stylesheet" href="css/validacionTxt.css">
 <!-- Bootstrap CSS-->
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.css"> 
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
                    <div class="card-body d-flex">                     
                                    <!-- AGREGAR NUEVA CARRERA -->
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-lg  ml-auto btn-success" data-bs-toggle="modal" data-bs-target="#idAgregarCar">
                          AGREGAR CARRERA
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="idAgregarCar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">CARRERA</h5>  
                              </div>
                              <div class="modal-body">
                                <!--inicio de cajas --------->
                                      <form id="idcarreras" action=" " method="post">
                                      <div class="form-row">
                                        <input type="text" class="form-control col-sm-2" id="id" name="id" value="0" hidden="">  
                                            <div class="form-group col-md-6">
                                              <label for="inputDescripcion">NOMBRE</label>
                                              <input type="text" class="form-control" id="iddescripcion" name="descripcion" placeholder="Ingrese la descripción de la habitación">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputTipo_habi">ESTADO</label>
                                                <select id="idestado" name="estado" class="form-control">
                                                  <option selected>[SELECCIONE]</option>
                                                  <option>ACTIVO</option>
                                                  <option>INACTIVO</option>									        
                                                </select>
                                            </div>									  
                                            <div class="form-group col-md-9">
                                                <label for="inputTipo_habi">ÁREA</label>
                                                <select id="idarea" name="area_id" class="form-control">
                                                  <option selected>[SELECCIONE]</option>									        
                                                </select>
                                            </div>						   
                                        </div>	
                                            <div class="modal-footer">
                                              <button type="button" class="btn btn-danger" id="idcancelar" data-bs-dismiss="modal">CANCELAR</button>
                                              <button type="submit" class="btn btn-success">GRABAR</button>
                                            </div>
                                      </form>	
                              </div>	      
                            </div>
                          </div>
                        </div>
                    </div>
          <!--Tabla-->
            <table id="tableCarrera" class="table table-responsive table-hover border='0' cellspacing='0' cellpadding='0'" style="width: 100%;">
                <thead class="table-dark">
                    <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>ESTADO</th>
                    <th>ACCIONES</th>
                    </tr>
                </thead>
                    <tbody id="body">

                    </tbody>
                    </table>                    
          </div>
        </div>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
    <!--FIN DE CONTENIDO DE CADA HTML-->

    <?php require('./layout/footer2.php')?>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> 
  <!-- Option 1: Bootstrap Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
 
  <script src="https://cdn.bootcdn.net/ajax/libs/bootstrap-validator/0.5.3/js/bootstrapValidator.js"></script>
   <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.24/js/dataTables.bootstrap4.min.js"></script>
 <script src="./js/carrera.js"></script>

</body>
</html>
