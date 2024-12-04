// 1. Get the parent container of the stars
const starsContainer = document.querySelector('.stars-container');
const rating = document.querySelector('#rating');

// 2. Add a click event listener to the container
starsContainer.addEventListener('click', function(event) {
  // 3. Check if the clicked element is a star
  if (event.target.classList.contains('star')) {
    const value = parseInt(event.target.getAttribute('data-value'));
    updateRating(value);
  }
});

// 4. Update the rating
function updateRating(value) {
  console.log(value);

  // Update the stars based on the rating
  const stars = document.querySelectorAll('.star');
  stars.forEach(function(star) {
    const starValue = parseInt(star.getAttribute('data-value'));
    console.log(starValue);
    star.classList.toggle('filled', starValue <= value);
  });

  // Update the rating display
  rating.innerText = value;
}