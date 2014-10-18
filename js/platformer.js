define(['crafty', 'platformerScene'], function(Crafty, platformerScene) {
  var domElement = document.getElementById('game');
  Crafty.init(Crafty.DOM.window.width, Crafty.DOM.window.height, domElement);
  platformerScene.start();
});
