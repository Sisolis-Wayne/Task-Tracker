// alert("this is an alert");

const selectedTask = document.createElement("p");
selectedTask.innerHTML = "this is a test paragraph";

document.body.appendChild(selectedTask);

const input = document.querySelector("input");
console.log(input);
console.log(input.checked);

const selectLabel = input.parentElement.lastElementChild;
console.log(selectLabel);

input.addEventListener("click", updateTask);

function updateTask() {
  selectLabel.classList.toggle("checked");
  if (input.checked) {
    selectLabel.style.textDecoration = "line-through";
  } else {
    selectLabel.style.textDecoration = "none";
  }
}

const options = document.querySelectorAll('input[name = "option"]');
console.log(options);

options.forEach((each) => {
  each.style.accentColor = "green"; // change the color of the radio check. Also works for checkbox check
  each.addEventListener("click", selectPriority);
});

console.log(options[1]);

function selectPriority() {
  options.forEach((each) => {
    if (each.checked) {
      selectedTask.innerHTML = `${each.value}`;
    }
  });
}
