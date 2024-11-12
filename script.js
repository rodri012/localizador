// Función para obtener la fecha y hora actual
function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    document.getElementById("date").textContent = `Fecha: ${date}`;
    document.getElementById("time").textContent = `Hora: ${time}`;
}

// Función para obtener la ubicación
function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude.toFixed(2);
            const lon = position.coords.longitude.toFixed(2);
            document.getElementById("location").textContent = `Ubicación: Lat ${lat}, Lon ${lon}`;
        }, () => {
            document.getElementById("location").textContent = "Ubicación: No disponible";
        });
    } else {
        document.getElementById("location").textContent = "Geolocalización no soportada";
    }
}

// Llamada inicial y actualización periódica
updateDateTime();
updateLocation();
setInterval(updateDateTime, 1000); // Actualiza cada segundo

