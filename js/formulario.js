function enviarFormulario() {
    alert("enviando formulario...")
}

function validacion() {
    var fname = document.getElementById('txtNombreUsuario');
    var lname = document.getElementById('txtNombreSegundo');
    var direccion = document.getElementById('txtDireccion');

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
}