$(document).ready(function () {
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
    var clvuser = 1;
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
          card.push('<a href="#">shorty.com/' + dataResult.clvlink + "</a>");
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
          card.push('<div class="edit-icon" alt="edit">');
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


          $(".cards-content").append($(card.join("")));
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

  //Limpiar modal cuando se cierra
  $("#modal").on("hidden.bs.modal", function () {
    $(this).find("form")[0].reset();
    $("#success").hide();
  });

  $.getJSON("utils/read.php?CLVUSER=1", function (json) {
    var card = [];
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
      card.push('<a href="#">shorty.com/' + link.CLVLINK + "</a>");
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
      card.push('<div class="edit-icon" alt="edit">');
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
    $(".cards-content").append($(card.join("")));

    $(".statistics-counter-links h2").html(json["statistics"]["LINKS"]);
    $(".statistics-counter-views h2").html(json["statistics"]["views"]);
    $(".statistics-counter-clicks h2").html(json["statistics"]["clicks"]);
    $(".statistics-counter-time h2").html(json["statistics"]["avgtime"] + " s");
  });

  //Delete Link
  $("body").on("click", ".delete", function (event) {
    var el = this;

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
            $(el).closest(".custom-card").css("background", "#89a203");
            $(el)
              .closest(".custom-card")
              .fadeOut(800, function () {
                $(this).remove();
              });
          } else {
            console.log(deleteid);
            alert("Clave Link Invalida.");
          }
        },
      });
    }
  });
});
