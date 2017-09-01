requirejs.config({
  baseUrl: 'scripts/components'
});

requirejs(['Task'], function(Task) {
  var a = new Task({ name: 'What does the fox say?', id: 1 });
  a.toggleComplete();
  a.toggleStarred();
  a.save();
});
