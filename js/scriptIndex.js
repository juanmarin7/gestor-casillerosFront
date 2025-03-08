document.getElementById("registroForm").addEventListener("submit", function(event) {
    // cada archivo tiene su propio archivo js para una facil migracion a un framework
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    // const password = document.getElementById("password").value;
    
    //se almacena el correo ingresado en el inicio para llevarlo al formulario de registro
    sessionStorage.setItem("email", email);
    //sessionStorage.setItem("password", password);
    
    window.location.href = "/pages/registro.html";
});
