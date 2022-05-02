//jshint esversion:6

let weather = {
    apiKey : "af33640ae87d8a0b0b1cf5405a06eb81",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description} = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed : " + speed + "km/h";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.body.style.backgroundImage="url('https://source.unsplash.com/1920x1080/?" + name + "')";

        // search button working
       // <img src="" alt="" class="icon"/>
        //     <div class="description">Cloudy</div>
        //     <div class="humidity">Humidity : 82%</div>
        //     <div class="wind">Wind Speed : 16km/h</div>
        
    },
    search: function(){

        this.fetchWeather(document.querySelector(".search-bar").value);
    },
    
};

document.querySelector(".search button").addEventListener("click", function(){

    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Kolkata");