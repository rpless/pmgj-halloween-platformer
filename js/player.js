define(['crafty', 'costume'], function(Crafty) {

  Crafty.c('Player', {
    _grav: 0,
    _gravConst: 0.2,
    _speed: 10,
    _canJump: true,

    init: function() {
      this.requires('2D, Canvas, Color, Collision, Ghost, PlayerCostume, Keyboard');
      this.bind('EnterFrame', this._enterFrame);
      this.onHit('Candy', this._candyCollide);
    },

    _enterFrame: function() {
      if (this.isDown('A')) {
        this.x -= this._speed;
        if (this.hit('Platform')) {
          this.x += this._speed;
        }
      }
      if (this.isDown('D')) {
        this.x += this._speed;
        if (this.hit('Platform')) {
          this.x -= this._speed;
        }
      }
      if (this.isDown('W') && this._canJump) {
        this._grav -= this._speed;
        this._canJump = false;
      }
      this._grav += this._gravConst;
      if (!this.hit('Platform')) {
        this.y += this._grav;
        var resetGrav = false;
        while (this.hit('Platform')) {
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
        this._grav -= (this._speed / 2);
      }
    },

    _adjustForCollision: function(hits, dir, size) {
      var largestOverlap = 0;
      var newValue = this.y;
      for (var i = 0; i < hits.length; i++) {
        var hitObj = hits[i].obj;
        if (this.costume() === hitObj.costume()) {
          var playerBottom = this.y + this.h;
          var platformBottom = hitObj.y + hitObj.h;
          if (hitObj.y < playerBottom && playerBottom < platformBottom && largestOverlap < playerBottom - hitObj.y) {
            largestOverlap = Math.abs(playerBottom - hitObj.y);
            newValue = (hitObj.y - largestOverlap) - this.h;
            this._canJump = false;
          } else if (this.y < platformBottom && platformBottom < playerBottom && largestOverlap < platformBottom - this.y) {
            largestOverlap = Math.abs(platformBottom - this.y);
            newValue = (this.y + largestOverlap);

          }
        }
      }
      if (this.y !== newValue) this._grav = 0;
      this.y = newValue;
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
      // player.addComponent('Gravity');
      // player.bind('KeyDown', function(e) {
      //   if (e.key === Crafty.keys.I) {
      //     this.changeCostume('Pumpkin');
      //     this.antigravity(['Spider', 'Ghost']);
      //     this.gravity('Pumpkin');
      //   } else if (e.key === Crafty.keys.J) {
      //     this.changeCostume('Ghost');
      //     this.antigravity(['Spider', 'Pumpkin']);
      //     this.gravity('Ghost');
      //   } else if (e.key === Crafty.keys.L) {
      //     this.changeCostume('Spider');
      //     this.antigravity(['Ghost', 'Pumpkin']);
      //     this.gravity('Spider');
      //   }
      // });

      player.onHit('Enemy', function(hit) {
        if (hit[0].obj.has(this._cweak)) {
		    }
	    });

      return player;
    }
  };
});
