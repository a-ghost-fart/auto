var Config = require('../conf/Config');

module.exports = {
    'create': function playStateCreate() {
        'use strict';
        // Load the background first
        this.game.stage.backgroundColor = '#000';
        this.background = this.game.add.image(0, 0, 'test-background');
        this.background.scale = Config.SCALE;

        var _this = this;
        this.menu = this.game.add.group();
        this.menuItems = [
            { 'label': 'something', 'transition': 'pill' },
            { 'label': 'something else', 'transition': 'hair' },
            { 'label': 'uhhhhhh', 'transition': 'uhh' }
        ];
        this.menuOffset = 10;

        this.menuItems.forEach(function iterateMenuItems(item, index) {
            var text = _this.game.add.bitmapText(10, (_this.menuOffset * index) * Config.SCALE.y, 'test-font', item.label, 12);
            text.scale = Config.SCALE;
            text.stateTransition = item.transition;
            text.inputEnabled = true;
            text.input.enabled = true;
            text.input.useHandCursor = true;
            _this.menu.add(text);
        });
    },

    'update': function playStateUpdate() {
        'use strict';
        var _this = this;
        this.menu.forEach(function (item) {
            if (item.input.justPressed()) {
                _this.game.state.start(item.stateTransition);
            }
        });
    }
};
