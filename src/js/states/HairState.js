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
        this.background.scale = Config.SCALE;
        game.stage.backgroundColor = 'rgba(0, 0, 0)';

        this.map = game.add.tilemap('hair-tilemap');
        this.map.addTilesetImage('hair', 'hair-tileset');
        this.layer = this.map.createLayer('Tile Layer 1');
        this.layer.scale = Config.SCALE;
        this.layer.resizeWorld();

        this.timerText = this.game.add.bitmapText(
            30,
            10,
            'test-font',
            Math.ceil(this.timer / 1000),
            12
        );
        this.timerText.scale = Config.SCALE;
        this.timerText.fixToCamera = true;
        this.timerText.smoothed = false;
    },

    'update': function hairStateUpdate(game) {
        'use strict';
        if (this.shavedPercent >= this.shavedThreshold) {
            this.timerRunning = false;
            this.successState();
        }
        if (this.timerRunning) {

            game.physics.arcade.collide(this.blades, this.layer/*, function hairCollision(self, tile) {
                console.log(tile);
                if (tile.index === 1) {
                    tile.alpha = 0;
                }
            }*/);

            this.timerText.setText(Math.ceil(this.timerMax - (this.timer / 1000)));
            this.timer += game.time.elapsed;
            if (this.timer >= (this.timerMax * 1000)) {
                this.timerRunning = false;
                this.failState();
            }
        }
    },

    'render': function hairStateRender(game) {
        'use strict';
        // HOPE YOU LIKE SCREEN TEARING
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        this.game.stage.backgroundColor = 'rgba(' + r + ', ' + g + ', ' + b + ')';
        game.debug.body(this.blades);
        game.debug.bodyInfo(this.blades, 32, 32);
    },

    'successState': function hairStateSucceed() {
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

    'failState': function hairStateFail() {
        'use strict';
        this.timerText.setText('FAILURE');
        var _this = this;
        setTimeout(function () {
            _this.game.state.start('menu');
        }, 2000);
    }
};
