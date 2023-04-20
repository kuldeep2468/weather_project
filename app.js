const express = require("express");
const https = require("https");
const apiKey = '3e6b0feff864b38c68e52f462a3c1eef'
const app= express();

app.get("/", function(req, res){
    const url = ("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=3e6b0feff864b38c68e52f462a3c1eef")
https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp
        const weatherDescription = weatherData.weather[0].description
        console.log(temp);
        console.log(weatherData);
        console.log(weatherData);
    })
})
    res.send("Server is up and running");
})

app.listen (3000, function(){
    console.log("Server is on running on port 3000");
})