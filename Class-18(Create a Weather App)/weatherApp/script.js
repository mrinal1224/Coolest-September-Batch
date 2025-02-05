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


// Add this function to call Google Gemini API
async function getAISuggestions(location, condition, temp) {
  const apiKey = 'AIzaSyARY1xs79e_g5h-QZAjLI8Xc-i5soD5SVI'; // Replace with your actual API key
  const prompt = `Give weather safety tips and suggestions for ${location} where the weather condition is ${condition} with a temperature of ${temp}°C.`;

  try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
              prompt: prompt,
              max_tokens: 150
          })
      });

      const data = await response.json();
      console.log(data)
      return data.choices[0]?.text || 'No suggestions available.';
  } catch (error) {
      console.error('AI Suggestion Error:', error);
      return 'Unable to fetch AI suggestions at the moment.';
  }
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


     const aiSuggestions = await getAISuggestions(currentLocation, currentCondition, currentTemp);
     document.querySelector('.ai_suggestions').innerText = aiSuggestions;

    
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

// Add AI suggestions section to the HTML dynamically
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.container');
  const aiSuggestionDiv = document.createElement('div');
  aiSuggestionDiv.className = 'ai_suggestions';
  aiSuggestionDiv.style.color = 'white';
  aiSuggestionDiv.style.marginTop = '20px';
  aiSuggestionDiv.innerText = 'AI suggestions will appear here.';
  container.appendChild(aiSuggestionDiv);

  fetchData("Mumbai"); // Initial fetch
});


fetchData("Mumbai");
