document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.textContent = taskText;
    li.appendChild(deleteBtn);
    document.getElementById('tasks').appendChild(li);

    document.getElementById('new-task').value = '';
});
