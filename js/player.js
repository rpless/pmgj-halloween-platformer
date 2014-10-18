define(['crafty'], function(Crafty) {

  Crafty.c('Keyboard', {
    isDown: function(key) {
      return typeof key === 'string' && !!Crafty.keydown[Crafty.keys[key]];
    }
  });

  return {
    create: function() {
      var player = Crafty.e('2D, Canvas, Color, Collison');
      player.addComponent('Fourway').fourway(5);
      player.addComponent('Gravity').gravity('Blue');
      player.bind('KeyDown', function(e) {
        if (e.key === Crafty.keys.I) {
          this.antigravity(['Red', 'Blue']);
          this.color('#0F0');
          this.gravity('Green');
        } else if (e.key === Crafty.keys.J) {
          this.antigravity(['Red', 'Green']);
          this.color('#00F');
          this.gravity('Blue');
        }
      });

      return player;
    }
  };
});
