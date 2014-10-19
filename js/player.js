define(['crafty', 'costume', 'Scroller'], function(Crafty) {

  Crafty.sprite(64, 64, 'assets/allSprites_Stacked.png', {
    CharacterSprite: [0, 0]
  }, 25, 32);

  Crafty.c('Player', {
    _grav: 0,
    _gravConst: 0.4,
    _speed: 8,
    _jump: 15,
    _canJump: true,

    init: function() {
      this.requires('2D, Canvas, Collision, PlayerCostume, Keyboard, ScrollView, SpriteAnimation, CharacterSprite');
      this.bind('EnterFrame', this._enterFrame);
      this.onHit('Candy', this._candyCollide);
      this.bind('KeyDown', this._swapCostume);
      this.reel('PumpkinRun', 1000, 0, 0, 5);
      this.reel('GhostRun', 1000, 0, 1, 5);
      this.reel('SpiderRun', 1000, 0, 2, 5);
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
      if (e.key === Crafty.keys.UP_ARROW) {
        this.changeCostume('Pumpkin');
        this.animate('PumpkinRun', -1);
      } else if (e.key === Crafty.keys.LEFT_ARROW) {
        this.changeCostume('Ghost');
        this.animate('GhostRun', -1);
      } else if (e.key === Crafty.keys.RIGHT_ARROW) {
        this.changeCostume('Spider');
        this.animate('SpiderRun', -1);
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
      player.addComponent(type);
      player.animate(type + 'Run', -1);
      return player;
    }
  };
});
