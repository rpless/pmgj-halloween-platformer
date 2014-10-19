define(['crafty', 'levelLoader'], function(Crafty, levelLoader) {
  var images = ['assets/blackPlatform.png',
                'assets/orange_platform64.png',
                'assets/whitePlatform.png',
                'assets/enemy_Ghost.png',
                'assets/orange_enemy64.png',
                'assets/enemy_Spider.png'];
  Crafty.load(images, function() {
    var domElement = document.getElementById('game');
    Crafty.init(Crafty.DOM.window.width, Crafty.DOM.window.height, domElement);
    Crafty.audio.add('Background', 'assets/background-music.ogg');
    Crafty.audio.play('Background', -1);

    levelLoader('Level1', 'levels/level1', 'Level2');
    levelLoader('Level2', 'levels/level2', 'Level3');
    levelLoader('Level3', 'levels/level3', 'Level4');
    levelLoader('Level4', 'levels/level4', 'Level5');
    levelLoader('Level5', 'levels/level5', 'Level6');
    levelLoader('Level6', 'levels/level6', 'Level7');
    levelLoader('Level7', 'levels/level7', 'Level8');
    levelLoader('Level8', 'levels/level8', 'Level9');
    levelLoader('Level9', 'levels/level9');


    Crafty.enterScene('Level1', { type: 'Ghost' });
  });
});
