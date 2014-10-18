define(['crafty'], function(Crafty) {

  return {
    create: function() {
      var player = Crafty.e('2D, Canvas, Color, Fourway');
      player.attr({ x: 50, y: 50, w: 50, h: 50 })
            .color('#F00')
            .fourway(5);
      return player;
    }
  };
});
