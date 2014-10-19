define(['crafty'], function(Crafty) {

  var images = {
    'Ghost': 'assets/enemy_Ghost.png',
    'Pumpkin': 'assets/orange_enemy64.png',
    'Spider': 'assets/enemy_Spider.png',
  };

  Crafty.c('Enemy', {

    _speed: 2,
    _pwidth: 0,
    _px: 0,

    init: function() {
      this.requires('2D, Canvas, Image');
      this.bind('EnterFrame', this._enterFrame);
    },

    _enterFrame: function() {
      if (Math.round(Math.random())  && this.x >  this._px){
        this.x -= this._speed;
      }else if ( this.x < (this._px + this._pwidth) - 64){
        this.x += this._speed;
      }
    }
  });

  return {
    create: function (type, pwidth, px) {
      var e = Crafty.e('Enemy, ' + type);
      e.image(images[type], 'no-repeat');
      e._pwidth = pwidth;
      e._px = px;
      return e;

    }
  };
});
