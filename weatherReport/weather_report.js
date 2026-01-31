// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

function showweatherDetails(event) {
    event.preventDefault();
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiKey = 'f6e926df74c49da19ec010689e0734ca'; 
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    try {
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = 
            `<h2>Weather in ${data.timezone} timezone</h2>
            <p>Temperature: ${data.current.temp} &#8451;</p>
            <p>Weather: ${data.current.weather[0].description}</p>`
        })
    } catch (error) {
        console.error("Error retrieving weather data: ", error);
    }
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

/* The API you provided does not work. I tried an alternate API and that also did not work. I do not want to pay, so I will have to leave it like this. */