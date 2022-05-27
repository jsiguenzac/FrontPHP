<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CARRERAS | Cibertec</title>
  <?php require('./layout/links.php')?>
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
            <h1>CARRERAS</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">              
              <!-- AGREGAR NUEVA CARRERA -->
                      <!-- Button trigger modal -->
                      <button type="button" class="btn btn-sm  ml-auto btn-success" data-bs-toggle="modal" data-bs-target="#idAgregarCar">
                        AGREGAR CARRERA <i class="fas fa-plus"></i> 
                      </button>      
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                  <!-- /.card -->
              <div class="card">
                  <div class="card-header">
                    <h2 class="card-title">Lista de Carreras</h2>
                  </div>
                <div class="card-body">
                  <div class="table-responsive">                         
                    <!--Tabla-->
                    <table id="tableCarrera" class="table table-bordered table-hover table-striped">
                        <thead class="table-dark">
                          <tr style="text-align: center;">
                          <th>Nº</th>
                          <th>NOMBRE</th>
                          <th>ESTADO</th>
                          <th style="display: none;"></th>
                          <th>AREA</th>
                          <th>ACCIONES</th>
                          </tr>
                        </thead>
                        <tbody style="text-align: center;">
                          
                        </tbody>
                    </table>                    
                  </div>
                </div>
              <!-- /.card-body -->
              </div>
            </div>
        </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

         <!-- Modal -->
         <div class="modal fade" id="idAgregarCar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="staticBackdropLabel">CARRERA</h5>  
                                    </div>
                                    <div class="modal-body">
                                      <!--inicio de cajas --------->
                                            <form id="idcarreras" action=" " method="post" autocomplete="off">
                                            <div class="form-row">
                                              <input type="text" class="form-control col-sm-2" id="idcod" name="id" value="0" hidden="">  
                                                  <div class="form-group col-md-6">
                                                    <label for="inputDescripcion">NOMBRE</label>
                                                    <input type="text" class="form-control" id="iddescripcion" name="descripcion" placeholder="Ingrese nombre de carrera">
                                                  </div>
                                                  <div class="form-group col-md-6">
                                                      <label for="inputEstado">ESTADO</label>
                                                      <select id="idestado" name="estado" class="form-control">
                                                        <option selected>[SELECCIONE]</option>
                                                        <option>ACTIVO</option>
                                                        <option>INACTIVO</option>									        
                                                      </select>
                                                  </div>									  
                                                  <div class="form-group col-md-9">
                                                      <label for="inputArea">ÁREA</label>
                                                      <select id="idarea" name="area" class="form-control">
                                                        <option selected>[SELECCIONE]</option>
                                                      </select>
                                                  </div>						   
                                              </div>	
                                                  <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" id="idcancelar" data-bs-dismiss="modal">CANCELAR</button>
                                                    <if ></if>
                                                    <button type="submit" class="btn btn-success" onclick="Guardar()">GRABAR</button>                                                                   
                                                  </div>
                                            </form>	
                                    </div>	      
                                  </div>
                                </div>
                              </div>

      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
    <!--FIN DE CONTENIDO DE CADA HTML-->

    <?php require('./layout/footer2.php')?>
  
 <script src="./js/carrera.js"></script>

</body>
</html>
