define(['require', 'player', 'block'], function(require, player, block) {

  return function(name, url) {
    require([url], function(level) {
      var start = level.start;
      var character = player.create('Ghost').attr({ x: start.x, y: start.y, w: 64, h: 64 });
      character.bind('Move', function() {
        if (character.y > Crafty.DOM.window.height) {
          Crafty.enterScene(name);
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
        }
      }
    });
  };
});
