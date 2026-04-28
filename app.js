const apiKey = "d5e15d72341db0c1c31ff44a835eecb4";

document.getElementById("searchBtn").addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value;

    try{
        // 1️⃣ Buscar coordenadas de la ciudad
        const geoUrl = `https://api.allorigins.win/raw?url=https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
        const geoResponse = await fetch(geoUrl);
        const geoData = await geoResponse.json();

        if(geoData.length === 0){
            document.getElementById("resultado").innerHTML = "❌ Ciudad no encontrada";
            return;
        }

        const lat = geoData[0].lat;
        const lon = geoData[0].lon;

        // 2️⃣ Consultar clima por coordenadas
       const weatherUrl = `https://api.allorigins.win/raw?url=https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;
        const weatherResponse = await fetch(weatherUrl);
        const data = await weatherResponse.json();

        document.getElementById("resultado").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡️ Temperatura: ${data.main.temp}°C</p>
            <p>☁️ Clima: ${data.weather[0].description}</p>
        `;
    }
    catch(error){
        document.getElementById("resultado").innerHTML = "⚠️ Error al consultar API";
    }
});
