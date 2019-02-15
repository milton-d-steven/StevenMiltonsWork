var lotemp = document.getElementById("lotemp").innerHTML;
var hitemp = document.getElementById("hitemp").innerHTML;
var wspeed = document.getElementById("wind").innerHTML;
var avgtemp = (Number(lotemp) + Number(hitemp)) / 2;
var wctemp = 35.74 + (0.6215 * Number(avgtemp)) - (35.75 * (Math.pow(Number(wspeed), 0.16))) + ((0.4275 * Number(avgtemp)) * Math.pow(Number(wspeed), 0.16));
document.getElementById("wchill").innerHTML = Math.round(wctemp);

