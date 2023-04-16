function createTask(event) {
    event.preventDefault(); // prevent default form submission behavior
  
    const input = document.querySelector("#new-task-description"); // select input field
    const task = input.value; // grab input value
  
    const tasks = document.querySelector("#tasks"); // select ul element
    const newTask = document.createElement("li"); // create new li element
    newTask.innerText = task; // set inner text of li element to input value
    tasks.appendChild(newTask); // append new li element to ul
  }
  
  const form = document.querySelector("#create-task-form"); // select form element
  form.addEventListener("submit", createTask);