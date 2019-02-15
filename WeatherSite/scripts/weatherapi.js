//connection string to get the json data
var weatherRequest = new XMLHttpRequest();
var requestAPI = 'https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=55cd57b5201bfb25f0475b96f921e761';
weatherRequest.open('GET', requestAPI, true);
weatherRequest.send();

weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);
  document.getElementById("current-temp").innerHTML = Math.round(weatherData.main.temp);
  let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
  document.getElementById('weatherimage').src= imagesrc;
};
