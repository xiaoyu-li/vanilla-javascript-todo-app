define(function() {
  return class Task {
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.priority = data.priority || 0;
      this.complete = false;
      this.starred = false;
    }

    toggleComplete() {
      this.complete = !this.complete;
      console.log(`Task [${this.name}] marked as [${this.complete ? 'complete' : 'not complete'}]`);
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
