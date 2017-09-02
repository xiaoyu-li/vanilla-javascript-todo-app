requirejs.config({
  baseUrl: 'scripts'
});

define(['app'], function(app) {
  'use strict';
  app.start();
});
