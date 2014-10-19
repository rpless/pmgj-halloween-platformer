define(['crafty'], function(Crafty) {

  Crafty.c('Enemy', {
    init: function() {
      this.requires('2D, Canvas, Color')
    }
  })

  return {
    create: function (type) {
      return Crafty.e('Enemy,'+type);
    }
  }
});