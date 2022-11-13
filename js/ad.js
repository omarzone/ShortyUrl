var boton = document.getElementById("link-generado");
var boton2 = document.getElementById("link-btn");
var contador = 5;
var etiqueta = document.getElementById("contador");

etiqueta.innerHTML = "<b> 5 segundos para obtener el link.</b>";
 boton.style.display = "none";
// boton.parentNode.replaceChild(etiqueta, boton);

function descarga(){
   etiqueta.style.display = "inline";
   etiqueta.display
   var id = window.setInterval(function(){
      contador--;
      if(contador < 0){
         etiqueta.parentNode.replaceChild(boton, etiqueta);
         window.clearInterval(id);
         boton.style.display = "inline";
      }
      else{
         etiqueta.innerHTML = + contador.toString() + "<b> segundos para obtener el link. </b>";
      }
   }, 1000) 
   boton2.style.display = "none";
  

}

etiqueta.style.display = "none";
var clickbtn = document.getElementById("link-btn");
clickbtn.onclick = descarga; 



















$(document).ready(function () {


   $("body").on("click", ".link-btn", function (event) {
      console.log("Clickeado");
      var el = this;
  
      var clvlink = $(this).data("id");
  
      
        // AJAX Request
        $.ajax({
          url: "../utils/read.php",
          type: "GET",
          data: { CLVLINK: clvlink },
          success: function (response) {
            var dataResult = JSON.parse(response);
            console.log(dataResult.CLVLINK);
          if (dataResult.CLVLINK === clvlink) {
            console.log(dataResult.URL);
            $("#link-generado").prop("href", dataResult.URL)
            console.log($("#link-generado"));
          }
          else {
              
            alert("Error al obtener el link original");
          }
  
          
          },
        });
      
    });
 });
 