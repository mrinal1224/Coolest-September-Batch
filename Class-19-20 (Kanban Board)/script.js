// Selectors

const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const textArea = document.querySelector(".text-area");
const mainCont = document.querySelector('.main-cont')
const allPriorityColors = document.querySelectorAll('.priority-color')
const toolBoxColors = document.querySelectorAll('.color-box')






// local variables
let modalPriorityColor ='lightpink'
const lockClose = "fa-lock";
const lockOpen = "fa-lock-open";
const colors = ['lightpink' , 'lightgreen' , 'lightblue' , 'black']





let addBtnFlag = false;

addBtn.addEventListener("click", function () {
  addBtnFlag = !addBtnFlag;

  if (addBtnFlag) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

// Filtering of tickets according to Color
toolBoxColors.forEach(function(colorElem){
  colorElem.addEventListener('click' , function(){
      const allTicktes = document.querySelectorAll('.ticket-cont')
      // console.log(allTicktes)
      const selectedColor = colorElem.classList[0]
      // console.log(selectedColor)

      allTicktes.forEach(function(ticket){
        const tikcetColorBand = ticket.querySelector('.ticket-color')
        console.log(tikcetColorBand)
        if(tikcetColorBand.style.backgroundColor==selectedColor){
          ticket.style.display='block'
        }
        else{
          ticket.style.display ='none'
        }
      })
     
  })
  colorElem.addEventListener('dblclick' , function(){
    const allTicktes = document.querySelectorAll('.ticket-cont')
    allTicktes.forEach(function(ticket){
      ticket.style.display='block'
    })
  })
})


// Changing Task Priority on colorBand
function handleColor(ticket){
  const ticketColorBand = ticket.querySelector('.ticket-color')
  console.log(ticketColorBand)
  ticketColorBand.addEventListener('click' , function(){
    const currentColor = ticketColorBand.style.backgroundColor
    console.log(currentColor)

    let currentColorIdx = colors.findIndex(function(color){
      return currentColor === color
    })

    currentColorIdx++

    const newColorIdx = currentColorIdx % colors.length // 0
    const newColorBand = colors[newColorIdx]
    ticketColorBand.style.backgroundColor = newColorBand
    
  })

}




// generating a Ticket

function createTicket(taskColor , task , id) {
  const ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = ` <div class="ticket-color" style="background-color:${taskColor}"></div>
          <div class="ticket-id">${id}</div>
          <div class="task-area">${task}</div>
          <div class="ticket-lock"></div>`;
mainCont.appendChild(ticketCont)
handleColor(ticketCont)
  
}




// Attaching key event on the Modal

modalCont.addEventListener("keydown", function (e) {
  if (e.key === "Shift") {
    const task = textArea.value;
    const id = (Math.random() * 10000).toFixed(0)
    createTicket(modalPriorityColor, task , id);
    modalCont.style.display = "none";
    addBtnFlag = false
  }
});

allPriorityColors.forEach(function(colorElem){
    colorElem.addEventListener('click', function(){
       allPriorityColors.forEach(function(priortyColors){
        priortyColors.classList.remove('active')
       })

       colorElem.classList.add('active')

       modalPriorityColor = colorElem.classList[0]

       console.log(modalPriorityColor)


    })
})


