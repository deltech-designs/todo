
const hiddenNav = document.querySelector('.side-nav'); 

// Navbar toggle 
const showNav = document.querySelector('.show').onclick = () =>{
    hiddenNav.classList.toggle('hidden');
}


// Accordion checker 
const acc = document.querySelector('.accordion-history').addEventListener('click', () => {
    const accDetail = document.querySelector('.accordion-detail').classList.toggle('accordion-detail-show'); 
    const arrowDown = document.querySelector('.arrow').classList.toggle('fa-arrow-alt-circle-down');
}); 


const addPlus = document.querySelector('.add-task-plus').addEventListener('click', () => {
    alert('Hey'); 
}); 

// Add task modal box
const addTask = document.querySelectorAll('.add-task').forEach((item) => {
    item.addEventListener('click', () => {
        alert('alert'); 
    })
}); 

const numbers = [33, 2, 8]
numbers.sort((a,b) => {
    return a - b; 
});

console.log(numbers);
// console.log(addTask);

// console.log(addTask)