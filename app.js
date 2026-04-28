const apiKey = "d5e15d72341db0c1c31ff44a835eecb4";

document.getElementById("searchBtn").addEventListener("click", getWeather);

async function getWeather(){
    const city = document.getElementById("cityInput").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    try{
        const response = await fetch(url);
        const data = await response.json();

        if(data.cod !== 200){
            document.getElementById("resultado").innerHTML = "❌ Ciudad no encontrada";
            return;
        }

        document.getElementById("resultado").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡️ Temperatura: ${data.main.temp}°C</p>
            <p>☁️ Clima: ${data.weather[0].description}</p>
        `;
    }
    catch(error){
        document.getElementById("resultado").innerHTML = "⚠️ Error al consultar API";
    }
}
