navigator.geolocation.getCurrentPosition(weather,error)

function weather(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const API_KEY = "9cfa911be68d65ab77e5fbb05a1fed8b"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url).then((response) => response.json()).then((data) => {
        const weather = document.querySelector(".weather-info span:nth-child(1)")
        const weathericon = document.querySelector(".weather-info #icon")
        
        const temp = Math.round(data['main']['temp'])

        const city = data['name']
        const descrip = data['weather'][0]['description']
        const ico = data['weather'][0]['icon']
        const icon = `http://openweathermap.org/img/wn/${ico}@2x.png`

        weather.innerText = `${temp}°C  @${city} "${descrip}"`
        weathericon.setAttribute("src", icon)
    })
}

function error(){
    alert("Location service is not available")
}