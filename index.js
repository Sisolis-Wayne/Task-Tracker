// alert("this is the js script for this page");

// import {allTasks} from "./script"

const allTasks = JSON.parse(localStorage.getItem("tasklist")) || [];
console.log(allTasks);

const mainSection = document.querySelector(".main-section");
console.log(mainSection);

const clearAllTasks = document.querySelector(".clear-btn");
console.log(clearAllTasks);

allTasks.forEach((each) => {
  let sect = `
            <section class="card-1">
                <div class="card-head">
                    <div>
                        <h2>${each.taskTitle}</h2>
                    </div>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
                <div class="card-description">
                    <p>
                        ${each.description}
                    </p>
                </div>
                <div class="card-footer">
                    <div class="card-footer-left">
                        <p>Status: <span>${each.status}</span></p>
                        <p>Priority: <span>${each.priority}</span></p>
                    </div>
                    <div class="card-footer-right">
                        <label class="container">
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
            </section>
  `;

  mainSection.innerHTML += sect;
});

clearAllTasks.addEventListener("click", deleteAll);

function deleteAll() {
  localStorage.clear();
  mainSection.innerHTML = "";
}
