define(['crafty'], function(Crafty) {

  var createCostume = function(name, color) {
    Crafty.c(name, {
      _costume: name,
      init: function() {
        this.requires('2D, Canvas, Color');
        this.color(color);
      }
    });
  };

  createCostume('Spider', '#F00');
  createCostume('Pumpkin', '#0F0');
  createCostume('Ghost', '#00F');

  Crafty.c('PlayerCostume', {
    _current: this._costume,
    changeCostume: function(type) {
      this.removeComponent(this._current);
      this.addComponent(type);
      this._current = type;
    }
  });
});
