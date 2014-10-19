define(['crafty'], function(Crafty) {

  Crafty.c('Enemy', {

    _speed: 2,
    _pwidth: 0,
    _px: 0,

    init: function() {
      this.requires('2D, Canvas, Color');
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
      var e =Crafty.e('Enemy, ' + type);
      e._pwidth = pwidth;
      e._px = px;
      return e;

    }
  };
});
