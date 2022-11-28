<!-- <?php 

$clvlink = $_GET["CLVLINK"];
    

    
?> -->
<!DOCTYPE html>
<html>
    <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <title> Shorty </title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/ad.css">
    </head>  
    <body>
        <div class="clvLinkOculta" style="display: none;" data-clvLink="<?php echo $clvlink;?>"></div>
        <div class= "container">
            <div class="header">
                <div class="headerLeft">
                    <br>
            <h1> <img class="align" src="../img/cadena.png"> SHORTY</h1>
            </div>
    
                <div class="headerRight">
                    <br>

                    <button class="link-btn" id="link-btn" data-id="<?php echo $clvlink ?>">
                        <b>Llévame al link</b></button>
                        <p style="display: none;" id="contador"><b> 5 segundos para obtener el link.</b></p>

                    <a href="#" class="link-generado" id="link-generado">
                        <b>Llévame al link</b>
                    </a>

                </div>
            </div>
            

            <div class="nav">
                <div class="navLeft">
                    <h3>Usa<a href="index.html"><span>Shorty</span></a>para acortar tus links</h3>
                </div>

                

                <div class="navRight">
                        <h3><a href="#"> Reportar anuncio </a></h3>
                </div>
            </div>

            <div class="image">
                
                <center>
                <script type="text/javascript">
	atOptions = {
		'key' : 'f895143b0b4962c64c33dd04af4a9ba7',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitabledisplayformat.com/f895143b0b4962c64c33dd04af4a9ba7/invoke.js"></scr' + 'ipt>');
</script>
                </center>
        </div>
      </div>


    <script src="../js/ad.js"></script> 
    </body>
</html>

