// Section where HTML elements are being selected from the DOM

const apiKey = '4ab12272754d9bc2b94909bb5e2d7fca';
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-bar');
const locale = document.getElementById('location');
const icon = document.getElementById('icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

// This is where the search-button element is configured. When it is clicked
// It runs the function below to fetch the value entered, then calls the fetchWeather function

searchButton.addEventListener(
    'click', () => {
        const query = searchInput.value;
        fetchWeatherData(query);
    }
);

// This function here allow the user to get the forecast of their location by pressing the Enter key

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const query = searchInput.value;
        fetchWeatherData(query);
    }
});

// The function that fetches the data using the API Key, and logs an error in the console if the data can't be retrieved

function fetchWeatherData(query) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`)
        .then(response => response.json()).then(data => {
            if (data.cod !== 200) {
                showError('Invalid location, unable to get weather data');
                return;
            }
            locale.textContent = data.name;
            icon.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;
            temperature.textContent = `${data.main.temp}°C`;
            description.textContent = data.weather[0].description;
        }).catch(error => console.error('Error fetching weather data:', error));
        showError('Invalid location, unable to get weather data');
    }

    function showError(message) {
        locale.textContent = ''
        icon.innerHTML = '';
        temperature.textContent = '';
        description.textContent = message;
    }

