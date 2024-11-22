const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const textArea = document.querySelector(".text-area");
const mainCont = document.querySelector('.main-cont')
const allPriorityColors = document.querySelectorAll('.priority-color')
let modalPriorityColor ='lightpink'





let addBtnFlag = false;

addBtn.addEventListener("click", function () {
  addBtnFlag = !addBtnFlag;

  if (addBtnFlag) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

// generating a Ticket

function createTicket(taskColor , task , id) {
  const ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class="${taskColor} ticket-color"></div>
          <div class="ticket-id">${id}</div>
          <div class="task-area">${task}</div>
          <div class="ticket-lock"></div>`;
mainCont.appendChild(ticketCont)
  
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


