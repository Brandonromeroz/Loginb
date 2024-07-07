document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "admin" && password === "password") {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
});
