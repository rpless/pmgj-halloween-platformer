define(['crafty'], function(Crafty) {

  var createCostume = function(name, color, weak) {
    Crafty.c(name, {
      _costume: name,
      _weak: weak,
      init: function() {
        this.requires('2D, Canvas');
      },

      costume: function(type) {
        if (type) {
          this._costume = type;
        } else {
          return this._costume;
        }
      },

      weak: function(type) {
        if (type) {
          this._weak = type;
        } else {
          return this._weak;
        }
      }
    });
  };

  createCostume('Spider', '#F00','Ghost');
  createCostume('Pumpkin', '#0F0','Spider');
  createCostume('Ghost', '#00F','Pumpkin');

  Crafty.c('PlayerCostume', {
   changeCostume: function(type) {
      this.removeComponent(this._costume);
      this.addComponent(type);
    }
  });
});
