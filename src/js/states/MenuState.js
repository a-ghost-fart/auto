var Config = require('../conf/Config');

module.exports = {
    'create': function playStateCreate(game) {
        'use strict';
        // Load the background first
        game.stage.backgroundColor = '#000';
        this.background = game.add.image(0, 0, 'test-background');

        var _this = this;
        this.menu = game.add.group();
        this.menuItems = [
            { 'label': 'pills', 'transition': 'pill' },
            { 'label': 'hair', 'transition': 'hair' }
        ];
        this.menuOffset = 10;

        this.menuItems.forEach(function iterateMenuItems(item, index) {
            var text = game.add.bitmapText(10, (_this.menuOffset * index), 'test-font', item.label, 12);
            text.stateTransition = item.transition;
            text.smoothed = false;
            text.inputEnabled = true;
            text.input.enabled = true;
            text.input.useHandCursor = true;
            _this.menu.add(text);
        });
    },

    'update': function playStateUpdate(game) {
        'use strict';
        this.menu.forEach(function (item) {
            if (item.input.justPressed()) {
                game.state.start(item.stateTransition);
            }
        });
    }
};
