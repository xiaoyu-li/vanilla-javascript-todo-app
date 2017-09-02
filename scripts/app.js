define(['./components/Task', './components/TaskManager'], function(Task, TaskManager) {
  'use strict';

  const Selector = {
    ADD_BTN: '#add-task',
    TASK: '.task',
    TASK_LIST: '#task-list',
    TASK_LIST_DONE: '#task-list-done',
    SHOW_COMPLETE: '#show-completed'
  };

  const addTaskBtn = document.querySelector(Selector.ADD_BTN);
  const taskList = document.querySelector(Selector.TASK_LIST);
  const taskListDone = document.querySelector(Selector.TASK_LIST_DONE);
  const showComplete = document.querySelector(Selector.SHOW_COMPLETE);

  function toggleTaskItem(e) {
    if (e.target.matches('i')) {
      const index = e.target.dataset.index;
      TaskManager.toggleStarred(index);
    } else if (e.target.matches('input')) {
      const index = e.target.dataset.index;
      TaskManager.toggleDone(index);
    } else if (e.target.matches('span')) {
      const allTask = document.querySelectorAll('.task');
      allTask.forEach(function(item) {
        item.classList.remove('selected');
      });
      e.target.parentElement.classList.add('selected');
      return;
    }
    populateList(taskList, TaskManager.getCompletedTasks());
    populateList(taskListDone, TaskManager.getIncompletedTasks());
  }

  function toggleTaskEdit(e) {
    if (!e.target.matches('span' || !e.target.matches('li'))) return;
    // TODO : add edit task when double click task
    console.log('dbl clicked');
  }

  function toggleContextMenu(e) {
    // TODO : add context menu when right click task
    e.preventDefault();
    console.log('toggle context menu');
  }

  function handleAddTask(e) {
    e.preventDefault();

    const text = e.target.lastElementChild.value;
    if (!text) return;

    TaskManager.addTask(text);
    populateList(taskList, TaskManager.getCompletedTasks());
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

  function toggleShowComplete() {
    taskListDone.classList.toggle('show');
    populateList(taskListDone, TaskManager.getIncompletedTasks());
  }

  function start() {
    addTaskBtn.addEventListener('submit', handleAddTask);
    taskList.addEventListener('click', toggleTaskItem);
    taskList.addEventListener('dblclick', toggleTaskEdit);
    taskList.addEventListener('contextmenu', toggleContextMenu);
    taskListDone.addEventListener('dblclick', toggleTaskEdit);
    taskListDone.addEventListener('click', toggleTaskItem);
    showComplete.addEventListener('click', toggleShowComplete);
    populateList(taskList, TaskManager.getCompletedTasks());
  }
  return {
    start
  };
});
