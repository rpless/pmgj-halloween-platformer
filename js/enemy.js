define(['crafty'], function(Crafty) {

  Crafty.c('Enemy', {

    _speed: 10,
    _pwidth: 0,
    _cwidth: 0,

    init: function() {
      this.requires('2D, Canvas, Color');
      this.bind('EnterFrame', this._enterFrame);
    },

    _enterFrame: function() {

      if (Math.round(Math.random()) && this.x-10 > this._cwidth){
        this.x -= this._speed;
        this._cwidth -= this._speed;

      } else if (this.x-10 < this._cwidth){
        this.x += this._speed;
        this._cwidth += this._speed
      }
    }
  });

  return {
    create: function (type, pwidth) {
      var e =Crafty.e('Enemy, ' + type);
      e._pwidth = pwidth;
      e._cwidth = pwidth / 2;
      return e;

    }
  };
});
