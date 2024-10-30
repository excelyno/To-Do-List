document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create list item
    const li = document.createElement('li');

    // Create span for task text
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Toggle completed task
    span.onclick = function() {
        li.classList.toggle('completed');
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
}
