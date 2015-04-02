var Config = require('./conf/Config');

window.onload = function windowLoaded() {
    'use strict';
    document.title = Config.TITLE + ' v' + Config.VERSION;

    var game = new Phaser.Game(
        Config.WIDTH * Config.SCALE.x,
        Config.HEIGHT * Config.SCALE.y,
        Phaser.AUTO,
        document.getElementById('viewport'),
        null,
        false,
        false
    );

    game.state.add('boot', require('./states/BootState'));
    game.state.add('menu', require('./states/MenuState'));
    game.state.add('pill', require('./states/PillState'));
    game.state.add('hair', require('./states/HairState'));
    game.state.start('boot');
};
