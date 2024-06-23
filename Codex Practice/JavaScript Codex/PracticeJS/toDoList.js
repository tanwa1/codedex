
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', function () {

    const addTask = document.getElementById('Input').value;
    
    const storeTask = document.getElementById('addButton');
    storeTask.textContent = addTask;

    const listElement = document.getElementById('orderedTasks');

    const list = document.createElement('li');
    list.textContent = addTask;

    listElement.appendChild(list);
    console.log(listElement);
})

const removeButton = document.getElementById('removeButton');

removeButton.addEventListener('click', function () {
    const removeTask = document.getElementById('orderedTasks');
    removeTask.removeChild(removeTask.lastChild);
    
})