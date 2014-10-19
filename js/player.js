define(['crafty', 'costume'], function(Crafty) {

  Crafty.c('Player', {
    _grav: 0,
    _gravConst: 0.4,
    _speed: 5,
    _jump: 12,
    _canJump: true,

    init: function() {
      this.requires('2D, Canvas, Color, Collision, Ghost, PlayerCostume, Keyboard');
      this.bind('EnterFrame', this._enterFrame);
      this.onHit('Candy', this._candyCollide);
      this.bind('KeyDown', this._swapCostume);
    },

    _enterFrame: function() {
      if (this.isDown('A')) {
        this.x -= this._speed;
        if (this._didHit()) {
          this.x += this._speed;
        }
      }
      if (this.isDown('D')) {
        this.x += this._speed;
        if (this._didHit()) {
          this.x -= this._speed;
        }
      }
      this._grav += this._gravConst;
      if (!this._didHit()) {
        this.y += this._grav;
        var resetGrav = false;
        while (this._didHit()) {
          resetGrav = true;
          if (this._grav > 0) {
            this._canJump = true;
            this.y -= this._gravConst;
          } else if (this._grav < 0) {
            this._canJump = false;
            this.y += this._gravConst;
          }
        }
        if (resetGrav) {
          this._grav = 0;
          resetGrav = false;
        } else {
          this._canjump = false;
        }
      }
      if (this.isDown('W') && this._canJump) {
        this._canJump = false;
        this._grav -= this._jump;
      }
    },

    _didHit: function() {
      var hit = this.hit('Platform');
      return hit && hit[0].obj.has(this.costume());
    },

    _swapCostume: function(e) {
      if (e.key === Crafty.keys.I) {
        this.changeCostume('Pumpkin');
      } else if (e.key === Crafty.keys.J) {
        this.changeCostume('Ghost');
      } else if (e.key === Crafty.keys.L) {
        this.changeCostume('Spider');
      }
    },

    _candyCollide: function(hit) {
      console.log('Got the Candy!');
      for (var i = 0; i < hit.length; i++) {
        var obj = hit[i].obj;
        if (obj.has('Candy')) {
          obj.destroy();
        }
      }
    }
  });

  return {
    create: function(type) {
      var player = Crafty.e('Player');

      player.onHit('Enemy', function(hit) {
        if (hit[0].obj.has(this._cweak)) {
		    }
	    });

      return player;
    }
  };
});
