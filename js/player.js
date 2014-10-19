define(['crafty', 'costume'], function(Crafty) {

  Crafty.c('Player', {
    _grav: 0,
    _gravConst: 0.2,

    init: function() {
      this.requires('2D, Canvas, Color, Collision, Ghost, PlayerCostume, Fourway');
      this.fourway(10);
      this.bind('EnterFrame', this._enterFrame);
      this.onHit('Platform', function(hits) {
        this._adjustForCollision(hits, 'y', 'h');
      });
      this.onHit('Candy', this._candyCollide);
    },

    _enterFrame: function() {
      this._grav += 0.2;
      this.y += this._grav;
    },

    _adjustForCollision: function(hits, dir, size) {
      var largestOverlap = 0;
      var newValue = this[dir];
      for (var i = 0; i < hits.length; i++) {
        var hitObj = hits[i].obj;
        if (this.costume() === hitObj.costume()) {
          var playerBottom = this[dir] + this[size];
          var platformBottom = hitObj[dir] + hitObj[size];
          if (hitObj[dir] < playerBottom && playerBottom < platformBottom && largestOverlap < playerBottom - hitObj[dir]) {
            largestOverlap = Math.abs(playerBottom - hitObj[dir]);
            newValue = (hitObj[dir] - largestOverlap) - this[size];
          } else if (this[dir] < platformBottom && platformBottom < playerBottom && largestOverlap < platformBottom - this[dir]) {
            largestOverlap = Math.abs(platformBottom - this[dir]);
            newValue = (this[dir] + largestOverlap);
          }
        }
      }
      if (this[dir] !== newValue) this._grav = 0;
      this[dir] = newValue;
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
