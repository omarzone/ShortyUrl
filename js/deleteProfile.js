$(document).ready(function () {

    $("#DeleteProfile").on("click", function (){
    
    var el = this;
    var clvuser = $(".clvuserOculta").attr("data-clvuser");
    var deleteid = $(this).data("id");

    var confirmalert = confirm("Seguro que desea borrar?");
    if (confirmalert == true) {
      // AJAX Request
      $.ajax({
        url: "utils/deleteProfile.php",
        type: "POST",
          //PENDIENTE
        data: { CLVUSER: clvuser },
        success: function (response) {
          console.log(response);
          window.location.href = '/shorty/index.html';
        },
      });
    };
})
})