//connection string to get the json data
var townRequest = new XMLHttpRequest();
var requestAPI = 'https://byui-cit230.github.io/weather/data/towndata.json';
townRequest.open('GET', requestAPI, true);
townRequest.send();

townRequest.onload = function() {
  let townData = JSON.parse(townRequest.responseText);
  for (i=0; i<townData.towns.length; i++) {
    if (townData.towns[i].name == "Franklin" || townData.towns[i].name == "Greenville" || townData.towns[i].name == "Springfield") {
      document.getElementById(townData.towns[i].name + "motto").innerHTML = townData.towns[i].motto;
      document.getElementById(townData.towns[i].name + "year").innerHTML = townData.towns[i].yearFounded;
      document.getElementById(townData.towns[i].name + "pop").innerHTML = townData.towns[i].currentPopulation;
      document.getElementById(townData.towns[i].name + "rain").innerHTML = townData.towns[i].averageRainfall;
    }
  }
};

