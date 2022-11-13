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
    if($("#search-bar-input").val() != "" || $("#search-bar-input").val() !=null){
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
        $("#search-bar-input").val("");
          alert("Link Agregado correctamente");
          $("#modal").modal("hide");
          // location.reload(true);
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
});
