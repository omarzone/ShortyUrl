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
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/updateprofile.css" />
    <link rel="stylesheet" href="css/dashboard.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src = "js/deleteProfile.js"> </script>
    <script src = "js/updatePassword.js"> </script>

    <title>UpdateProfile</title>
</head>

<body>
    <div class="header">
        <div id="start" class="space-head">
            <a href="dashboard.php" class="dashboard-redirect">
                <h1>SHORTY</h1>
            </a>
        </div>

        <div id="center" class="space-head">
            <div class="icon-search"></div>
            <div class="searchBar">
                <input type="text" placeholder="Busca o genera una nueva URL" class="custom-input" />
            </div>
            <div class="icon-add"></div>
        </div>

        <div id="end" class="space-head">
            <div class="icon-noti"></div>
            <div class="profile-pic">
                <?php  echo("<img src='$img' alt='profilePicture'/>") ?>
            </div>
            <div class="icon-arrow"></div>
        </div>
    </div>



    <div class="containerUpdate">
        <div class="leftUpdate">
            <br>
            <center>
                <h3> Perfil </h3>

                <div class="profile-div">
                    <div class="profile-pic-update">
                        <?php  echo("<img src='$img' alt='profilePicture'/>") ?>
                    </div>

                <!--     <form class="profile-image-camera" name="formulario" method="post" action="/send.php"
                        enctype="multipart/form-data">
                        <label for="image-input">
                            <img src="img/camera-svgrepo-com.png">
                        </label>

                     <input id="image-input" type="file" name="adjunto" accept=".pdf,.jpg,.png" multiple /> -->
                    </form>
                </div> <br>
            </center>
        </div>


        <div class="rightUpdate">
            <div class="rightContentUpdate">
                <h3> Datos de usuario </h3>
                <form id="fupForm" name="form1" method="post">
                    <div class="form-group">
                        <label for="nombre">Nombre usuario:</label>

                        <input class="form-control" type="text" placeholder="<?php echo $_SESSION["usuario"]  ?>" readonly>

                    </div> <br>
                    <h3> Seguridad </h3>
                    <form action="" method="post">    
                    <p> Cambiar contraseña</p>
                    <div class="form-group">
                        <label for="passwordActual">Contraseña Actual:</label>
                        <input type="password" class="form-control" id="passwordActual" placeholder="Contraseña Actual"
                            name="passwordActual">
                    </div>
                    <div class="form-group">
                        <label for="newPassword">Nueva Contraseña:</label>
                        <input type="password" class="form-control" id="newPassword" placeholder="Nueva Contraseña"
                            name="newPassword">
                    </div>
                    <div class="form-group">
                        <label for="confirmNewPassword">Confirmar Nueva Contraseña:</label>
                        <input type="password" class="form-control" id="confirmNewPassword"
                            placeholder="Confirmar nueva contraseña" name="confirmNewPassword">
                    </div> <br>

                    <input type="button" class="btn btn-primary" id = "UpdatePassword" value="Cambiar Contraseña"/>
                    <br> <br>

                    </form>
                    
                    <input type="button" class="btn btn-danger" id = "DeleteProfile" value="Eliminar Cuenta"/> 
            </div>          

        </div>
    </div>


</body>

</html>