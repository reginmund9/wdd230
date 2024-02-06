// Selecting HTML elements
const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.querySelector('figcaption');

// Valid URL string for the OpenWeatherMap API

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Trier,Germany&units=imperial&appid=cbea8e3eb32487df0b2b7a106681ead9';

// Define an asynchronous function to fetch data from the API
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Testing only
      displayResults(data); // Call the displayResults function with fetched data
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Invoke the apiFetch function
apiFetch(); 

// Define the displayResults function to update HTML content with fetched data
function displayResults(data) {
  // Update current temperature
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  // Update weather icon source
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', data.weather[0].description);
  // Update weather description
  captionDesc.textContent = `${data.weather[0].description}`;
}
