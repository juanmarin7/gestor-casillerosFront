document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    // const password = document.getElementById("password").value;
    
    sessionStorage.setItem("email", email);
    //sessionStorage.setItem("password", password);
    
    window.location.href = "/pages/registro.html";
});
