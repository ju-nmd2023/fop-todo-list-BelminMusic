
const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const tasklist = document.getElementById('taskList');

function addTask() {

    const task = taskInput.value.trim();

    if (task) {

        createTaskElement(task)

        taskInput.value = "";
    }

}

addButton.addEventListener('click', addTask);

function createTaskElement(task) {

}