let $title;
let $input;
let $addBtn;
let $alertInfo;
let $newTask;
let $ulList;

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
};

const prepareDOMEvents = () => {
  $addBtn.addEventListener("click", addNewTask);
  $input.addEventListener("keyup", enterCheck);
  $ulList.addEventListener("click", click);
  $ulList.addEventListener("click", clickDelete);
};

const addNewTask = () => {
  if ($input.value !== "") {
    $newTask = document.createElement("li");
    $newTask.innerText = $input.value;
    $ulList.appendChild($newTask);
    $input.value = "";
    $alertInfo.innerText = "";
    createToolsArea();
  } else {
    $alertInfo.innerText = "wpisz treść zadania proszę";
  }
};

const enterCheck = () => {
  if (event.keyCode === 13) {
    addNewTask();
  }
};

const createToolsArea = () => {
  const toolsPanel = document.createElement("div");
  toolsPanel.classList.add("tools");
  $newTask.appendChild(toolsPanel);

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
};

document.addEventListener("DOMContentLoaded", main);
