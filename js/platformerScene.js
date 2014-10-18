define(['crafty', 'player', 'block'], function(Crafty, player, block) {
  Crafty.defineScene('Platformer', function() {
    var character = player.create();
    character.attr({ x: 50, y: 0, w: 100, h: 100 }).color('#00F');
    block.create().attr({ x: 0, y: Crafty.DOM.window.height, w: 800, h: 2 }).addComponent('Ghost').addComponent('Spider').addComponent('Pumpkin');
  });

  return {
    start: function() {
      Crafty.enterScene('Platformer');
    }
  };
});
