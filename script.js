function cambiarNombre() {
    let nuevoNombre = document.getElementById("nombreInput").value;
    if (nuevoNombre.trim() !== "") {
        document.getElementById("nombre").innerText = nuevoNombre;
    } else {
        alert("Por favor, escribe un nombre válido.");
    }
}