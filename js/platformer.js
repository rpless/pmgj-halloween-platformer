define(['crafty', 'scenes/platformerScene'], function(Crafty, platformerScene) {
  Crafty.init(800, 600, document.getElementById('game'));
  platformerScene.start();
});
