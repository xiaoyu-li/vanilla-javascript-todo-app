define(function() {
  return class Task {
    constructor(data) {
      id: data.id;
      name: data.name;
      priority: data.priority || 0;
      complete: false;
    }

    complete() {
      this.complete = !this.complete;
      console.log('The task marked as completed');
    }
  };
});
