var Config = require('../conf/Config');

module.exports = {
    'create': function hairStateCreate() {
        'use strict';
        this.shavedPercent = 0;
        this.shavedThreshold = 50;

        this.enterTime = new Date().getTime();
        this.timerMax = 10;
        this.timer = 0;
        this.timerRunning = true;

        this.game.stage.backgroundColor = 'rgba(0, 0, 0)';

        this.timerText = this.game.add.bitmapText(
            this.game.world.centerX,
            20,
            'test-font',
            Math.ceil(this.timer / 1000),
            12
        );
        this.timerText.align = 'center';
        this.timerText.scale = Config.SCALE;
    },

    'update': function hairStateUpdate(game) {
        'use strict';
        this.timerText.setText(Math.ceil(this.timerMax - (this.timer / 1000)));
        if (this.shavedPercent >= this.shavedThreshold) {
            this.timerRunning = false;
            this.successState();
        }
        if (this.timerRunning) {
            this.timer += game.time.elapsed;
            if (this.timer >= (this.timerMax * 1000)) {
                this.timerRunning = false;
                this.failState();
            }
        }
    },

    'render': function hairStateRender() {
        'use strict';
        // HOPE YOU LIKE SCREEN TEARING
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        this.game.stage.backgroundColor = 'rgba(' + r + ', ' + g + ', ' + b + ')';
    },

    'successState': function hairStateSucceed() {
        'use strict';
        console.log('success');
    },

    'failState': function hairStateFail() {
        'use strict';
        console.log('fail');
    }
};
