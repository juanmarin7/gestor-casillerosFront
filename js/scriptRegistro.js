
document.addEventListener("DOMContentLoaded", function() {
    //se usa el correo que se guardo en sesion para mostrarlo en el input y continuar el registro
    let valCorreo = sessionStorage.getItem('email');
    console.log(valCorreo);
    if(valCorreo != "" && valCorreo.includes('@')){
        document.getElementById("email").value = valCorreo;
    }
  });

document.getElementById("registroForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    //se envian usuar
    let email = document.getElementById("email").value;
    let contrasena = document.getElementById("contrasena").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let nombre = document.getElementById("nombres").value;

    //Estos datos no los estoy usando de momento para facilitar las pruebas
    // let tipoDocumento = document.getElementById("tipoDocumento").value;
    // let numeroDocumento = document.getElementById("numeroDocumento").value;
    // let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    // let pais = document.getElementById("pais").value;
    // let ciudad = document.getElementById("ciudad").value;
    // let direccion = document.getElementById("direccion").value;
    // let telefono = document.getElementById("telefono").value;

    //comparacion de contraseñas
    if (contrasena !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    //validacion de caracteres y longitud del numero escrito
    // if (!/^[\d]{10}$/.test(telefono)) {
    //     alert("El teléfono debe contener 10 dígitos");
    //     return;
    // }

    //aca se valida que si acepten los terminos y condiciones
    if (!terms) {
        alert("Debe aceptar los términos y condiciones");
        return;
    }

    //peticion para el registro del usuario
    const response = await fetch("http://localhost:8097/usuarios/registrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // body: JSON.stringify({ email, contrasena ,nombre, tipoDocumento, 
        //     numeroDocumento,fechaNacimiento, pais, ciudad, direccion, telefono  })
        //de momento se envian solo 3 datos 
        body: JSON.stringify({ email, contrasena ,nombre  })
        
    });
    //evaluar el response para mostrar un mensaje de retorno
    const mensaje = document.getElementById("mensaje");
    if (response.ok) {
        mensaje.innerText = "Usuario registrado exitosamente";
        mensaje.style.color = "green";
    } else {
        mensaje.innerText = "Error al registrar usuario";
        mensaje.style.color = "red";
    }
});