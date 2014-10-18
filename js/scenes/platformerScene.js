define(['crafty'], function(Crafty) {
  Crafty.defineScene('Platformer', function() {
    Crafty.e('2D, DOM, Color').attr({x: 0, y: 0, w: 100, h: 100}).color('#F00');
  });

  return {
    start: function() {
      Crafty.enterScene('Platformer');
    }
  };
});
