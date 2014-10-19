define(['crafty', 'player', 'block', 'candy'], function(Crafty, player, block, candy) {
  Crafty.defineScene('Platformer', function() {
    var character = player.create();
    character.attr({ x: 50, y: 0, w: 100, h: 100 }).color('#00F');
    candy.create().attr({ x: 150, y: 300, w: 50, h: 50 });
    block.create().attr({ x: 0, y: Crafty.DOM.window.height, w: 800, h: 2 }).addComponent('Ghost').addComponent('Spider').addComponent('Pumpkin');
  });

  return {
    start: function() {
      Crafty.enterScene('Platformer');
    }
  };
});
