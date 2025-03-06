
document.addEventListener("DOMContentLoaded", function() {
    let valCorreo = sessionStorage.getItem('email');
    console.log(valCorreo);
    if(valCorreo != "" && valCorreo.includes('@')){
        document.getElementById("email").value = valCorreo;
    }
  });

document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    //let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let telefono = document.getElementById("telefono").value;
    let terms = document.getElementById("terms").checked;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    if (!/^[\d]{10}$/.test(telefono)) {
        alert("El teléfono debe contener 10 dígitos");
        return;
    }

    if (!terms) {
        alert("Debe aceptar los términos y condiciones");
        return;
    }

    alert("Registro exitoso!");
    this.reset();
});
