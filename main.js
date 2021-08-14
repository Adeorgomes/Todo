// Selectors
document.querySelector('form').addEventListener('submit', formHandler);
document.querySelector('ul').addEventListener('click', handleClickOrDelete);
document.getElementById('clearAll').addEventListener('click', handleClearAll);

// Event Handlers

function formHandler(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    //if the input isnt empty, adds todo 
    if (input != '')
        addTodo(input.value);
    input.value = '';
}

// The click and delete Handler function

function handleClickOrDelete(e) {
    // One function handling two events
    //the name attribute is used because it was referenced to the buttons
    if (e.target.name == 'checkButton')
        checkTodo(e);

    if (e.target.name == 'deleteButton')
        deleteTodo(e);
}

function handleClearAll(e) {
    //clears all the list
    //the ul is selected because it contains all the lists.
    document.querySelector('ul').innerHTML = '';
} {
    
}

// Helper Functions 

//the Add-todo function 
function addTodo(todo) {
    let ul = document.querySelector('ul');
    //Creates the li elements
    let li = document.createElement('li');


    //Inserting contents into the Li elements
    // the span element is used to output the todo items
    // the $-sign is used to integrate the todo element into the html
    // the buttons contain the font awesome icons
    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton"><i class="fas fa-trash"></i></button>
     `;

    //Adds the todoList class to the Li
    li.classList.add('toDoList-item');
     //Makes the li the child of the ul element
     ul.appendChild(li);
}

function checkTodo(e) {
    let gem = e.target.parentNode;
    if (gem.style.textDecoration == 'line-through')
        gem.style.textDecoration = 'none';
    else
        gem.style.textDecoration = 'line-through';
}

function deleteTodo(e) {
    let gem = e.target.parentNode;

    gem.addEventListener('transitionend', function () {
        gem.remove();
    })

    gem.classList.add('toDoList-fall');
    
}