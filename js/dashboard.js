$(document).ready(function () {
  var clvuser = $(".clvuserOculta").attr("data-clvuser");

  function generateClvLink() {
    $.ajax({
      type: "GET",
      url: "utils/generator.php",
      success: function (data) {
        return data;
      },
    });
  }

  //Button Add new link
  $(".icon-add").click(function () {
    console.log("Boton icon-add Clickeado");

    $("#modal").modal("show");
    if (
      $("#search-bar-input").val() != "" ||
      $("#search-bar-input").val() != null
    ) {
      $("#link").val($("#search-bar-input").val());
    }

    var link = $("#link").val();
    var nombre = $("#nombre").val();

    // if(link == null || link == "" || nombre == null || nombre == "") {
    //     alert("No puede guardar campos vacios");
    //     return;
    // }
    // var clvlink = $.ajax({
    //     type: 'POST',
    //     url: "utils/generator.php",

    //     context: document.body,
    //     global: false,
    //     async:false,
    //     success: function(data) {
    //         return data;
    //     }
    // }).responseText;

    // console.log(clvlink);

    // var clvuser = 1;

    // $.ajax({
    //   type: "POST",
    //   contentType: "application/json; charset=utf-8",
    //   url: "utils/insert.php",
    //   data: JSON.stringify({
    //     clvlink: clvlink,
    //     clvuser: clvuser,
    //     name: nombre,
    //     avgtime: 0,
    //     views: 0,
    //     clicks: 0,
    //     url: link,
    //   }),
    //   cache: false,
    //   success: function (result) {
    //     alert("Link Agregado correctamente");
    //     // location.reload(true);
    //   },
    //   error: function (err) {
    //     alert(err);
    //   },
    // });
  });

  //Button search link
  $(".icon-search").click(function () {
    console.log("Boton icon-add Clickeado");
    if (
      $("#search-bar-input").val() != "" ||
      $("#search-bar-input").val() != null
    ) {
      $(".cards-content").empty()
      $.getJSON("utils/search.php?query=" + $("#search-bar-input").val(), function (json) {
        var card = [];
    
        if (json.length > 0) {
          for (var i = 0; i < json.length; i++) {
            var link = json[i];
            card.push('<div class="custom-card">');
            card.push("<br>");
            card.push("<br>");
            card.push('<div class="points-img">');
            card.push(
              '<img src="img/3-points-icon.png" alt="Points" height="80px" />'
            );
            card.push("</div>");
            card.push('<div class="name-link">');
            card.push("<h1>" + link.NAME + "</h1>");
            card.push("<br>");
            card.push('<div class="link-cut">');
            card.push(
              '<a class= "link-shorty" href="sh/' +
                link.CLVLINK +
                '">http://shortyurl.tk/sh/' +
                link.CLVLINK +
                "</a>"
            );
            card.push(" </div>");
            card.push("</div>");
            card.push('<div class="counter">' + link.VIEWS + "</div>");
            card.push('<div class="eye-icon">');
            card.push(
              '<img src="img/eye-icon.png" alt="eye" height="30px" width="35px" />'
            );
            card.push(" </div>");
            card.push('<div class="copy-icon">');
            card.push(
              '<img src="img/copy-icon.png" alt="copy" height="30px" width="30px" />'
            );
            card.push("</div>");
            card.push('<div class="edit-icon" alt="edit" data-link="'+link.URL+'" data-name="'+link.NAME+'"  data-clvlink="'+link.CLVLINK+'">');
            card.push('<img src="img/edit-icon.png" height="30px" width="30px" />');
            card.push("</div>");
            card.push('<div class="trash-icon" alt="trash">');
            card.push(
              '<a href="#" class="delete" data-id="' +
                link.CLVLINK +
                '"><img src="img/trash-icon.png" height="30px" width="30px" /></a>'
            );
            card.push("</div>");
            card.push("</div>");
            card.push("<br>");
          }
        } else {
          card.push(
            '<div class="custom-card"><center><br><br><h2>No existen links para mostrar</h2></center></div>'
          );
        }
        
        $(".cards-content").append($(card.join("")));

      });
    }



  });

  //Buton save new link
  $("#butsave").on("click", function () {
    var card = [];
    var clvlink = $.ajax({
      type: "POST",
      url: "utils/generator.php",

      context: document.body,
      global: false,
      async: false,
      success: function (data) {
        return data;
      },
    }).responseText;
    // $("#butsave").attr("disabled", "disabled");
    var link = $("#link").val();
    var nombre = $("#nombre").val();
    // var clvuser = $(".clvuserOculta").attr("data-clvuser");
    //console.log(clvuser);
    if (link != "" && nombre != "") {
      $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "utils/insert.php",
        data: JSON.stringify({
          clvlink: clvlink,
          clvuser: clvuser,
          name: nombre,
          avgtime: 0,
          views: 0,
          clicks: 0,
          url: link,
        }),
        cache: false,
        success: function (result) {
          var dataResult = JSON.parse(result);
          $("#search-bar-input").val("");
          alert("Link Agregado correctamente");
          console.log($('.custom-card').length);
          console.log($('.empty-card').length)
          if ($('.empty-card').length == 1 && $('.custom-card').length == 0) {
            $(".cards-content").empty();
            console.log("PRIMER IF");
          }else if($('.custom-card').length > 0 ){
            
            console.log("SEGUNDO IF");
          }


          $("#modal").modal("hide");
          // location.reload(true);

          //Generar nuevo custom-card

          card.push('<div class="custom-card">');
          card.push("<br>");
          card.push("<br>");
          card.push('<div class="points-img">');
          card.push(
            '<img src="img/3-points-icon.png" alt="Points" height="80px" />'
          );
          card.push("</div>");
          card.push('<div class="name-link">');
          card.push("<h1>" + nombre + "</h1>");
          card.push("<br>");
          card.push('<div class="link-cut">');
          card.push(
            '<a class="link-shorty" href="sh/' +
              dataResult.clvlink +
              '">http://shortyurl.tk/sh/' +
              dataResult.clvlink +
              "</a>"
          );
          card.push(" </div>");
          card.push("</div>");
          card.push('<div class="counter">' + 0 + "</div>");
          card.push('<div class="eye-icon">');
          card.push(
            '<img src="img/eye-icon.png" alt="eye" height="30px" width="35px" />'
          );
          card.push(" </div>");
          card.push('<div class="copy-icon">');
          card.push(
            '<img src="img/copy-icon.png" alt="copy" height="30px" width="30px" />'
          );
          card.push("</div>");
          card.push('<div class="edit-icon" alt="edit" data-link="'+dataResult.url+'" data-name="'+dataResult.name+'" data-clvlink="'+dataResult.clvlink+'">');
          card.push(
            '<img src="img/edit-icon.png" height="30px" width="30px" />'
          );
          card.push("</div>");
          card.push('<div class="trash-icon" alt="trash">');
          card.push(
            '<a href="#" class="delete" data-id="' +
              clvlink +
              '"><img src="img/trash-icon.png" height="30px" width="30px" /></a>'
          );
          card.push("</div>");
          card.push("</div>");
          card.push("<br>");

          var total_links = parseInt($(".statistics-counter-links h2").text());
          $(".cards-content").prepend($(card.join("")));

          $(".statistics-counter-links h2").html(total_links + 1);
          // $(".statistics-counter-links h2").html(json["statistics"]["LINKS"]);
        },
        error: function (err) {
          alert(err);
        },
      });
    } else {
      alert("Porfavor llene todos los campos!");
    }
  });

  //Cerrar modal New link
  $("#cerrar").on("click", function (e) {
    $("#modal").modal("hide");

    $("#success").hide();
    e.stopPropagation();
  });


  $("#cerrar2").on("click", function (e) {
    $("#modalUpdate").modal("hide");

    $("#success").hide();
    e.stopPropagation();
  });

  //Limpiar modal cuando se cierra
  $("#modal").on("hidden.bs.modal", function () {
    $(this).find("form")[0].reset();
    $("#success").hide();
  });

  $("#modalUpdate").on("hidden.bs.modal", function () {
    $(this).find("form")[0].reset();
    $("#success").hide();
  });

  $.getJSON("utils/read.php?CLVUSER=" + clvuser, function (json) {
    var card = [];

    if (json["links"].length > 0) {
      for (var i = 0; i < json["links"].length; i++) {
        var link = json["links"][i];
        card.push('<div class="custom-card">');
        card.push("<br>");
        card.push("<br>");
        card.push('<div class="points-img">');
        card.push(
          '<img src="img/3-points-icon.png" alt="Points" height="80px" />'
        );
        card.push("</div>");
        card.push('<div class="name-link">');
        card.push("<h1>" + link.NAME + "</h1>");
        card.push("<br>");
        card.push('<div class="link-cut">');
        card.push(
          '<a class= "link-shorty" href="sh/' +
            link.CLVLINK +
            '">http://shortyurl.tk/sh/' +
            link.CLVLINK +
            "</a>"
        );
        card.push(" </div>");
        card.push("</div>");
        card.push('<div class="counter">' + link.VIEWS + "</div>");
        card.push('<div class="eye-icon">');
        card.push(
          '<img src="img/eye-icon.png" alt="eye" height="30px" width="35px" />'
        );
        card.push(" </div>");
        card.push('<div class="copy-icon">');
        card.push(
          '<img src="img/copy-icon.png" alt="copy" height="30px" width="30px" />'
        );
        card.push("</div>");
        card.push('<div class="edit-icon" alt="edit" data-link="'+link.URL+'" data-name="'+link.NAME+'" data-clvlink="'+link.CLVLINK+'">');
        card.push('<img src="img/edit-icon.png" height="30px" width="30px" />');
        card.push("</div>");
        card.push('<div class="trash-icon" alt="trash">');
        card.push(
          '<a href="#" class="delete" data-id="' +
            link.CLVLINK +
            '"><img src="img/trash-icon.png" height="30px" width="30px" /></a>'
        );
        card.push("</div>");
        card.push("</div>");
        card.push("<br>");
      }
    } else {
      card.push(
        '<div class="empty-card"><center><br><br><h2>No existen links para mostrar</h2></center></div>'
      );
    }
    $(".cards-content").append($(card.join("")));

    $(".statistics-counter-links h2").html(json["statistics"]["LINKS"]);
    $(".statistics-counter-views h2").html(json["statistics"]["views"]);
    $(".statistics-counter-clicks h2").html(json["statistics"]["clicks"]);
    var avgtimeShort = json["statistics"]["avgtime"].toString().substring(0,4);
    
    $(".statistics-counter-time h2").html(avgtimeShort + " s");
    
  });

  //Delete Link
  $("body").on("click", ".delete", function (event) {
    var el = this;
    var card = [];
    var deleteid = $(this).data("id");

    var confirmalert = confirm("Seguro que desea borrar?");
    if (confirmalert == true) {
      // AJAX Request
      $.ajax({
        url: "utils/delete.php",
        type: "POST",
        data: { CLVLINK: deleteid },
        success: function (response) {
          console.log(response);

          if (response == 1) {
            // Remove row from HTML Table
            $(el).closest(".custom-card").css("background", "#0078d7");
            $(el)
              .closest(".custom-card")
              .fadeOut(800, function () {
                $(this).remove();

                if ($('.custom-card').length == 0 ) {
                  $(".cards-content").empty();
                  card.push(
                    '<div class="empty-card"><center><br><br><h2>No existen links para mostrar</h2></center></div>'
                  );
                  $(".cards-content").append($(card.join("")));
                }
              });
              
          } else {
            console.log(deleteid);
            alert("Clave Link Invalida.");
          }
        },
      });
    }
  });

  $("body").on("click", ".copy-icon", function (event) {
    var el = this;
    //  var confirmalert = confirm($(copyButton).closest(".link-cut").find("a"));
    // console.log($(el).closest(".custom-card").find(".link-shorty").text());
    var aux = document.createElement("input");
    aux.setAttribute(
      "value",
      "localhost/shorty/"+$(el).closest(".custom-card").find(".link-shorty").attr("href")
    );
    //  aux.attr("value", $( "link-cut-gdqwXB" ).find( "a" ).innerHTML);

    // aux.val($( ".link-cut-gdqwXB" ).find( "a" ).text());
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    $(".toast").toast("show");
  });


  var aux2 = document.createElement("input");

  $("body").on("click", ".edit-icon", function () {
    $("#modalUpdate").modal("show");

    var _self = $(this);
    var link = _self.data("link");
    var name = _self.data("name");
    var clvlink = _self.data("clvlink");
    console.log(name+link+clvlink);
    $("#nombre2").val(name);
    $("#link2").val(link);

    $('#butupdate').attr('data-link', link);
    $('#butupdate').attr('data-name', name);
    $('#butupdate').attr('data-clvlink', clvlink);




    
    aux2.setAttribute(
      "value",
      clvlink
    );
    aux2.setAttribute(
      "id",
      "clvOculta"
    );
    
    var parent = document.getElementById("clvlinkOculta");
    parent.appendChild(aux2);
    // document.body.removeChild(aux);
   

  });

  
  $("#butupdate").on("click", function () {
    
    var _self = $(this);
    var link = $("#link2").val();
    var name = $("#nombre2").val();
    var clvlink2 = $("#clvOculta").val();
    console.log("Boton update actualiza ID "+ aux2.value);
    $.ajax({
      url: "utils/updateDataLink.php",
      type: "POST",
      data: { clvlink: clvlink2, name:name, link:link },
      success: function (response) {
        console.log(response);

        if (response == 1) {
          // Remove row from HTML Table
         alert("Modificado con exito");
         $("#modalUpdate").modal("hide");
         $(".cards-content").empty();
         $.getJSON("utils/read.php?CLVUSER=" + clvuser, function (json) {
          var card = [];
      
          if (json["links"].length > 0) {
            for (var i = 0; i < json["links"].length; i++) {
              var link = json["links"][i];
              card.push('<div class="custom-card">');
              card.push("<br>");
              card.push("<br>");
              card.push('<div class="points-img">');
              card.push(
                '<img src="img/3-points-icon.png" alt="Points" height="80px" />'
              );
              card.push("</div>");
              card.push('<div class="name-link">');
              card.push("<h1>" + link.NAME + "</h1>");
              card.push("<br>");
              card.push('<div class="link-cut">');
              card.push(
                '<a class= "link-shorty" href="sh/' +
                  link.CLVLINK +
                  '">http://shortyurl.tk/sh/' +
                  link.CLVLINK +
                  "</a>"
              );
              card.push(" </div>");
              card.push("</div>");
              card.push('<div class="counter">' + link.VIEWS + "</div>");
              card.push('<div class="eye-icon">');
              card.push(
                '<img src="img/eye-icon.png" alt="eye" height="30px" width="35px" />'
              );
              card.push(" </div>");
              card.push('<div class="copy-icon">');
              card.push(
                '<img src="img/copy-icon.png" alt="copy" height="30px" width="30px" />'
              );
              card.push("</div>");
              card.push('<div class="edit-icon" alt="edit" data-link="'+link.URL+'" data-name="'+link.NAME+'" data-clvlink="'+link.CLVLINK+'">');
              card.push('<img src="img/edit-icon.png" height="30px" width="30px" />');
              card.push("</div>");
              card.push('<div class="trash-icon" alt="trash">');
              card.push(
                '<a href="#" class="delete" data-id="' +
                  link.CLVLINK +
                  '"><img src="img/trash-icon.png" height="30px" width="30px" /></a>'
              );
              card.push("</div>");
              card.push("</div>");
              card.push("<br>");
            }
          } else {
            card.push(
              '<div class="empty-card"><center><br><br><h2>No existen links para mostrar</h2></center></div>'
            );
          }
          $(".cards-content").append($(card.join("")));
      
          $(".statistics-counter-links h2").html(json["statistics"]["LINKS"]);
          $(".statistics-counter-views h2").html(json["statistics"]["views"]);
          $(".statistics-counter-clicks h2").html(json["statistics"]["clicks"]);
          var avgtimeShort = json["statistics"]["avgtime"].toString().substring(0,4);
   
         
          $(".statistics-counter-time h2").html(avgtimeShort + " s");
        });   
        } else {
          console.log(deleteid);
          alert("Ocurrio un error al actualizar la información");
        }
      },
    });
  });



});
