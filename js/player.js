define(['crafty'], function(Crafty) {

  return {
    create: function() {
      var player = Crafty.e('2D, Canvas');
      player.addComponent('Color').color('#F00');
      player.addComponent('Fourway').fourway(5);
      player.addComponent('Gravity').gravity('Blue');

      return player;
    }
  };
});
