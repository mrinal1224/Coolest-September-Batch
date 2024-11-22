const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const textArea = document.querySelector(".text-area");
const mainCont = document.querySelector('.main-cont')

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

function createTicket(task) {
  const ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class="ticket-color"></div>
          <div class="ticket-id">12345</div>
          <div class="task-area">${task}</div>
          <div class="ticket-lock"></div>`;
mainCont.appendChild(ticketCont)
  
}



// Attaching key event on the Modal

modalCont.addEventListener("keydown", function (e) {
  if (e.key === "Shift") {
    const task = textArea.value;
    createTicket(task);
    modalCont.style.display = "none";
    addBtnFlag = false
  }
});
