define(['crafty', 'platformerScene'], function(Crafty, platformerScene) {
  var domElement = document.getElementById('game');
  Crafty.init(Crafty.DOM.window.width, Crafty.DOM.window.height, domElement);
  Crafty.audio.add('Background', '/assets/background-music.ogg');
  Crafty.audio.play('Background', -1);

  platformerScene.createLevel('Level1', 'levels/level1');

  Crafty.enterScene('Level1');
});
