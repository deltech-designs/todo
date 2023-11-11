const taskTitle = document.querySelector(".task-title");

const handBudger = document.querySelector(".handbudger");
const sideNav = document.querySelector(".side-nav");

const openModal = document.querySelectorAll(".btn-task");
const modalBox = document.querySelector(".modal-box");
const closeModal = document.querySelector(".close-modal-box");

const addTask = document.querySelector(".add-task");
let storage = {
  todo: [],
  doing: [],
  done: [],
};

/* ============== Adjusting the sizex of task title input ============= */
const adjustHeight = () => {
  taskTitle.style.height = "auto";
  taskTitle.style.height = taskTitle.scrollHeight + "px";
};
taskTitle.addEventListener("input", adjustHeight);

handBudger.addEventListener("click", () => {
  sideNav.classList.toggle("sideNav-active");
});

openModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalBox.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", () => {
  modalBox.classList.add("hidden");
});

window.onload = function () {
  addItemToList();
};

// Create the element
const createListItem = function (text) {
  const newText = `<li class="list" draggable="true" ondragstart="drag(event)" id="drag1">
                        <input type="checkbox"  class="circle-checkbox" />
                        <label class="label">${text}</label>
                    </li>`;
  return newText;
};

//Add Task
addTask.addEventListener("click", (ev) => {
  ev.preventDefault();

  const taskInput = document.querySelector(".task-title").value;
  const task = document.getElementById("select-category");

  taskInput.innerHTML = "";


  if (taskInput === "") {
    alert("Please add task");
  } else if (task.value === "todo") {
    const store = storage.todo.push(taskInput);
    document.querySelector(".task-title").value = "";
    task.selectedIndex = 0; 
  } else if (task.value === "doing") {
    const store = storage.doing.push(taskInput);
    document.querySelector(".task-title").value = "";
    task.selectedIndex = 0; 
  }

  localStorage.setItem("task", JSON.stringify(storage));
  addItemToList();
});

const addItemToList = function () {
  const getStoredObject = JSON.parse(localStorage.getItem("task"));
  // console.log(getStoredObject)
  const itemListTodo = document.querySelector(".item-list-todo");
  const itemListDoing = document.querySelector(".item-list-doing");

  // Clear the storage
  itemListTodo.innerHTML = "";
  itemListDoing.innerHTML = "";

  if (getStoredObject && getStoredObject.todo.length > 0) {
    console.log(getStoredObject);
    getStoredObject.todo.forEach((value) => {
      const listItem = createListItem(value);
      itemListTodo.innerHTML += listItem;
      console.log(value);
    });
  }
  if (getStoredObject && getStoredObject.doing.length > 0) {
    getStoredObject.doing.forEach((value) => {
      const listItem = createListItem(value);
      itemListDoing.innerHTML += listItem;
      console.log(value);
    });
  }
};


function allowDrop(ev){
  ev.preventDefault(); 
}

function drag(ev){
  ev.dataTransfer.setData('text', ev.target.id)
}

function drop(ev){
  ev.preventDefault(); 
  let data = ev.dataTransfer.getData('text'); 
  ev.target.appendChild(document.getElementById(data))
}