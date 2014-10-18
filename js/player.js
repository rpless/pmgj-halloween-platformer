define(['crafty', 'costume'], function(Crafty) {

  Crafty.c('Keyboard', {
    isDown: function(key) {
      return typeof key === 'string' && !!Crafty.keydown[Crafty.keys[key]];
    }
  });
	  
  return {
    create: function(type) {
      var player = Crafty.e('2D, Canvas, Color, Collision, ' + type);
      player.addComponent('Fourway').fourway(5);
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
        }
      });
      player.onHit('Enemy', function(hit){
		if (hit[0].ob.has(this._cweak)){
		
		}
	}
      player.addComponent('PlayerCostume');
      return player;
    }
  };
});
