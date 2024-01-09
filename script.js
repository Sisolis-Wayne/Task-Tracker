// alert("this is the file for the project");

// alert("checking if this page will load");
console.log("me");

const allTasks = JSON.parse(localStorage.getItem("tasklist")) || [];
const taskTitleInput = document.querySelector("#task-title");
const taskTitleDescription = document.querySelector("#task-description");
const options = document.querySelectorAll('input[name="options"]');
const saveBtn = document.querySelector(".save-btn");

console.log(allTasks);
console.log(taskTitleInput);
console.log(taskTitleDescription);
console.log(options);
console.log(saveBtn);

// window.addEventListener("keydown", function (e) {
//   // console.log(e.key);
// //   if (e.key === "Enter") {
// //     console.log(taskTitleInput.value);
// //     console.log(taskTitleDescription.value);
//     //   }

// });

saveBtn.addEventListener("click", saveTask);

function saveTask() {
  //   console.log("oneopiece");
  const taskTitleInfo = taskTitleInput.value.trim();
  const descriptionInfo = taskTitleDescription.value.trim();
  let priorityInfo;

  options.forEach((each) => {
    if (each.checked) {
      priorityInfo = each.id;
      //   console.log(each.id);
    }
  });

  if (taskTitleInfo && descriptionInfo && priorityInfo) {
    let taskInfo = {
      taskTitle: taskTitleInfo,
      description: descriptionInfo,
      priority: priorityInfo,
      status: "pending",
    };

    allTasks.push(taskInfo);
    // console.log(allTasks);

    localStorage.setItem("tasklist", JSON.stringify(allTasks));

    taskTitleInput.value = "";
    taskTitleDescription.value = "";
    options.forEach((each) => {
      if (each.checked) {
        each.checked = false;
        //   console.log(each.id);
      }
    });
  } else {
    alert("fill all input fields");
  }
}

// localStorage.clear();
