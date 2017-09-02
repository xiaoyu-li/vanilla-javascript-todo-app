define(['components/Task'], function(Task) {
  'use strict';
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let taskId = tasks.length;

  //private
  function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  //public
  function addTask(name) {
    tasks.push(new Task({ id: taskId++, name }));
    updateLocalStorage();
  }

  function getTask(id) {
    return tasks[id];
  }

  function getTasks() {
    return tasks;
  }

  return {
    addTask,
    getTask,
    getTasks
  };
});
