

const form = document.querySelector('form')
const searchField = document.querySelector('.searchField')

form.addEventListener('submit' , search)

function search(e){
    e.preventDefault()
   fetchData(searchField.value)
}

async function fetchData(target){
    try {
        const url  =`http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${target}&aqi=yes`

        // fetch
        const respone = await fetch(url)

        const data = await respone.json()

        

        console.log(data)
        
        
    } catch (error) {
        console.error('Cannot Fetch')
    }
}

fetchData('Mumbai')