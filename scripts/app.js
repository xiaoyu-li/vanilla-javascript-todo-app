requirejs.config({
  baseUrl: 'scripts/app'
});

requirejs(['task'], function(task) {
  var a = new task({ name: '123' });
  a.complete();
});
