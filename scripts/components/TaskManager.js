define(['components/Task'], function(Task) {
  'use strict';

  const tasks = initialTasks();
  let taskId = tasks.length;

  /**
   * ------------------------------------------------------------------------
   * private
   * ------------------------------------------------------------------------
   */

  function initialTasks() {
    const data = JSON.parse(localStorage.getItem('tasks')) || [];
    return data.map(function(item) {
      return new Task(item);
    });
  }

  function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  /**
   * ------------------------------------------------------------------------
   * public
   * ------------------------------------------------------------------------
   */

  function addTask(name) {
    tasks.push(new Task({ id: taskId++, name }));
    updateLocalStorage();
  }

  function toggleDone(id) {
    console.log(id);
    tasks[id].toggleDone();
    updateLocalStorage();
  }

  function toggleStarred(id) {
    tasks[id].toggleStarred();
    updateLocalStorage();
  }

  function getAllTasks() {
    return tasks;
  }

  function getCompletedTasks() {
    return tasks.filter(task => !task.done);
  }

  function getIncompletedTasks() {
    return tasks.filter(task => task.done);
  }
  return {
    addTask,
    toggleDone,
    toggleStarred,
    getAllTasks,
    getCompletedTasks,
    getIncompletedTasks
  };
});
