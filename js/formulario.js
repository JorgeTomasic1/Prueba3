function validacion() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var direccion = document.getElementById('direccion').value;
    var correo = document.getElementById('correo').value;
    var Ndire = document.getElementById('Ndire').value;
    var fnaci = document.getElementById('fnaci').value;
    var nmrcelular = document.getElementById('nmrcelular').value;
    if (fname.value == "") {
        alert("ingrese su primer nombre");
        fname.focus();
        return false;
    }
    if (lname.value == "") {
        alert("ingrese su segundo nombre");
        lname.focus();
        return false;
    }
    if (direccion.value == "") {
        alert("ingrese su direccion");
        direccion.focus();
        return false;
    }
    if (correo.value == "") {
        alert("ingrese su correo");
        correo.focus();
        return false;
    }
    if (Ndire.value == "") {
        alert("ingrese su numero direccion");
        Ndire.focus();
        return false;
    }
    if (fnaci.value == "") {
        alert("ingrese su fecha de nacimiento");
        fnaci.focus();
        return false;
    }
    if (nmrcelular.value == "") {
        alert("ingrese su numero celular");
        nmrcelular.focus();
        return false;
    }
}

$(function() {
    $("#btnLimpiar").clic(function() {
        $('input').val('');
    });
});