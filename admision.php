<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>Admisión | Cibertec</title>
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
            <h1>ADMISIÓN</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">              
              <!-- AGREGAR NUEVA CARRERA -->
                      <!-- Button trigger modal -->
                      <button type="button" class="btn btn-sm  ml-auto btn-success" data-bs-toggle="modal" data-bs-target="#idAgregarAdm">
                        AGREGAR ADMISIÓN <i class="fas fa-plus"></i> 
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
                    <h2 class="card-title">Lista de Admisión</h2>
                  </div>
                <div class="card-body">
                  <div class="table-responsive">                         
                    <!--Tabla-->
                    <table id="tableAdmision" class="table table-bordered table-hover table-striped">
                        <thead class="table-dark">
                          <tr style="text-align: center;">
                          <th>ID</th>
                          <th>NOMBRE</th>
                          <th>ESTADO</th>
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
         <div class="modal fade" id="idAgregarAdm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="staticBackdropLabel">ADMISION</h5>  
                                    </div>
                                    <div class="modal-body">
                                      <!--inicio de cajas --------->
                                            <form id="idadmision" action=" " method="post" autocomplete="off">
                                            <div class="form-row">
                                              <input type="hidden" class="form-control col-sm-2" id="idcod" name="id" value="0" >  
                                                  <div class="form-group col-md-6">
                                                    <label for="inputDescripcion">NOMBRE</label>
                                                    <input type="text" class="form-control" id="iddescripcion" name="descripcion" placeholder="Ingrese nombre de admision">
                                                  </div>
                                                  <div class="form-group col-md-6">
                                                      <label for="inputEstado">ESTADO</label>
                                                      <select id="idestado" name="estado" class="form-control">
                                                        <option selected>ACTIVO</option>
                                                        <option>INACTIVO</option>									        
                                                      </select>
                                                  </div>									  					   
                                              </div>	
                                                  <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" id="idcancelar" data-bs-dismiss="modal">CANCELAR</button>
                                                    <button type="submit" class="btn btn-success"  id="idguardar" onclick="Grabar()">GRABAR</button>
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

    <?php require('./layout/footeer.php')?>
  
 <script src="./js/admision.js"></script>

</body>
</html>