define(['require', 'player', 'block'], function(require, player, block) {
  return function(levelName) {
    require([levelName], function(level) {
      var start = level.start;
      player.create('Ghost').attr({ x: start.x, y: start.y, w: 64, h: 64 });
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
