const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API Key
const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');

searchButton.addEventListener('click', function () {
  const city = cityInput.value.trim();
  if (city) {
    getWeatherData(city);
  } else {
    alert('Please enter a city name');
  }
});

async function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    alert('Error fetching weather data: ' + error.message);
  }
}

function displayWeatherData(data) {
  const cityName = document.getElementById('city-name');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');
  const humidity = document.getElementById('humidity');
  const windSpeed = document.getElementById('wind-speed');

  cityName.textContent = data.name;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  description.textContent = `Weather: ${data.weather[0].description}`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}