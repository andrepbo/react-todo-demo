function addTask() {
    const input = document.getElementById('task');
    const list = document.getElementById('list');
    const newTask = document.createElement('li');

    newTask.textContent = input.value;
    list.appendChild(newTask);
    input.value = '';
  }