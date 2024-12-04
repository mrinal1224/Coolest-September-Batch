const correctAnswer = ["D", "B", "C", "B", "D"];

const quizForm = document.querySelector(".quiz-form");
const questions = document.querySelectorAll('.question')
const result = document.querySelector('.result')



quizForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0

  const userAnswers = [
    quizForm.q1.value, 
    quizForm.q2.value, 
    quizForm.q3.value, 
    quizForm.q4.value, 
    quizForm.q5.value, 
  ];

  userAnswers.forEach(function(answer , index){
  if(answer===correctAnswer[index]){
    score++
    questions[index].classList.add('correct')
  }
  else{
    questions[index].classList.add('wrong')
  }
 })

 result.classList.remove('hide')

 result.querySelector('.score-result').innerText = `You scored ${score}/5`

  

});
