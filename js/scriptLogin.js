document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let contrasena = document.getElementById("contrasena").value;

    //se envia la peticion al backend (Spring boot) para realziar el ingreso
    const response = await fetch("http://localhost:8097/usuarios/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // body: JSON.stringify({ email, contrasena ,nombre, tipoDocumento, 
        //     numeroDocumento,fechaNacimiento, pais, ciudad, direccion, telefono  })
        body: JSON.stringify({ email, contrasena   })
        
    });
    //se evalua el response del endpoint para mostrar un mensaje
    const mensaje = document.getElementById("mensaje");
    if (response.ok) {
        mensaje.innerText = "Usuario Logeado exitosamente, espere un momento";
        mensaje.style.color = "green";

        // Redirigir a la vista de inicio del usuario después de 1 segundo
        setTimeout(() => {
            window.location.href = "inicioUsuario.html";
        }, 2000);
    } else {
        mensaje.innerText = "Error al ingresar, credenciales invalidas";
        mensaje.style.color = "red";
    }
});