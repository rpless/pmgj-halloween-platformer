define(['crafty'], function(Crafty) {

  var createCostume = function(name, color, weak) {
    Crafty.c(name, {
      _costume: name,
      _weak: weak,
      init: function() {
        this.requires('2D, Canvas, Color');
        this.color(color);
      }
    },weak);
  };

  createCostume('Spider', '#F00','Ghost');
  createCostume('Pumpkin', '#0F0','Spider');
  createCostume('Ghost', '#00F','Pumpkin');

  Crafty.c('PlayerCostume', {
    _current: this._costume,
    _cweak:this._weak,
   changeCostume: function(type) {
      this.removeComponent(this._current);
      this.addComponent(type);
      this._current = type;
    }
  });
});
