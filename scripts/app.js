define(['./components/Task', './components/TaskManager'], function(Task, TaskManager) {
  'use strict';

  const Selector = {
    ADD_BTN: '#add-task',
    TASK_LIST: '#task-list',
    TASK_LIST_DONE: '#task-list-done',
    SHOW_COMPLETE: '#show-completed'
  };

  const addTaskBtn = document.querySelector(Selector.ADD_BTN);
  const taskList = document.querySelector(Selector.TASK_LIST);
  const taskListDone = document.querySelector(Selector.TASK_LIST_DONE);
  const showComplete = document.querySelector(Selector.SHOW_COMPLETE);

  function toggleTaskItem(e) {
    // console.dir(e.target);

    if (e.target.matches('i')) {
      const index = e.target.dataset.index;
      TaskManager.toggleStarred(index);
    } else if (e.target.matches('input')) {
      const index = e.target.dataset.index;
      TaskManager.toggleDone(index);
    } else {
      return;
    }
    populateList(taskList, TaskManager.getTasks());
  }

  function toggleTaskEdit(e) {
    if (!e.target.matches('span' || !e.target.matches('li'))) return;
    // TODO : add edit task functionality
    console.log('dbl clicked');
  }

  function handleAddTask(e) {
    e.preventDefault();

    const text = e.target.lastElementChild.value;
    if (!text) return;

    TaskManager.addTask(text);
    populateList(taskList, TaskManager.getTasks());
    this.reset();
  }

  function populateList(dataList, data) {
    dataList.innerHTML = data
      .map(
        (task, i) =>
          `<li class="task">
            <input type="checkbox" data-index="${task.id}" ${task.done ? 'checked' : ''}/>
            <span class="task-text">${task.name}</span>
            <span class="task-icon" ><i data-index="${task.id}" class="fa fa-stack ${task.starred
            ? `fa-star highlight`
            : 'fa-star-o'}"></i></span>
          </li>`
      )
      .join('');
  }

  function start() {
    addTaskBtn.addEventListener('submit', handleAddTask);
    taskList.addEventListener('click', toggleTaskItem);
    taskList.addEventListener('dblclick', toggleTaskEdit);
    const tasks = TaskManager.getTasks();
    console.dir(tasks);
    populateList(taskList, tasks);
  }
  return {
    start
  };
});
