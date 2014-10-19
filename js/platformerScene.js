define(['crafty', 'levelLoader', 'block', 'candy'], function(Crafty, levelLoader, block, candy) {

  return {
    createLevel: function(name, url) {
      Crafty.defineScene(name, function() {
        levelLoader(url);
        block.create().attr({ x: 0, y: Crafty.DOM.window.height, w: 800, h: 2 }).addComponent('Ghost').addComponent('Spider').addComponent('Pumpkin');
      });
    }
  };
});
