// Section where HTML elements are being selected from the DOM
// The API key is free and won't charge me anything but just 
// to follow best practices I didn't add it here but it works 
// when I enter the key and test it for now, it's just a placeholder

const apiKey = 'OPEN_WEATHER_API_KEY';
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

// The function that fetches the data using the API Key, and displays an error message if the data can't be retrieved

function fetchWeatherData(query) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`)
        .then(response => response.json()).then(data => {
            locale.textContent = data.name;
            icon.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;
            temperature.textConent = `${data.main.temp}°C`;
            description.textContent = data.weather[0].description;
        }).catch(error => console.error('Error fetching weather data:', error));
    }

