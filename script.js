function showWeatherDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'feb4f7810621947469de6c6f12719d95';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';

    //https://api.openweathermap.org/data/2.5/weather?q=Brooklyn&appid=feb4f7810621947469de6c6f12719d95&units=metric

    console.log(apiUrl);
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                                        <h2>Weather in ${data.name}</h2>
                                        <p>Temperature: ${data.main.temp} &#8451;</p>
                                        <p>Weather: ${data.weather[0].description}
                                    `;
        })
        .catch(error =>{
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });

    document.getElementById("weatherForm").addEventListener('submit',showWeatherDetails);
}