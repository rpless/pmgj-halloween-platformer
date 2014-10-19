define(['crafty', 'levelLoader', 'block', 'candy'], function(Crafty, levelLoader, block, candy) {

  return {
    createLevel: function(name, url) {
      Crafty.defineScene(name, function() {
        levelLoader(name, url);
      });
    }
  };
});
