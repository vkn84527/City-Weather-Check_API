//https://codeburst.io/build-a-simple-weather-app-with-node-js-in-just-16-lines-of-code-32261690901d

let request = require('request');
const argv = require('yargs').argv;
//Yargs works by exposing any variables we use in the console onto the argv object. 
//yarga allows us to define variables from the command line.
let apiKey = 'e49fa4160dbf41103273f73e8fc926da';
let city = argv.c ||'darbhanga';
//let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//  OpenWeatherMap actually defaults its temperature to Kelvin

//units=metric   --- for Celsius
//units=imperial -- for Fahrenheit

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body){
  if(err){
    console.log('error:', error);
  } else {
    
    let weather = JSON.parse(body) // convert the jumbled text that’s returned (called JSON)
    console.log(weather)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message)



    // if(weather.main.temp){
    //     console.log(message)
    // }
//     else{
//     console.log("Not found City");
//   }}
  }
});