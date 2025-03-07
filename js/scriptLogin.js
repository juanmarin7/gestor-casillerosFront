document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let contrasena = document.getElementById("contrasena").value;

    const response = await fetch("http://localhost:8097/usuarios/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // body: JSON.stringify({ email, contrasena ,nombre, tipoDocumento, 
        //     numeroDocumento,fechaNacimiento, pais, ciudad, direccion, telefono  })
        body: JSON.stringify({ email, contrasena   })
        
    });

    const mensaje = document.getElementById("mensaje");
    if (response.ok) {
        mensaje.innerText = "Usuario Logeado exitosamente";
        mensaje.style.color = "green";
    } else {
        mensaje.innerText = "Error al ingresar ";
        mensaje.style.color = "red";
    }
});