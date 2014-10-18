define(['crafty', 'costume'], function(Crafty) {

  Crafty.c('Keyboard', {
    isDown: function(key) {
      return typeof key === 'string' && !!Crafty.keydown[Crafty.keys[key]];
    }
  });

  return {
    create: function(type) {
      var player = Crafty.e('2D, Canvas, Color, Collison, ' + type);
      player.addComponent('Fourway').fourway(5);
      player.addComponent('Gravity').gravity('Blue');
      player.bind('KeyDown', function(e) {
        if (e.key === Crafty.keys.I) {
          this.changeCostume('Pumpkin');
          this.antigravity(['Spider', 'Ghost']);
          this.gravity('Pumpkin');
        } else if (e.key === Crafty.keys.J) {
          this.changeCostume('Ghost');
          this.antigravity(['Spider', 'Pumpkin']);
          this.gravity('Ghost');
        }
      });

      player.addComponent('PlayerCostume');

      return player;
    }
  };
});
