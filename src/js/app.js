var Config = require('./conf/Config');
var BootState = require('./states/BootState');
var MenuState = require('./states/MenuState');
var PillState = require('./states/PillState');
var HairState = require('./states/HairState');

window.onload = function windowLoaded() {
    'use strict';
    var game = new Phaser.Game(
        Config.WIDTH,
        Config.HEIGHT,
        Phaser.AUTO,
        document.getElementById('viewport'),
        null,
        false,
        false
    );
    game.state.add('boot', BootState);
    game.state.add('menu', MenuState);
    game.state.add('pill', PillState);
    game.state.add('hair', HairState);
    game.state.start('boot');
};
