
<?php 

session_start();
if (empty($_SESSION["usuario"])) {
  # Lo redireccionamos al formulario de inicio de sesión
  header("Location: index.html");
  # Y salimos del script
  exit();
}

$img = $_SESSION["profilePic"];
?>
<!DOCTYPE html>
<html lang="en">

<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <link rel="stylesheet" href="css/dashboard.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dashboard</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="js/dashboard.js"></script>

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
      <a href="dashboard.php">
        <h1>SHORTY</h1>
      </a>
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
      <span ><?php echo $_SESSION["usuario"]  ?>  </span>
      <span style="width:5px;">  </span>
      <a href="updateprofile.php">
        <div class="profile-pic">
        <?php  echo("<img src='$img' alt='profilePicture'/>") ?>
        </div>
      </a>
      <div class="icon-arrow"></div>
      
    </div>
  </div>


  
  <div class="main-content">
    <div class="statistics">
      <br>
      <div class="statistics-content">
        <div class="statics-tittle">
          <h2>ESTADISTICAS</h2>
        </div>
        <br>
        <div class="statistics-number-links" alt="links">
          <img src="img/s-link-icon.png" height="20px" width="20px" />
          <div class="statistics-counter-links">
            <h2 id="totalLinks">0</h2>Links
          </div>
        </div>

        <div class="statistics-views" alt="views">
          <img src="img/s-views-icon.png" height="20px" width="25px" />
          <div class="statistics-counter-views">
            <h2 id="totalViews">0</h2>vistas
          </div>
        </div>

        <div class="statistics-clicks" alt="links">
          <img src="img/s-clicks-icon.png" height="20px" width="20px" />
          <div class="statistics-counter-clicks">
            <h2 id="totalClicks">0</h2>Clicks
          </div>
        </div>

        <div class="statistics-time" alt="links">
          <img src="img/s-time-icon.png" height="20px" width="20px" />
          <div class="statistics-counter-time">
            <h2 id="avgtime">0 s</h2>Tiempo promedio
          </div>
        </div>

      </div>
    </div>
    <br>
    <br>
    <center>
      <hr width="70%">
    </center>
    <div class="icons-order">
      <div class="icons-order-contents">
        <div class="home-icon" alt="home">
          <a href="#">
            <img src="img/home-icon.png" height="20px" width="20px" />Inicio
          </a>
        </div>
        <div class="filter-icon" alt="filter">
          <a href="#">
            <img src="img/filter-icon.png" height="20px" width="20px" /> Filtro
          </a>
        </div>
      </div>
    </div>
    <br>
    <br>
    <div class="cards-content">
      <!-- <div class="custom-card">
        <br>
        <br>
        <div class="points-img">
          <img src="img/3-points-icon.png" alt="Points" height="80px" />
        </div>
        <div class="name-link">
          <h1>Generador de protogemas 100% real</h1>
          <br>
          <div class="link-cut">
            <a href="#">shorty.com</a>
          </div>
        </div>
        <div class="counter">23</div>
        <div class="eye-icon">
          <img src="img/eye-icon.png" alt="eye" height="30px" width="35px" />
        </div>
        <div class="copy-icon">
          <img src="img/copy-icon.png" alt="copy" height="30px" width="30px" />
        </div>
        <div class="edit-icon" alt="edit">
          <img src="img/edit-icon.png" height="30px" width="30px" />
        </div>
        <div class="trash-icon" alt="trash">
          <img src="img/trash-icon.png" height="30px" width="30px" />
        </div>
      </div> -->
      
      <br>
      <br>
      

    </div>
  </div>
</body>

</html>