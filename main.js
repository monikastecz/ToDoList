let $title;
let $input;
let $addBtn;
let $alertInfo;
let $newTask;
let $ulList;
let $deleteAllTasksBtn;
let $deleteSelectedTasksBtn;
let $idNumber = 0;
let $allTasks;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  $title = document.querySelector("h3");
  $input = document.querySelector(".todoInput");
  $addBtn = document.querySelector(".addBtn");
  $alertInfo = document.querySelector(".alertInfo");
  $ulList = document.querySelector(".todoList ul");
  $deleteAllTasksBtn = document.querySelector(".deleteAllTasksBtn");
  $deleteSelectedTasksBtn = document.querySelector(".deleteSelectedTasksBtn");
  $allTasks = document.getElementsByTagName("li");
};

const prepareDOMEvents = () => {
  $addBtn.addEventListener("click", addNewTask);
  $input.addEventListener("keyup", enterCheck);
  $ulList.addEventListener("click", click);
  $deleteAllTasksBtn.addEventListener("click", deleteAllTasks);
  $deleteSelectedTasksBtn.addEventListener("click", deleteSelectedTasks);
};

const addNewTask = () => {
  if ($input.value.trim() !== "") {
    $idNumber++;
    $newTask = document.createElement("li");
    $newTask.innerText = $input.value;
    $newTask.setAttribute("id", `todo-${$idNumber}`);
    $ulList.appendChild($newTask);
    $input.value = "";
    $alertInfo.innerText = "";
    $deleteAllTasksBtn.classList.add("showDelete");
    $deleteSelectedTasksBtn.classList.add("showDelete");
    createToolsArea();
  } else {
    $alertInfo.innerText = "wpisz treść zadania proszę";
  }
};

const enterCheck = (e) => {
  if (e.key === "Enter") {
    addNewTask();
  }
};

const createToolsArea = () => {
  const toolsPanel = document.createElement("div");
  toolsPanel.classList.add("tools");
  $newTask.appendChild(toolsPanel);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  toolsPanel.appendChild(checkbox);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
  toolsPanel.appendChild(deleteBtn);
};

const click = (e) => {
  if (e.target.closest("button").classList.contains("delete")) {
    deleteTask(e);
  }
};

const deleteTask = (e) => {
  const deleteTodo = e.target.closest("li");
  deleteTodo.remove();
  if (!$allTasks.length) {
    $deleteAllTasksBtn.classList.remove("showDelete");
    $deleteSelectedTasksBtn.classList.remove("showDelete");
  }
};

const deleteAllTasks = (e) => {
  const tasks = document.querySelectorAll(".todoList li");
  tasks.forEach((task) => task.remove());
  $deleteAllTasksBtn.classList.remove("showDelete");
  $deleteSelectedTasksBtn.classList.remove("showDelete");
};

const deleteSelectedTasks = (e) => {
  const checkboxes = document.querySelectorAll("input:checked");

  checkboxes.forEach((checkbox) => checkbox.closest("li").remove());

  if (!$allTasks.length) {
    $deleteAllTasksBtn.classList.remove("showDelete");
    $deleteSelectedTasksBtn.classList.remove("showDelete");
  }
};

document.addEventListener("DOMContentLoaded", main);
