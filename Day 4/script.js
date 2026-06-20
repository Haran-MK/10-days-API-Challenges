const cityInput = document.getElementById("cityInput");
const weatherBtn = document.getElementById("weatherBtn");
const weatherResult = document.getElementById("weatherResult");
weatherBtn.addEventListener("click", getWeather);
async function getWeather() {
    const city = cityInput.value;
    const apiKey = "227895aafeb11709c453ed11a0902621";
    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod != 200) {
            weatherResult.innerHTML =`<p>${data.message}</p>`;
            return;
        }
        weatherResult.innerHTML = `<h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp}°C</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        weatherResult.innerHTML ="<p>Failed to load weather data.</p>";
        console.error(error);
    }
}