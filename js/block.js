define(['crafty'], function(Crafty) {

  return {
    create: function (type) {
      return Crafty.e('Platform, ' + type);
    }
  }
});
