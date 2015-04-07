module.exports = {
    'preload': function bootStatePreLoad(game) {
        'use strict';
        game.load.image('test-background', 'assets/menu/menu-background.png');

        game.load.image('hair-background', 'assets/hair/hair-background.png');
        game.load.image('hair-tileset', 'assets/hair/hair-tileset.png');
        game.load.tilemap('hair-tilemap', 'assets/hair/hair-tilemap.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('hair-shaver', 'assets/hair/hair-shaver.png');
        game.load.image('hair-blades', 'assets/hair/hair-blades.png');

        game.load.bitmapFont('test-font', 'assets/ui/font.png', 'assets/ui/font.xml');

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    'create': function bootStateCreate(game) {
        'use strict';
        game.stage.backgroundColor = '#000';
        this.text = this.game.add.text(
            game.world.centerX,
            game.world.centerY,
            'Loading.',
            {
                'font': 'bold 60pt Arial',
                'fill': '#fff',
                'align': 'center'
            }
        );
        this.text.anchor.set(0.5);
    },
    'update': function bootStateUpdate(game) {
        'use strict';
        if (game.load.hasLoaded) {
            this.text.destroy();
            game.state.start('menu');
        }
    }
};
