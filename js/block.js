define(['crafty'], function(Crafty) {

  var images = {
    'Ghost': 'assets/blackPlatform.png',
    'Pumpkin': 'assets/orange_platform64.png',
    'Spider': 'assets/whitePlatform.png',
  };

  return {
    create: function (type) {
      var e = Crafty.e('Platform, Canvas, Image, ' + type);
      e.image(images[type], 'repeat-x');
      return e;
    }
  }
});
