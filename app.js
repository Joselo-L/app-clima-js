async function getWeather(){

    const city = document.getElementById("cityInput").value;
    const apiKey = "TU_API_KEY_AQUI";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("resultado").innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡️ Temperatura: ${data.main.temp}°C</p>
        <p>☁️ Clima: ${data.weather[0].description}</p>
    `;
}
