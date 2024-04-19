const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

loadTasks();

function addTask() {
    const task = taskInput.value.trim();

    if (task) {
        createTaskElement(task);
        taskInput.value = "";
        saveTasks();
    } else {
        alert('Enter a task!');
    }
}

addButton.addEventListener('click', addTask);

function createTaskElement(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✘';
    deleteButton.className = 'deleteTask';

    const checkButton = document.createElement('button');
    checkButton.textContent = '💯';
    checkButton.className = 'checkTask';

    listItem.appendChild(checkButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
        saveTasks();
    });

    checkButton.addEventListener('click', function() {
        listItem.style.textDecoration = 'line-through';
        saveTasks();
    });
}

function saveTasks() {
    let tasks = [];
    taskList.querySelectorAll('li').forEach(function(item) {
        let taskText = item.textContent.trim();
        
        taskText = taskText.replace('💯', '').replace('✘', '').trim();
        tasks.push(taskText);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function(task) {
        createTaskElement(task);
    });
}
