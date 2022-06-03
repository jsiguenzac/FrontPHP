<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>POSTULANTES | Cibertec</title>
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
            <h1>POSTULANTES</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">              
              <!-- AGREGAR NUEVA CARRERA -->
                      <!-- Button trigger modal -->
                      <button type="button" class="btn btn-sm  ml-auto btn-success" data-bs-toggle="modal" data-bs-target="#idAgregarPos">
                        AGREGAR POSTULANTE <i class="fas fa-plus"></i> 
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
                    <h2 class="card-title">Lista de Postulantes</h2>
                  </div>
                <div class="card-body">
                  <div class="table-responsive">                         
                    <!--Tabla-->
                    <table id="tablePostulante" class="table table-bordered table-hover table-striped">
                        <thead class="table-dark">
                          <tr style="text-align: center;">
                          <th>Nº</th>
                          <th>NOMBRE</th>
                          <th>APELLIDO</th>
                          <th>EMAIL</th>
                          <th>TELEFONO</th>  
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
         <div class="modal fade" id="idAgregarPos" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="staticBackdropLabel">POSTULANTE</h5>  
                                    </div>
                                    <div class="modal-body">
                                      <!--inicio de cajas --------->
                                            <form id="idpostulantes" action=" " method="post" enctype="multipart/form-data" autocomplete="off">
                                            <div class="form-row">
                                              <input type="text" class="form-control col-sm-2" id="idcod" name="id" hidden="">  
                                                  <div class="form-group col-md-6">
                                                    <label for="inputNombre">NOMBRE</label>
                                                    <input type="text" class="form-control" id="idnombre" name="nombre" placeholder="Ingrese nombre del postulante">
                                                  </div>
                                                  <div class="form-group col-md-6">
                                                    <label for="inputApellido">APELLIDO</label>
                                                    <input type="text" class="form-control" id="idapellido" name="apellido" placeholder="Ingrese apellido del postulante">
                                                  </div>
                                                  <div class="form-group col-md-6">
                                                    <label for="inputCorreo">CORREO</label>
                                                    <input type="text" class="form-control" id="idcorreo" name="correo" placeholder="Ingrese correo del postulante">
                                                  </div>
                                                  <div class="form-group col-md-6">
                                                    <label for="inputFono">TELEFONO</label>
                                                    <input type="text" class="form-control" id="idfono" name="fono" placeholder="Ingrese telefono del postulante">
                                                  </div>
                                                  <div class="form-group col-md-9">
                                                    <label for="formFileSm" class="form-label">IMAGEN</label>
                                                    <input type="file" class="form-control form-control-sm" name="image" id="idimagen">
                                                  </div>
                                                  <!--<div class="form-group col-md-9">
                                                    <label for="formFileSm" class="form-label">IMAGEN</label>
                                                    <div class="input-group">
                                                        <label class="input-group-btn">
                                                            <span class="btn btn-dark">
                                                                Subir Foto <input type="file" id="uploadImage" style="display: none;" accept="image/png, image/jpeg">
                                                            </span>
                                                        </label>                                                        
                                                    </div>
                                                    <img class="card-img-top img-fluid" id="renderImage" src="" alt="Imagen a Subir">
                                                  </div>-->			   
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

      <!-- Modal EDITAR-->
      <div class="modal fade" id="idEditarPos" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="staticBackdropLabel">POSTULANTE</h5>  
                                    </div>
                                    <div class="modal-body">
                                      <!--inicio de cajas --------->
                                            <form id="idpostulantes" action=" " method="post" enctype="multipart/form-data" autocomplete="off">
                                            <div class="form-row">
                                              <input type="text" class="form-control col-sm-2" id="idcod2" name="id" hidden="">  
                                                  <div class="form-group col-md-6">
                                                    <label for="inputNombre">NOMBRE</label>
                                                    <input type="text" class="form-control" id="idnombre2" name="nombre" placeholder="Ingrese nombre del postulante">
                                                  </div>
                                                  <div class="form-group col-md-6">
                                                    <label for="inputApellido">APELLIDO</label>
                                                    <input type="text" class="form-control" id="idapellido2" name="apellido" placeholder="Ingrese apellido del postulante">
                                                  </div>
                                                  <div class="form-group col-md-6">
                                                    <label for="inputCorreo">CORREO</label>
                                                    <input type="text" class="form-control" id="idcorreo2" name="correo" placeholder="Ingrese correo del postulante">
                                                  </div>
                                                  <div class="form-group col-md-6">
                                                    <label for="inputFono">TELEFONO</label>
                                                    <input type="text" class="form-control" id="idfono2" name="fono" placeholder="Ingrese telefono del postulante">
                                                  </div>
                                                  <div class="form-group col-md-9">
                                                    <label for="formFileSm" class="form-label">IMAGEN</label>
                                                    <input type="file" class="form-control form-control-sm" name="image" id="idimagen">
                                                  </div>
                                                  <!--<div class="form-group col-md-9">
                                                    <label for="formFileSm" class="form-label">IMAGEN</label>
                                                    <div class="input-group">
                                                        <label class="input-group-btn">
                                                            <span class="btn btn-dark">
                                                                Subir Foto <input type="file" id="uploadImage" style="display: none;" accept="image/png, image/jpeg">
                                                            </span>
                                                        </label>                                                        
                                                    </div>
                                                    <img class="card-img-top img-fluid" id="renderImage" src="" alt="Imagen a Subir">
                                                  </div>-->			   
                                              </div>	
                                                  <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" id="idcancelar" data-bs-dismiss="modal">CANCELAR</button>
                                                    <if ></if>
                                                    <button type="submit" class="btn btn-success" onclick="Editar()">GRABAR</button>
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
    <script src="./js/postulante.js"></script>

</body>
</html>