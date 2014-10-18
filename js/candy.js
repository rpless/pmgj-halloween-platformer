define(['crafty'], function(Crafty) {

  Crafty.c('Candy', {
    init: function() {
      this.requires('2D, Canvas, Color');
    }
  });

  return {
    create: function() {
      return Crafty.e('Candy').color('#0a5');
    }
  };
});
