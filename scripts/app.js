define(['./components/Task', './components/TaskManager'], function(Task, TaskManager) {
  'use strict';
  var id = 0;
  function handleAddTask(e) {
    e.preventDefault();

    const text = e.target.lastElementChild.value;
    if (!text) return;

    TaskManager.addTask(text);
    populateList(taskList, TaskManager.getTasks());
    this.reset();
  }

  function populateList(dataList, data) {
    console.log(data);
    dataList.innerHTML = data
      .map(
        (task, i) =>
          `<li class="task">
            <input type="checkbox" data-index="${task.id}" ${task.done ? 'checked' : ''}/>
            <span class="task-text">${task.name}</span>
            <span class="task-icon" ><i data-index="${task.id}" class="fa fa-stack ${task.starred
            ? 'fa-star highlight'
            : 'fa-star-o'}"></i></span>
          </li>`
      )
      .join('');
  }

  const addTaskBtn = document.querySelector('#add-task');
  const taskList = document.querySelector('#task-list');
  const taskListDone = document.querySelector('#task-list-done');

  function start() {
    addTaskBtn.addEventListener('submit', handleAddTask);
    populateList(taskList, TaskManager.getTasks());
  }
  return {
    start
  };
});
