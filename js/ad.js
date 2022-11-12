var boton = document.getElementById("link");
var boton2 = document.getElementById("link-btn");
var contador = 5;
var etiqueta = document.createElement("p");

etiqueta.innerHTML = "<b> 5 segundos para obtener el link.</b>";

boton.parentNode.replaceChild(etiqueta, boton);

function descarga(){
   etiqueta.style.display = "inline";

   var id = window.setInterval(function(){
      contador--;
      if(contador < 0){
         etiqueta.parentNode.replaceChild(boton, etiqueta);
         window.clearInterval(id);
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