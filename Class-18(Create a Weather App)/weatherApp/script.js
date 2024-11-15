const form = document.querySelector("form");
const searchField = document.querySelector(".searchField");
const currentLocation = document.querySelector('.time_location p')
const dateTime = document.querySelector('.time_location span')
const temprature = document.querySelector('.temp')
const conditionField = document.querySelector('.weather_condition span')


form.addEventListener("submit", search);

function search(e) {
  e.preventDefault();
  fetchData(searchField.value);
}

async function fetchData(target) {
  try {
    const url = `http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${target}&aqi=yes`;

    // fetch
    const respone = await fetch(url);

    const data = await respone.json();

     let currentLocation = data.location.name
     let currentCondition = data.current.condition.text
     let currentTemp = data.current.temp_c
     let currentTime = data.location.localtime

     updateValues(currentTime , currentLocation ,currentCondition , currentTemp )

    
    console.log(data);
  } catch (error) {
    console.error("Cannot Fetch");
  }
}

function updateValues(time , location , condition , temp){
     dateTime.innerText = time
     currentLocation.innerText = location
     conditionField.innerText = condition
     temprature.innerText = temp

}

fetchData("Mumbai");
