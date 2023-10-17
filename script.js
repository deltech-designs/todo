
const taskTitle = document.querySelector('.task-title'); 

const handBudger = document.querySelector('.handbudger'); 
const sideNav = document.querySelector('.side-nav'); 

const openModal = document.querySelectorAll('.btn-task'); 
const modalBox = document.querySelector('.modal-box');
const closeModal = document.querySelector('.close-modal-box'); 

const addTask = document.querySelector(".add-task"); 
let storage = {
    todo:[], 
    doing:[],
    done:[]
} 

// console.log(storage)


/* ============== Adjusting the sizex of task title input ============= */
const adjustHeight = () => {
    taskTitle.style.height = 'auto'; 
    taskTitle.style.height = taskTitle.scrollHeight + 'px'; 
}
taskTitle.addEventListener('input', adjustHeight);


handBudger.addEventListener('click', () => {
    sideNav.classList.toggle('sideNav-active')
})


openModal.forEach(btn => {
    btn.addEventListener('click', () => {
        modalBox.classList.remove('hidden'); 
    })
}) 

closeModal.addEventListener('click', () => {
    modalBox.classList.add('hidden'); 
})

addTask.addEventListener("click", (ev) =>{
    ev.preventDefault();
    const task = document.getElementById("select-category").value;
    const taskInput = document.querySelector(".task-title").value;
    // console.log(addItemToList(taskInput)); 
 
    if (task === "todo") {
         storage.todo.push(taskInput)
         document.querySelector(".task-title").value = "";
    } 
    else if(task === "doing") {
        storage.doing.push(taskInput)
        document.querySelector(".task-title").value = "";
    }
    
    localStorage.setItem("task", JSON.stringify(storage));
    addItemToList(); 
 }); 


const createListItem = function (text){
    const listItem = document.createElement("li"); 
    const label = document.createElement("label")
    const checkbox = document.createElement("input"); 
    checkbox.setAttribute("type", "checkbox")
    checkbox.classList.add('circle-checkbox'); 
    label.appendChild(checkbox); 
    label.appendChild(document.createTextNode(text));
    listItem.appendChild(label); 
}

const addItemToList = function() {
    const getStoredObject = JSON.parse(localStorage.getItem("task")); 
    const itemListTodo = document.querySelector(".item-list-todo"); 
    const itemListDoing = document.querySelector(".item-list-doing"); 

    // console.log(getStoredObject);
    
    if(getStoredObject.todo){
        // console.log(getStoredObject.todo); 
        for (const key in getStoredObject.todo) { 
            const item = getStoredObject.todo[key]; 
            console.log(item); 
            const listItem = createListItem(item); 
            itemListTodo.innerHTML = listItem;  
        }
    }

    else if (getStoredObject.doing){
        for(const key in getStoredObject.doing){
            const itemDoing = getStoredObject.doing[key]; 
            console.log(itemDoing);
            const listItem = createListItem(); 
            itemListDoing.innerHTML = listItem; 
        }
    }
}
















//     // console.log(getStoredObject);
//     let todo = document.querySelector(".to-do");
//     let doing = document.querySelector(".doing"); 
//     if (getStoredObject.todo) {
//         for(let key in getStoredObject.todo){
//             console.log(getStoredObject.todo[key])
//             const newkey = getStoredObject.todo[key]; //             
//             // let checkbox = document.createElement("input").setAttribute('type', 'checkbox');
//             // checkbox.classList.add("checkbox"); 
//             // let listItem = document.createElement("li")
//             // listItem.textContent = newkey; 
//             // todo.appendChild(listItem);
//         }
//     }
// if (getStoredObject.doing){
        
//         for(let x in getStoredObject.doing){
//             const doingItem = getStoredObject.doing[x]; 
//             console.log(doingItem)
//             let doingList = document.createElement("li")
//             doingList.textContent = doingItem; 
//             doing.appendChild(doingList);
//         }
//     }


    
// })

// window.addEventListener('load', function(ev) {
//     ev.preventDefault();

//     const getStoredObject = JSON.parse(localStorage.getItem("task")); 
//     // console.log(getStoredObject);
//     let todo = document.querySelector(".to-do");
//     let doing = document.querySelector(".doing"); 
//     if (getStoredObject.todo) {
//         for(let key in getStoredObject.todo){
//             console.log(getStoredObject.todo[key])
//             const newkey = getStoredObject.todo[key]
//             let listItem = document.createElement("li")
//             listItem.textContent = newkey; 
//             todo.appendChild(listItem);
//         }
//     }

//     if (getStoredObject.doing){
//         for(let x in getStoredObject.doing){
//             const doingItem = getStoredObject.doing[x]; 
//             console.log(doingItem)
//             let doingList = document.createElement("li")
//             doingList.textContent = doingItem; 
//             doing.appendChild(doingList);
//         }
//     }
// }); 
