$(document).ready(function () {
    var clvuser = $(".clvuserOculta").attr("data-clvuser");
    $("#UpdatePassword").on("click", function (){
    if ($("#passwordActual").val() != "" ) {
        if($("#newPassword").val() != ""){
            if($("#confirmNewPassword").val() != ""){
                if($("#newPassword").val() === $("#confirmNewPassword").val()){
                    $.ajax({
                        url: "utils/updatePassword.php",
                        type: "GET",
                          //PENDIENTE
                        data: { PASSWORD: $("#passwordActual").val(), CLVUSER: clvuser, NEWPASSWORD: $("#newPassword").val()},
                        success: function (response){
                            console.log(response);
                            if(response == 1){
                                alert('La contraseña ha sido actualizada');
                                window.location.href = '/shorty/index.html';
                            } else {
                                alert('La contraseña ingresada en:"Contraseña Actual" no corresponde a la contraseña.');
                            }
                        }
                      });
                } else {
                    alert("Los campos 'Nueva Contraseña' y 'Confirmar Nueva Contraseña' deben ser iguales");
                }           
            } else {
                alert("Favor de rellenar el campo: Confirmar Nueva Contraseña");
            }
        } else{
            alert("Favor de rellenar el campo: Nueva Contraseña");
        }
    } else {
        alert("Favor de rellenar el campo: Contraseña Actual");
    }
})
})