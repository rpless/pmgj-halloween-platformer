define(['crafty', 'costume'], function(Crafty) {

  Crafty.c('Keyboard', {
    isDown: function(key) {
      return typeof key === 'string' && !!Crafty.keydown[Crafty.keys[key]];
    }
  });

  return {
    create: function(type) {
      var player = Crafty.e('2D, Canvas, Color, Collision, ' + type);
      player.addComponent('Fourway').fourway(10);
      player.addComponent('Gravity').gravity('Ghost');
      player.bind('KeyDown', function(e) {
        if (e.key === Crafty.keys.I) {
          this.changeCostume('Pumpkin');
          this.antigravity(['Spider', 'Ghost']);
          this.gravity('Pumpkin');
        } else if (e.key === Crafty.keys.J) {
          this.changeCostume('Ghost');
          this.antigravity(['Spider', 'Pumpkin']);
          this.gravity('Ghost');
        } else if (e.key === Crafty.keys.L) {
          this.changeCostume('Spider');
          this.antigravity(['Ghost', 'Pumpkin']);
          this.gravity('Spider');
        }
      });
      player.onHit('Enemy', function(hit) {
        if (hit[0].obj.has(this._cweak)) {
		    }
	    });
      player.addComponent('PlayerCostume');

      player.onHit('Candy', function(hit) {
        console.log('Got the Candy!');
        for (var i = 0; i < hit.length; i++) {
          var obj = hit[i].obj;
          if (obj.has('Candy')) {
            obj.destroy();
          }
        }
      });

      return player;
    }
  };
});
