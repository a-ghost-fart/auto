module.exports = {
    'create': function playStateCreate() {
        'use strict';
        this.game.stage.backgroundColor = '#000';
        this.button = this.game.add.button(this.game.world.centerX - 95, 400, 'button', transitionPillState, this, 2, 1, 0);
        this.button = this.game.add.button(this.game.world.centerX - 95, 480, 'button', transitionHairState, this, 2, 1, 0);

        var _this = this;
        function transitionPillState() {
            _this.game.state.start('pill');
        }
        function transitionHairState() {
            _this.game.state.start('hair');
        }
    }
};
