
define(['crafty'], function(Crafty) {

  Crafty.c('ScrollView', {
    viewport: Crafty.viewport,
    oldX: 0,
    oldY: 0,
    resetView: false,

    init: function() {
      this.requires('2D, Keyboard');

      this.viewport.x = this.x + (Crafty.DOM.window.width / 4);

      this.bind('EnterFrame', function() {
        if (!this.resetView) {
          if (this.isDown('A')) {
            this.viewport.scroll('x', this.viewport.x + Math.abs(this.x - this.oldX));
          } else if (this.isDown('D')) {
            this.viewport.scroll('x', this.viewport.x - Math.abs(this.x - this.oldX));
          }
          if ((Math.abs(this.viewport.y) + this.y) < 800) {
            if (this._grav > 0) {
              this.viewport.scroll('y', this.viewport.y - Math.abs(this.y - this.oldY));
            } else {
              this.viewport.scroll('y', this.viewport.y + Math.abs(this.y - this.oldY));
            }
          }
        }
        this.resetView = false;
        this.oldX = this.x;
        this.oldY = this.y;
      });
    },

    resetScroll: function() {
      this.viewport.scroll('x', 0);
      this.viewport.scroll('y', 0);
      this.resetView = true;
    }
  });
});
