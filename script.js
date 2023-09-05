// Varibales

const ModalBox = document.querySelector('.modal-plus'); 
const openModalBox = document.querySelectorAll('.add-task');
const cancelModalBox = document.querySelector('.cancel-task')

const handBudger = document.querySelector('.handbudger'); 
const sideNav = document.querySelector('.side-nav'); 

/* ============== Adjusting the size of task title input ============= */
const taskName = document.querySelector('.task-name'); 
const adjustHeight = () => {
    taskName.style.height = 'auto'; 
    taskName.style.height = taskName.scrollHeight + 'px'; 
}
taskName.addEventListener('input', adjustHeight);

// Open the modal box 
const openModa = function(ev){
    ev.preventDefault();
    openModal.classList.remove('hidden'); 
    openModa.style.transition = '0.3s'
}


// Close the modal box 
const closeModal = function(ev){
    ev.preventDefault();
    plusModal.classList.add('hidden'); 
}

plusIcon.addEventListener('click', openModal);
plusModalCancel.addEventListener('click', closeModal);

// handBudger function
handBudger.addEventListener('click', () => {
  sideNav.classList.toggle('sideNav-active')
});

// const openModal = document.querySelector('.'); 
// const openModal = function(){
//     // alert('Hello'); 
//     plusModal.classList.remove('hidden'); 
// }
// plusModal.addEventListener('click', openModal ); 



// const closeModal = function(){
//     pl
// }



// const hiddenNav = document.querySelector('.side-nav'); 
// // Navbar toggle 
// const showNav = document.querySelector('.show').onclick = () =>{
//     hiddenNav.classList.toggle('hidden');
// }


// // Accordion checker 
// const acc = document.querySelector('.accordion-history').addEventListener('click', () => {
//     const accDetail = document.querySelector('.accordion-detail').classList.toggle('accordion-detail-show'); 
//     const arrowDown = document.querySelector('.arrow').classList.toggle('fa-arrow-alt-circle-down');
// }); 


// const addPlus = document.querySelector('.add-task-plus').addEventListener('click', () => {
//     alert('Hey'); 
// }); 

// // Add task modal box
// const addTask = document.querySelectorAll('.add-task').forEach((item) => {
//     item.addEventListener('click', () => {
//         alert('alert'); 
//     })
// }); 


