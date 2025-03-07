
document.addEventListener("DOMContentLoaded", function() {
    let valCorreo = sessionStorage.getItem('email');
    console.log(valCorreo);
    if(valCorreo != "" && valCorreo.includes('@')){
        document.getElementById("email").value = valCorreo;
    }
  });

document.getElementById("registroForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let contrasena = document.getElementById("contrasena").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let nombre = document.getElementById("nombres").value;
    let tipoDocumento = document.getElementById("tipoDocumento").value;
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let pais = document.getElementById("pais").value;
    let ciudad = document.getElementById("ciudad").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;

    numeroDocumento
    if (contrasena !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // if (!/^[\d]{10}$/.test(telefono)) {
    //     alert("El teléfono debe contener 10 dígitos");
    //     return;
    // }

    if (!terms) {
        alert("Debe aceptar los términos y condiciones");
        return;
    }

    const response = await fetch("http://localhost:8097/usuarios/registrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // body: JSON.stringify({ email, contrasena ,nombre, tipoDocumento, 
        //     numeroDocumento,fechaNacimiento, pais, ciudad, direccion, telefono  })
        body: JSON.stringify({ email, contrasena ,nombre  })
        
    });

    const mensaje = document.getElementById("mensaje");
    if (response.ok) {
        mensaje.innerText = "Usuario registrado exitosamente";
        mensaje.style.color = "green";
    } else {
        mensaje.innerText = "Error al registrar usuario";
        mensaje.style.color = "red";
    }
});