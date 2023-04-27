/* ============== Adjusting the size of task title input ============= */

const taskName = document.querySelector('.task-name'); 
const adjustHeight = () => {
    taskName.style.height = 'auto'; 
    taskName.style.height = taskName.scrollHeight + 'px'; 
}
taskName.addEventListener('input', adjustHeight);

const plusModal = document.querySelector('.modal-plus'); 
const plusIcon = document.querySelector('.plus-icon');
const plusModalCancel = document.querySelector('.plus-modal-cancel')

const openModal = function(ev){
    ev.preventDefault();
    plusModal.classList.remove('hidden'); 
    plusModal.style.transition = '0.5s'
}


const closeModal = function(ev){
    ev.preventDefault();
    plusModal.classList.add('hidden'); 
}

plusIcon.addEventListener('click', openModal);
plusModalCancel.addEventListener('click', closeModal);

const hiddenNav = document.querySelector('.side-nav'); 


// // Navbar toggle 
const showNav = document.querySelector('.show-navbar').onclick = () =>{
    hiddenNav.classList.toggle('sidenav-hidden');
}


// // Accordion checker 
const acc = document.querySelector('.accordion-history').addEventListener('click', () => {
    const accDetail = document.querySelector('.accordion-detail').classList.toggle('accordion-detail-show'); 
    const arrDown = document.querySelector('.arrow').classList.toggle('fa-angle-down')
}); 


