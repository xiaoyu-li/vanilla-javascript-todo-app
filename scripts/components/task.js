define(function() {
  return class Task {
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.priority = data.priority || 0;
      this.done = false;
      this.starred = false;
    }

    toggleDone() {
      this.done = !this.done;
      console.log(`Task [${this.name}] marked as [${this.done ? 'complete' : 'not complete'}]`);
    }

    toggleStarred() {
      this.starred = !this.starred;
      console.log(`Task [${this.name}] marked as [${this.starred ? 'starred' : 'not starred'}]`);
    }

    save() {
      console.log(`Saving tast ${this.id}`);
    }
  };
});
