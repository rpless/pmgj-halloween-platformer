define(['require', 'block'], function(require, block) {
  return function(levelName) {
    require([levelName], function(level) {
      var platforms = level.platforms;
      if (platforms) {
        for (var i = 0; i < platforms.length; i++) {
          var platform = platforms[i];
          var x = platform.x - (platform.w / 2);
          var y = platform.y - (platform.h / 2);
          var b = block.create().attr({ x: x, y: y, w: platform.w, h: platform.h });
          b.addComponent(platform.costume);
        }
      }
    });
  };
});
