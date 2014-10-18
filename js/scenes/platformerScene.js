define(['crafty', '../actors/player'], function(Crafty, player) {
  Crafty.defineScene('Platformer', function() {
    player.create();
  });

  return {
    start: function() {
      Crafty.enterScene('Platformer');
    }
  };
});
