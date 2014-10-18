define(['crafty', 'player', 'block'], function(Crafty, player, block) {
  Crafty.defineScene('Platformer', function() {
    var character = player.create();
    character.attr({ x: 50, y: 50, w: 50, h: 50 });
    block.create().attr({ x: 50, y: 200, w: 150, h: 50 }).addComponent('Green');
    block.create().attr({ x: 50, y: 500, w: 150, h: 50 }).color('#00F').addComponent('Blue');
  });

  return {
    start: function() {
      Crafty.enterScene('Platformer');
    }
  };
});
