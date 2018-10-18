// Define UI variable

const form = document.querySelector("#task-form");
const tasklist = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-task");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load All Event Lisner
loadEventListeners();

// Load All Event Lisner Function
function loadEventListeners(){
    // DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add Task Event
    form.addEventListener('submit', addTask);
    // removw task Element
    tasklist.addEventListener('click', removeTask);
    // Clear task Event
    clearBtn.addEventListener('click', clearTasks);
    // Filter task Event
    // filter.addEventListener('keyup', filterTask);            // My Mistake
    filter.addEventListener('keyup', filterTasks);
}

// Get Tasks From Local Storage
function getTasks(){
    let Tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
        }   else    {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.forEach(function(tasks){
           
    
    // Create li Element
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(tasks));
    // Create new link element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Apend the link to li
    li.appendChild(link);
    // Apend li to ul
    tasklist.appendChild(li); 
    
    });

}

// Add Task
function addTask(e){
    if(taskInput.value === ' '){
        alert('Add a Task');
    }

    // Create li Element
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Apend the link to li
    li.appendChild(link);

    // Apend li to ul
    tasklist.appendChild(li);

    // Store In Local Storage
    storeTaskInLocalStorage(li.value);

    // Clear Input
    taskInput.value = ' ';


    e.preventDefault();

}

    // // Store Task
    function storeTaskInLocalStorage(task) {
        let tasks;
        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        }   else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }



    // Remove Task


    // Real code from The ZIP file
    // function removeTask(e) {
    //     if(e.target.parentElement.classList.contains('delete-item'))
    //     //if (e.target.parentElement.classList.contains('delete-item')) 
    //     {
    //         if (confirm('Are you sure?')) {
    //             e.target.parentElement.parentElement.remove();
    //             removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    //         }
    //     }
    // }
    
    // Remove Task
    function removeTask(e){
        if(e.target.parentElement.classList.contains('delete-item'))
        {
            if(confirm('Are You Sure?')) {
                e.target.parentElement.parentElement.remove();

                // Remove from local Storage
                removeTaskFromLocalStorage(e.target.parentElement.parentElement);
                
            }
        }
    }

    // Remove From Local Storge
    function removeTaskFromLocalStorage(taskItem){
        let tasks;
        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        }   else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.forEach(function(task, index){
            if(taskItem.textContent === task){
                tasks.splice(index, 1)
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }


    // Clear Tasks
    function clearTasks(){
        //tasklist.innerHTML = ' ';         // simple innerHTML work
        while(tasklist.firstChild) {
            tasklist.removeChild(tasklist.firstChild);

            // Clear Task From Local Storage
            clearTasksFromLocalStorage();

        }
    }

    //Clear Task From Local Storage
    function clearTasksFromLocalStorage(){
        localStorage.clear();
    }



    // Zip file work
    // function filterTask(e) {
    //     const text = e.terget.value.toLowerCase();
    //     document.querySelectorAll('.collection-item').forEach
    //     (function(task){
    //         const item = task.firstChild.textContent;
    //         if(item.toLowerCase().indexOf(text) != -1){
    //             task.style.display = 'block';
    //         } else {
    //             task.style.display = 'none';
    //         }
    //     })
    //     console.log(e.target);
    // }

    function filterTasks(e) {
        console.log(e);
        const text = e.target.value.toLowerCase();
    
        document.querySelectorAll('.collection-item').forEach(function (task) {
            const item = task.firstChild.textContent;
    
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            }
            else {
                task.style.display = 'none';
            }
        });
    }


const navBar = document.createElement('div');