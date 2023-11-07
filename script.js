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

// Create the element
const createListItem = function (text) {
  const newText = `<li>
                        <input type="checkbox"  class="circle-checkbox"/>
                        <label>${text}</label>
                    </li>`;
  return newText;
};

//Add Task
addTask.addEventListener("click", (ev) => {
  ev.preventDefault();

  // modalBox.style.display = "none"; 

  const task = document.getElementById("select-category").value;
  const taskInput = document.querySelector(".task-title").value;


  taskInput.innerHTML = ""

  if (taskInput === "") {
    alert("Please add task");
  } else if (task === "todo") {
    const store = storage.todo.push(taskInput);
    document.querySelector(".task-title").value = "";
  } else if (task === "doing") {
    const store = storage.doing.push(taskInput);
    document.querySelector(".task-title").value = "";
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
