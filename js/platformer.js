define(['crafty', 'levelLoader'], function(Crafty, levelLoader) {
  var domElement = document.getElementById('game');
  Crafty.init(Crafty.DOM.window.width, Crafty.DOM.window.height, domElement);
  Crafty.audio.add('Background', '/assets/background-music.ogg');
  Crafty.audio.play('Background', -1);

  levelLoader('Level1', 'levels/level1', 'Level2');
  levelLoader('Level2', 'levels/level2', 'Level3');
  levelLoader('Level3', 'levels/level3');

  Crafty.enterScene('Level1', { type: 'Ghost' });
});
