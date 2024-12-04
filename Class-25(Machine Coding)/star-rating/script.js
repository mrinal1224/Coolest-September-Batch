/***
 *
 * 1. Get all the stars
 * 2. add a click event on each star
 * 3. when the star is clicked
 *  a. get the data-attribute of the star
 *  b. update the rating based on the data-attribute
 * c. update the stars based on the rating - change the colors of the stars
 */

const stars = document.querySelectorAll('.star')
const rating = document.querySelector('#rating')


stars.forEach(function(star){
 star.addEventListener('click' , function(){
      const value = parseInt(star.getAttribute('data-value'))
      updateRating(value)
 })
})

function updateRating(value){
    console.log(value)
   stars.forEach(function(star){
      const starValue = parseInt(star.getAttribute("data-value"))
      console.log(starValue)
      star.classList.toggle('filled' , starValue <=value )
       
   })

  rating.innerText = value

}






