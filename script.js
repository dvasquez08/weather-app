const apiKey = 'OPEN_WEATHER_API_KEY';
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-bar');
const locale = document.getElementById('location');
const icon = document.getElementById('icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

searchButton.addEventListener(
    'click', () => {
        const query = searchInput.value;
        fetchWeatherData(query);
    }
);

function fetchWeatherData(query) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`)
        .then(response => response.json()).then(data => {
            locale.textContent = data.name;
            icon.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;
            temperature.textConent = `${data.main.temp}°C`;
            description.textContent = data.weather[0].description;
        }).catch(error => console.error('Error fetching weather data:', error));
    }

