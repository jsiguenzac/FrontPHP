<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>Ficha de Postulacion | Cibertec</title>
     <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    
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
            <h1>FICHA DE POSTULACIÓN</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">              
              <!-- AGREGAR NUEVA FICHA -->
                      <!-- Button trigger modal -->
                      <button type="button" class="btn btn-sm  ml-auto btn-success" data-bs-toggle="modal" data-bs-target="#idAgregarFicha">
                        AGREGAR FICHA <i class="fas fa-plus"></i> 
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
                    <h2 class="card-title">Lista de Fichas</h2>
                  </div>
                <div class="card-body">
                  <div class="table-responsive">                         
                    <!--Tabla-->
                    <table id="tablePostulante" class="table table-bordered table-hover table-striped">
                        <thead class="table-dark">
                          <tr style="text-align: center;">
                          <th>Nº</th>
                          <th>POSTULANTE</th>
                          <th>CARRERA</th>
                          <th>MODALIDAD</th>
                          <th>ADMISION</th>  
                          <th style="display: none;"></th>                                    
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

         <!-- Modal Agregar-->
         <div class="modal fade" id="idAgregarFicha" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="staticBackdropLabel">FICHA</h5>  
                                    </div>
                                    <div class="modal-body">
                                      <!--inicio de cajas --------->
                                            <form id="idpostulantes" action=" " method="post" enctype="multipart/form-data" autocomplete="off">
                                            <div class="form-row">
                                              <input type="text" class="form-control col-sm-6" id="idcod" name="id" hidden="">  
                                                  <div class="form-group col-md-12">
                                                  <label for="inputPostulante">POSTULANTE</label>
                                                      <select id="idpostu" name="postulante" class="form-control">
                                                        <option selected>[SELECCIONE]</option>
                                                      </select>
                                                </div>
                                                  <div class="form-group col-md-12">
                                                      <label for="inputCarrera">CARRERA</label>
                                                      <select id="idcarrera" name="carrera" class="form-control">
                                                        <option selected>[SELECCIONE]</option>
                                                      </select>
                                                  </div>
                                                  <div class="form-group col-md-6">
                                                      <label for="inputModalidad">MODALIDAD</label>
                                                      <select id="idmodalidad" name="modalidad" class="form-control">
                                                        <option selected>[SELECCIONE]</option>
                                                      </select>
                                                  </div>	
                                                  <div class="form-group col-md-6">
                                                      <label for="inputAdmision">ADMISION</label>
                                                      <select id="idadmision" name="admision" class="form-control">
                                                        <option selected>[SELECCIONE]</option>
                                                      </select>
                                                  </div>
                                                  <div class="form-group col-md-6">
                                                    <label for="inputMonto">MONTO</label>
                                                    <input type="text" class="form-control" id="idmonto" name="monto" placeholder="Ingrese monto de pago">
                                                  </div>
                                                  <div class="form-group col-md-6">
                                                    <label for="inputNoperacion">N° OPERACIÓN</label>
                                                    <input type="text" class="form-control" id="idnoperacion" name="noperacion" placeholder="Ingrese N° Operación">
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
                                                    <if ></if>
                                                    <button type="submit" class="btn btn-success" onclick="Grabar()">GRABAR</button>
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
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <script src="./js/ficha.js"></script>

</body>
</html>