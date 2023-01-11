const api = {
  key: "6aa96f9b0d0d34ee6efd29438b57baae",
  baseURL: "https://api.openweathermap.org/data/2.5/",
};

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(event) {
  if (event.keyCode === 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  const url = `${api.baseURL}weather?q=${query}&units=imperial&appid=${api.key}`;
  fetch(url)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}
function displayResults(weather) {
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}`;

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°f</span>`;
}
