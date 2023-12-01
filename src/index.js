let now = new Date();
let h6 = document.querySelector("h6");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
h6.innerHTML = `${day}, ${hours}:${minutes}`;

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function changeCity(event) {
  event.preventDefault();
  let cityReplaced = document.querySelector("#city");
  let cityInputElement = document.querySelector("#cityInput");
  let city = cityInputElement.value;
  let apiKey = "6516440462fa0333faf3e7f8eboaa6at";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
  cityReplaced.innerHTML = city;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", changeCity);
