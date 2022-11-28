var boton = document.getElementById("link-generado");
var boton2 = document.getElementById("link-btn");
var contador = 5;
var etiqueta = document.getElementById("contador");
var tempInt = 0;
var tempClicks = 0;
var TimeCounter = 0;
var secondsInIt;
var secondsOutPut;
var CLINK = $(".clvLinkOculta").attr("data-clvLink");
var clvlink;
var AvgTimebd;

etiqueta.innerHTML = "<b> 5 segundos para obtener el link.</b>";
boton.style.display = "none";
// boton.parentNode.replaceChild(etiqueta, boton);

function descarga() {
   etiqueta.style.display = "inline";
   etiqueta.display
   var id = window.setInterval(function () {
      contador--;
      if (contador < 0) {
         etiqueta.parentNode.replaceChild(boton, etiqueta);
         window.clearInterval(id);
         boton.style.display = "inline";
      }
      else {
         etiqueta.innerHTML = + contador.toString() + "<b> segundos para obtener el link. </b>";
      }
   }, 1000)
   boton2.style.display = "none";


}

etiqueta.style.display = "none";
var clickbtn = document.getElementById("link-btn");
clickbtn.onclick = descarga;



$(document).ready(function () {
   var counter = 0;
   setInterval(function () {
      ++counter;
   }, 1000);
   console.log(CLINK);


   $("body").on("click", ".link-btn", function (event) {
      console.log("Clickeado");
      var el = this;

      clvlink = $(this).data("id");


      // AJAX Request
      $.ajax({
         url: "../utils/read.php",
         type: "GET",
         data: { CLVLINK: clvlink },
         success: function (response) {
            var dataResult = JSON.parse(response);
            console.log(dataResult.CLVLINK);
            console.log(clvlink);
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

   $("body").on("click", ".link-generado", function (event) {
      TimeCounter = counter;
      console.log(TimeCounter);
      console.log(TimeCounter / tempInt)

      console.log("ClickeadoGenerado");
      var el = this;


      // AJAX Request
      $.ajax({
         url: "../utils/details.php",
         type: "POST",
         data: {"CLVLINK" : CLINK},
         success: function (response) {
            var dataResult = JSON.parse(response);
            console.log(dataResult.CLICKS);
            tempClicks = parseInt(dataResult.CLICKS);
            tempClicks++;
            console.log(CLINK);
         },
         complete: function () {
            $.ajax({
               url: "../utils/setClick.php",
               type: "POST",
               data: {
                  "CLICKS": tempClicks,
                  "CLVLINK": CLINK
               },
               success: function () {
                  console.log("Se ha insertado correctamente el click")
                  console.log(tempClicks);

               }
            });

            AvgTimebd = avgtime();
            $.ajax({
               url: "../utils/setAvgTime.php",
               type: "POST",
               data: { "AVGTIME": AvgTimebd,
                       "CLVLINK": CLINK
                     },

               success: function () {
                  console.log("Se ha insertado correctamente el tiempo")
               }
            });

         }


      });




   });
   //Pasos a realizar
   //1.- Realizar una petición a la base de datos para obtener AVGTIME, CLICKS y VIEW
   //Para view, con esta función definida con lo obtenido, se acumula +1 y se vuelve a hacer una petición al server para actualizar las views
   $.ajax({
      url: "../utils/details.php",
      type: "POST",
      data: {"CLVLINK" : CLINK},
      success: function (response) {
         var dataResult = JSON.parse(response);
         tempInt = parseInt(dataResult.VIEWS);
         tempInt++;
         console.log(CLINK);
         console.log(tempInt);
      },
      complete: function () {
         $.ajax({
            url: "../utils/setViewer.php",
            type: "POST",
            data: {
               "VIEWS": tempInt,
               "CLVLINK": CLINK
            },
            success: function () {
               console.log("Se ha insertado correctamente la vista")
            }
         });

      }
   });





});


function avgtime() {
   return TimeCounter / tempInt;
}

