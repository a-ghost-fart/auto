var Config = require('../conf/Config');

module.exports = {
    'create': function hairStateCreate(game) {
        'use strict';

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 250;

        this.shavedPercent = 0;
        this.shavedThreshold = 50;

        this.enterTime = new Date().getTime();
        this.timerMax = 10;
        this.timer = 0;
        this.timerRunning = true;

        this.background = game.add.image(0, 0, 'hair-background');
        game.stage.backgroundColor = 'rgba(0, 0, 0)';

        this.map = game.add.tilemap('hair-tilemap');
        this.map.addTilesetImage('hair', 'hair-tileset');
        this.map.setCollision(1);
        this.layer = this.map.createLayer('Tile Layer 1');
        this.layer.resizeWorld();
        this.layer.debug = true;

        this.timerText = game.add.bitmapText(
            30,
            10,
            'test-font',
            Math.ceil(this.timer / 1000),
            12
        );
        this.timerText.fixToCamera = true;
        this.timerText.smoothed = false;

        this.blades = game.add.sprite(50, 30, 'hair-blades');
    },

    'update': function hairStateUpdate(game) {
        'use strict';
        if (this.shavedPercent >= this.shavedThreshold) {
            this.timerRunning = false;
            this.successState();
        }
        if (this.timerRunning) {
            game.physics.arcade.collide(this.blades, this.layer);
            //this.timerText.setText(Math.ceil(this.timerMax - (this.timer / 1000)));
            this.timer += game.time.elapsed;
            if (this.timer >= (this.timerMax * 1000)) {
                this.timerRunning = false;
                this.failState(game);
            }
        }
    },

    'render': function hairStateRender(game) {
        'use strict';
        // HOPE YOU LIKE SCREEN TEARING
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        game.stage.backgroundColor = 'rgba(' + r + ', ' + g + ', ' + b + ')';
        game.debug.body(this.blades);
        game.debug.bodyInfo(this.blades, 32, 32);

    },

    'successState': function hairStateSucceed(game) {
        'use strict';
        var messages = [
            'STUNNING',
            'HOW BEAUTIFUL',
            'SHIT, SON',
            'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG'
        ];
        var rand = Math.floor(Math.random() * messages.length);
        this.timerText.setText(messages[rand]);
    },

    'failState': function hairStateFail(game) {
        'use strict';
        this.timerText.setText('FAILURE');
        setTimeout(function () {
            game.state.start('menu');
        }, 2000);
    }
};
