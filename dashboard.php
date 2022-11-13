<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <link rel="stylesheet" href="css/dashboard.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dashboard</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="js/dashboard.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

</head>

<body>


  <!-- MODAL NEW LINK -->

  <div class="modal" tabindex="-1" role="dialog" id="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Generar Link Acortado</h5>

        </div>
        <div class="modal-body">
          <div class="alert alert-success alert-dismissible" id="success" style="display:none;">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
          </div>
          <form id="fupForm" name="form1" method="post">
            <div class="form-group">
              <label for="nombre">Nombre:</label>
              <input type="text" class="form-control" id="nombre" placeholder="Nombre" name="nombre">
            </div>
            <div class="form-group">
              <label for="apellidoPaterno">Link:</label>
              <input type="text" class="form-control" id="link" placeholder="Link" name="link">
            </div>
            <!-- <input type="button" name="save" class="btn btn-primary" value="Registrar" id="butsave"> -->
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary " data-dismiss="modal" id="cerrar">Cerrar</button>
          <input type="button" name="save" class="btn btn-primary" value="Registrar" id="butsave">

        </div>
      </div>
    </div>
  </div>

  <!-- END MODAL NEW LINK -->





  <div class="header">
    <div id="start" class="space-head">
      <h1>SHORTY</h1>
    </div>

    <div id="center" class="space-head">
      <div class="icon-search"></div>
      <div class="searchBar">
        <input type="text" placeholder="Busca o genera una nueva URL" class="custom-input" id="search-bar-input" />
      </div>
      <div class="icon-add"></div>
    </div>

    <div id="end" class="space-head">
      <div class="icon-noti"></div>
      <div class="profile-pic">
        <img src="img/profile.png" alt="Profile Picture" />
      </div>
      <div class="icon-arrow"></div>
    </div>
  </div>
  <div class="main-content">
    <center>Contenido</center>
  </div>
</body>

</html>