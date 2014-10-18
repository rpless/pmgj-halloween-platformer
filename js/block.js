define(['crafty'], function(Crafty) {

  Crafty.c('Platform', {
    init: function() {
      this.requires('2D, Canvas, Color')
    }
  })

  return {
    create: function () {
      return Crafty.e('Platform').color('#0F0');
    }
  }
});
