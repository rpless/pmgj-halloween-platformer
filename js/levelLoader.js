
define(['require', 'player', 'block', 'enemy'],
function(require, player, block, enemy) {

  Crafty.c('EndArea', {
    init: function() {
      this.requires('2D');
    }
  })

  return function(name, url, transition, type) {
    Crafty.defineScene(name, function(options) {
      require([url], function(level) {
        var start= level.start;
        var end = level.end;

        Crafty.e('2D, Canvas, Image').image('assets/graveyard.png');
        Crafty.e('EndArea, 2D, Canvas, Color').attr({ x: end.x, y: end.y, w: 64, h: 64 }).color('#F00');

        var character = player.create(options.type || type).attr({ x: start.x, y: start.y - 64, w: 64, h: 64 });
        character.bind('Move', function() {
          if (character.y > 1920) {
            Crafty.enterScene(name, { type: options.type || type });
          }
        });
        character.onHit('EndArea', function() {
          Crafty.enterScene(transition, { type: character.costume() });
        });
        character.onHit('Enemy', function(hit) {
          var obj = hit[0].obj;
          if (obj.has(character.weak())) {
            Crafty.enterScene(name, { type: options.type || type });
          }else if (obj.has(character.costume())){
            Crafty.enterScene(name, { type: options.type || type });
          }else{
            obj.destroy();
          }
        });

        var platforms = level.platforms;
        if (platforms) {
          for (var i = 0; i < platforms.length; i++) {
            var platform = platforms[i];
            var x = platform.x - (platform.w / 2);
            var y = platform.y - (platform.h / 2);
            var b = block.create(platform.costume).attr({ x: x, y: y, w: platform.w, h: platform.h });
            b.addComponent(platform.costume);
            if (platform.e === 1){
              enemy.create(platform.costume, platform.w, x).attr({x: x+(platform.w/2), y: y-64, w: 64, h: 64 });
            }
          }
        }
      });
    });
  };
});
